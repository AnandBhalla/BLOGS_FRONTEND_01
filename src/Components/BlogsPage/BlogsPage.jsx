import React, { useEffect, useState} from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { FaRegEdit } from "react-icons/fa";
import './BlogsPage.css';
import { MdDelete } from "react-icons/md";
import {Link} from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL;

const BlogsPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async () => {
        navigate('/blogs');
        await axios.delete(`${baseUrl}/deleteblogs/${id}`);
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${baseUrl}/get/${id}`);
            setBlog(response.data.data);
        };
        fetch();
    }, [id]);

    return (
        <div className="blog-page">
            {blog ? (
                <div>
                    <div className='icon'>
                        <Link to={`/updateblog/${blog._id}`}><FaRegEdit /></Link>
                        <button onClick={handleDelete} className="delete-btn">
                            <MdDelete />
                        </button>
                    </div>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BlogsPage;
