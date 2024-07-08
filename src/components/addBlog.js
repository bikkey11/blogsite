import React, { useState } from 'react';
import { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firbaseConfig';
import { collection, addDoc, setDoc,doc } from 'firebase/firestore';
import { db, storage } from '../utils/firbaseConfig';
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';


const AddBlog = () => {
    const user = useAuthState(auth);
    const hiddenFileInput = useRef(null);
    const [formData, setFormData] = useState({ "category": "", "title": "", "tags": "", "summary": "", "main_content": "", "subtitle": "" })
    const [writer, setUser] = useState(user[0]?.reloadUserInfo)
    const [featureImage, setImage] = useState("")
    const [featured_image, setFeature_image] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setUser(user[0].reloadUserInfo)
        let blogData = { ...formData, "featured_image": featured_image, "user": writer }
        console.log(blogData)


        try {

            const docRef = await addDoc(collection(db, "blogs"), {
                ...blogData,

            });
            await setDoc(doc(db, "blogs", docRef.id), {
                ...blogData,
                id: docRef.id
            });
            console.log("Document written with Id", docRef.id)

        } catch (error) {
            console.log("Error adding document", error)

        }
    }

    const handleImageFile = (e) => {
        setImage(e.target.files[0])
    }

    const uploadImageHandler = () => {
        if (featureImage !== null) {
            const imageRef = storageRef(storage, `/FeatureImage/${featureImage.name}`)
            uploadBytes(imageRef, featureImage).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setFeature_image(url)
                }).catch((err) => {
                    console.log(err)
                })
            }).catch((err) => {
                console.log(err)
            })


        }

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData, [name]: value
        }))

    }


    return (
        <div className='text-black my-10 mb-20  flex items-center w-full justify-center'>
            <div className='flex flex-col items-center justify-center gap-10 px-10 py-6 bg-slate-300 rounded-xl '>
                <h1 className='text-center font-roboto-mono text-3xl font-semibold'>Write New Blog!!!</h1>
                <form action="" className='flex flex-col font-Quicksand gap-6   ' onSubmit={handleFormSubmit}>
                    <div className='flex flex-wrap justify-between gap-10'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Select categorey</label>
                            <select defaultValue="Science" name='category' onSelect={handleInputChange} onChange={handleInputChange} className='rounded-lg outline-none p-2'>
                                <option value="Science" >Science</option>
                                <option value="Technology">Technology</option>
                                <option value="Social">Social</option>

                            </select>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="Title">Title</label>
                            <input name='title' required={true} onChange={handleInputChange} type="text" placeholder='Enter title ' className='outline-none p-2 rounded-lg' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Tags</label>
                            <input type="text" required name="tags" onChange={handleInputChange} id="" className='outline-none p-2 rounded-lg' placeholder='Enter the tags' />

                        </div>
                    </div>

                    <div className='flex flex-wrap  justify-between gap-10 items-end'>
                        <div className='flex    px-2  h-full  '>
                            {featureImage ? <span onClick={uploadImageHandler} className='bg-white p-2 rounded-lg cursor-pointer'>Upload this image</span> :
                                <label htmlFor="" className='bg-white p-2 rounded-lg cursor-pointer' onClick={(e) => hiddenFileInput.current.click()}>Select Image</label>

                            }
                            <input name='featured_image' required onChange={handleImageFile} ref={hiddenFileInput} type="file" className='hidden' id="" placeholder='Enter the tags' />

                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Subtitle</label>
                            <input name='subtitle' required onChange={handleInputChange} type="text" placeholder='Enter subtitle' className='outline-none p-2 rounded-lg' />

                        </div>




                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="">Summary</label>
                        <textarea required onChange={handleInputChange} name='summary' rows="5" type="text" className='p-2 outline-none rounded-lg' placeholder='Enter subtitle' />

                    </div>







                    <div className='flex flex-col gap-1'>
                        <label htmlFor="Content">Content</label>
                        <textarea required rows="10" name="main_content" onChange={handleInputChange} id="" className='p-2 outline-none rounded-lg' placeholder='Enter main content'></textarea>

                    </div>
                    <div className='text-center' onClick={handleFormSubmit}>
                        <span className='w-full hover:border hover:bg-slate-200 hover:border-red-500 bg-white px-10 rounded-full py-2 cursor-pointer'>Add Post</span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddBlog