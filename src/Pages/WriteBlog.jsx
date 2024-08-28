import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './WriteBlog.css';
import { useParams, useNavigate } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_BASE_URL;

const WriteBlog = () => {
  const [blog, setBlog] = useState({ title: "", description: "" });
  const [page, setPage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      navigate('/blogs');
      if (id) {
        await axios.put(`${baseUrl}/update/${id}`, blog);
      } else {
        await axios.post(`${baseUrl}/post`, blog);
      }
      setBlog({ title: "", description: "" });
    } catch (error) {
      console.error("Error occurred while submitting the blog:", error);
    }
  };

  useEffect(() => {
    setPage(id ? "update" : "write");
  }, [id]);

  useEffect(() => {
    const fetchBlog = async () => {
      try{
        if (page==="update") {
          const response = await axios.get(`${baseUrl}/get/${id}`);
            setBlog({ title: response.data.data.title, description: response.data.data.description });
        }
        else{
          setBlog({ title: "", description: "" })
        }
      }
      catch(error){}
    };
    fetchBlog();
  }, [id,page]);

  return (
    <div className="write-blog-container">
      <form className="write-blog-form" onSubmit={handleSubmit}>
        <h2>{id ? "UPDATE BLOG" : "WRITE NEW BLOG"}</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={blog.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">{id ? "Update" : "Post"}</button>
      </form>
    </div>
  );
};

export default WriteBlog;