import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import WriteBlog from './Pages/WriteBlog'
import BlogsPage from './Components/BlogsPage/BlogsPage';

const App = () => {
  return (
      <Router>

        <Navbar/>

        <Routes>

          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/writeblog' element={<WriteBlog/>}></Route>
          <Route path='/updateblog/:id' element={<WriteBlog/>}></Route>
          <Route path='/blogsPage/:id' element={<BlogsPage/>}></Route>
        </Routes>
      </Router>
  )
}

export default App
