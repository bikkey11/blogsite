// src/components/Header.jsx
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, signInWithGooglePopup } from '../utils/firbaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth'

const Header = () => {
  const [user] = useAuthState(auth)
  const [profileMenu, showProfileMenu] = useState((false))
  const logGoogleUser = async () => {
     await signInWithGooglePopup();
  }
  const handleLogout = () => {
    auth.signOut();
  }



  return (
    <div className='text-white flex px-10 lg:px-28 py-6 w-full justify-between font-roboto-mono items-center  '>
      {
        user ? (
          <div>
            <div onClick={() => showProfileMenu(!profileMenu)} className='relative cursor-pointer'>{user.displayName}</div>
            {
              profileMenu ? <ul className='absolute left-[80px] top-[60px] bg-slate-300 text-black rounded-md p-2 flex flex-col gap-2'>
                <li onClick={handleLogout} className=' border-b border-slate-500 pb-1 hover:text-blue-400 cursor-pointer '>Logout</li>
                <Link to="/addBlog" onClick={() => showProfileMenu(!profileMenu)} className=' border-b border-slate-500 pb-1 hover:text-blue-400 cursor-pointer '>Write new blog</Link>
                <Link to='/deleteBlog' onClick={() => {
                  showProfileMenu(false)
                }} className=' border-b border-slate-500 pb-1 hover:text-blue-400 cursor-pointer '>Delete blog</Link>



              </ul> : <div />
            }
          </div>
        ) :
          <div onClick={logGoogleUser} className='cursor-pointer hover:border-b hover:border-red-200 transition-[border] pb-1'>Login</div>

      }
      <ul className='flex gap-8 '>
        <Link to="/" className='cursor-pointer hover:border-b hover:border-red-200 transition-[border] pb-1 '>Home</Link>
        <li className='cursor-pointer hover:border-b hover:border-red-200 transition-[border] pb-1'>Projects</li>
        <li className='cursor-pointer hover:border-b hover:border-red-200 transition-[border] pb-1'>About</li>
        <li className='cursor-pointer hover:border-b hover:border-red-200 transition-[border] pb-1'>Contact</li>

      </ul>
    </div>
  )
};

export default Header;
