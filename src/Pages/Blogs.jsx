import  axios  from 'axios'
import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const baseUrl = process.env.REACT_APP_BASE_URL;

const Blogs = () => {
  
  const [blogs, setblogs] = useState()

  useEffect(() => {
    const fetch =async ()=>{
      const response=await axios.get(`${baseUrl}/getAll`);
      setblogs(response.data.data)
    };
    fetch();
  }
  , [])
  

  return (
    <div>
      <div className='latest-blogs container page my-5'>
            {blogs && blogs.map((item, i) => (
                <div>
                    <Link to={`/blogsPage/${item._id}`}><h1>{item.title}</h1></Link>
                    <p>{item.description.slice(0,500)}...</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blogs