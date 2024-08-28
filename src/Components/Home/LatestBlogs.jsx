import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LatestBlogs.css';
import {Link} from 'react-router-dom'

const baseUrl = process.env.REACT_APP_BASE_URL;

const LatestBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${baseUrl}/getRecent`);
            setBlogs(response.data.data);
        };
        fetch();
    }, []);

    return (
        <div className='latest-blogs container page'>
            {blogs && blogs.map((item, i) => (
                <div>
                    <Link to={`/blogsPage/${item._id}`}><h1>{item.title}</h1></Link>
                    <p>{item.description.slice(0,500)}...</p>
                </div>
            ))}
        </div>
    );
};   

export default LatestBlogs;
