import React from 'react'
import PageOne from '../Components/Home/pageOne.jsx'
import LatestBlogs from '../Components/Home/LatestBlogs.jsx'
import './Home.css'

const Home = () => {
  return (
    <div>
      <PageOne/>

        <div className='d-flex justify-content-center align-items-center my-4'>
            <h1 className='heading'>LATEST BLOGS</h1>
        </div>

      <LatestBlogs/>
    </div>
  )
}

export default Home
