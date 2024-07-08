import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentsPost = ({ data }) => {
  const navigate=useNavigate()
  return (
   <div className='flex flex-col gap-8 border-b border-white pb-10'>
    <h1 className='text-5xl font-roboto-mono  font-semibold'>Recents Posts</h1>
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full gap-y-10 '>
        {data.map((data, index) => (
          <div key={index} className='flex flex-col font-Quicksand gap-2 max-w-[350px] h-[320px]'>
            <img src={data.featured_image} className='rounded-lg h-[200px] w-[350px]' alt="" />
            <span className='font-roboto-mono'>{data.category}</span>
            <span onClick={()=>navigate(`/blog/${data.id}`)} 
             className='text-sm hover:underline cursor-pointer transition ease-in-out'>{data.title}</span>
            <span>{data.created_at}</span>
          </div>
        ))}
    </div>
   </div>
  )
}

export default RecentsPost