import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
// import { data } from '../Dara/data';
import { getGlobalData } from '../Dara/data';

const BlogPost = () => {
    const { id } = useParams();
    const [main_content, showMain_content] = useState(false)
    const data=getGlobalData()
    const blog = data.find(data => data.id === id)
    console.log(blog)
    function removeTags(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();

        // Regular expression to identify HTML tags in
        // the input string. Replacing the identified
        // HTML tag with a null string.
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    return (
        <div className='text-white font-Quicksand mb-20 mt-10 mx-32 border-b pb-10 border-white'>
            <div className='flex flex-col gap-10'>
                <div>
                    <h3 className='text-base text-blue-400 cursor-pointer'>{blog?.category}</h3>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-roboto-mono font-bold text-2xl'>{blog?.title}</h1>
                        <span className='text-sm hover:text-blue-300'>By {blog?.user.username || blog?.user.displayName}</span>
                        <span className='text-xs'>{blog?.created_at?.slice(4)}</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold font-roboto-mono'>Subtitle</h1>
                    <p className='text-sm px-2'>{blog?.subtitle}</p>

                </div>
                <div className=''>
                    <h1 className='font-semibold font-roboto-mono'>Summary</h1>
                    <p className='px-2'>{blog?.summary} <span className='text-blue-500 hover:underline cursor-pointer' onClick={() => showMain_content(true)}>Read Full...</span></p>

                </div>
                {
                    main_content ?
                        <div className=' md:flex-row flex flex-col gap-8'>
                            <img src={blog.featured_image} className='h-[480px] w-[480px]' alt="" />
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-semibold font-roboto-mono'>Main Content</h1>
                                <p>{removeTags(blog?.main_content)}</p>

                            </div>
                        </div> : <div />
                }
            </div>
        </div>
    )
}

export default BlogPost