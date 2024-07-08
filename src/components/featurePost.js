import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturePost = ({ data }) => {
    const navigate = useNavigate()
    var sectionStyle = {
        width: "100%",
        height: "500px",
        backgroundImage: `url(${data[0].featured_image})`,
        backgroundSize: "cover",
    };

    return (
        <div className='flex flex-col gap-8 cxl:h-screen pt-10'>
            <h1 className='text-5xl font-roboto-mono font-semibold '>Featured Posts</h1>
            <div className=' items-center flex w-full'>
                <div className='grid cxl:grid-cols-2  gap-4 w-full'>
                    <div style={sectionStyle} className='rounded-lg pb-6'>
                        <div className='flex flex-col h-full justify-end font-roboto-mono gap-4 px-4'>
                            <span className='border w-[150px] text-center rounded-full py-2 cursor-pointer'>
                                {data[0].category}
                            </span>
                            <span onClick={() => navigate(`/blog/${data[0].id}`)}
                                className='text-xl font-semibold hover:underline cursor-pointer transition ease-in-out'>
                                {data[0].title}
                            </span>
                            <span className='font-Quicksand text-sm w-[300px] lg:w-[700px] '>
                                {data[0].summary}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex sm:flex-row cxl:flex cxl:flex-col gap-6 justify-between h-[500px] font-roboto-mono'>
                        <div className='h-1/2 md:flex gap-2'>
                            <img src={data[1].featured_image} className='lg:h-full md:h-[200px] md:w-[200px] md:lg:w-[250px] w-[250px] h-full  rounded-lg' alt="" />
                            <div className='flex flex-col justify-center gap-2 max-w-[250px] lg:max-w-full'>
                                <span className='text-blue-500'>{data[1].category}</span>
                                <span onClick={() => navigate(`/blog/${data[1].id}`)}
                                    className='font-Quicksand hover:underline cursor-pointer transition ease-in-out'>{data[1].title}</span>
                                <span className='text-sm hover:underline cursor-pointer hover:text-blue-400'>{data[1].created_at}</span>

                            </div>
                        </div>
                        <div className='h-1/2 md:flex gap-2'>
                            <img src={data[2].featured_image} className='lg:h-full md:h-[200px] md:w-[200px] md:lg:w-[250px] w-[250px] h-full rounded-lg' alt="" />
                            <div className='flex flex-col justify-center gap-2 max-w-[250px] lg:max-w-full'>
                                <span className='text-blue-500'>{data[2].category}</span>
                                <span onClick={() => navigate(`/blog/${data[2].id}`)}
                                    className='font-Quicksand hover:underline cursor-pointer transition ease-in-out '>{data[2].title}</span>
                                <span className='text-sm hover:underline cursor-pointer hover:text-blue-400'>{data[2].created_at}</span>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturePost