import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firbaseConfig";
import { data, setGlobalData } from "../Dara/data"
import FeaturePost from './featurePost';
import RecentsPost from './recentsPost';
import { useNavigate } from 'react-router-dom';
import Loading from './loading';
import { setmyBlogs } from '../Dara/data';

const Homepage = () => {
  const [blogData, setBlogData] = useState("")
  useEffect(() => {
    const fetchBlog = async () => {
      let blog = []
      const q = query(collection(db, "blogs"), where("user.email", "==", "suchanayogi12@gmail.com"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        blog.push(doc.data())
      })
      setmyBlogs(blog)
      blog = blog.concat(data)
      setBlogData(blog)
      setGlobalData(blog)


    }
    fetchBlog()
  }, [])
  const navigate = useNavigate();
  var sectionStyle = {
    width: "100%",
    height: "640px",
    backgroundImage: `url(${blogData[0]?.featured_image})`,
    backgroundSize: "cover",
  };
  return (
    <div>
      {blogData ? <div className='text-white lg:mx-28  mx-10 mb-12' >
        <div style={sectionStyle} className='rounded-lg pb-10 mb-10'>
          <div className='flex flex-col h-full justify-end font-roboto-mono gap-4 px-4'>
            <span className='border w-[150px] text-center rounded-full py-2 cursor-pointer'>
              {blogData[0]?.category}
            </span>
            <span onClick={() => navigate(`/blog/${blogData[0]?.id}`)}
              className='text-xl font-semibold hover:underline cursor-pointer transition ease-in-out'>
              {blogData[0]?.title}
            </span>
            <span className='font-Quicksand text-sm w-[400px] lg:w-[700px] '>
              {blogData[0]?.summary}
            </span>
          </div>

        </div>
        <FeaturePost data={blogData.slice(1, 4)} />
        <RecentsPost data={blogData.slice(4, 10)} />
      </div> : <Loading />}
    </div>
  )
}

export default Homepage
