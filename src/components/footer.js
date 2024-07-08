import React from 'react'

const Footer = () => {
    return (
        <div className='text-white font-roboto-mono pb-4  h-[350px] flex flex-col justify-between'>
            <div className='flex flex-col items-center justify-center w-full text-center gap-4'>
                <span className='text-2xl'>Interesting Stories | Updates | Guides</span>
                <span className='text-sm font-Quicksand'>Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.</span>
                <div className='flex'>
                    <input type="email" className='rounded-r-none rounded-lg px-4 py-3 outline-none bg-white text-black ' placeholder='Enter your email' />
                    <span className='rounded-r-lg bg-white  px-4 py-[14px]'>
                        <span className='bg-bgColor p-2 rounded-lg cursor-pointer'>Submit</span>
                    </span>
                </div>
                <div>

                </div>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='bg-white w-full h-[1px]'></div>
                <div className='flex justify-between px-2 pb-3'>
                    <span>© Bikkey. All rights reserved</span>
                    <span>Made by Bikkey</span>
                </div>

            </div>
        </div>
    )
}

export default Footer