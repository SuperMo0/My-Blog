import React, { useEffect } from 'react'
import { FaUserLarge } from "react-icons/fa6";
import './Comments.css'
import api from './../../utils/Api.js';
import { useState } from 'react';
import NewComment from '../New-Comment/NewComment.jsx';


export default function Comments({ id }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            let response = await api(`/blogs/${id}/comments`);
            setComments(response.comments);
        }
        getComments();
    }, [])

    function handleAddComment(comment) {
        setComments([...comments, comment]);
    }

    return (
        <>
            <div className="wrapper">
                <h1 className='comments-section-title'>Comments</h1>
                {comments.map((c) => {
                    return (
                        <div key={c.id} className="comment">
                            <div className="comment-author">
                                <div className="avatar">
                                    <FaUserLarge className='user'></FaUserLarge>
                                </div>
                                <div>
                                    <p>{c.author_name}</p>
                                    <p className='home-article-card-date'>{c.created_at.slice(0, 10)}</p>
                                </div>
                            </div>
                            <p>{c.content}</p>
                        </div>
                    )
                })}
            </div>
            <NewComment id={id} handleAddComment={handleAddComment} ></NewComment>
        </>
    )
}
