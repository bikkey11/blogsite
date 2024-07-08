import React from 'react'
import { getmyBlogs } from '../Dara/data'
import { db } from '../utils/firbaseConfig';
import { collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Delete = () => {
    const navigate=useNavigate()
    const myblogs = getmyBlogs();
    const deleteBlogHandler = (id) => {
        const docRef = doc(db, "blogs", id);
        deleteDoc(docRef).then(() => {
            navigate("/")
            

            console.log("DEleted sucessfully")
        }).catch((err) => {
            console.log("Error occured", err)
        })

    }

    console.log(myblogs)
    return (
        <div className='text-black flex flex-col gap-4 px-4  mt-10 border-b pb-10 mb-6 '>
            <h1 className='text-white text-center text-4xl font-roboto-mono'>Delete blog Now</h1>
            {myblogs.map((blog, index) => (
                <div className='bg-slate-300 rounded-sm px-4 py-2 flex justify-between'>
                    <h1 className='font-roboto-mono'>{blog.title}</h1>
                    <div onClick={() => {
                        deleteBlogHandler(blog.id)

                    }} className='bg-red-400 hover:bg-red-500 px-2 rounded-lg'>Delete</div>
                </div>
            ))}
        </div>
    )
}

export default Delete