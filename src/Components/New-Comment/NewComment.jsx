import React, { useRef } from 'react'
import './NewComment.css'
import api from './../../utils/Api.js'
import { useNavigate } from 'react-router';

export default function NewComment({ id, handleAddComment }) {
    let navigate = useNavigate();

    async function handleNewComment(e) {
        e.preventDefault();
        let f = e.target;

        let data = new FormData(f);

        let object = Object.fromEntries(data.entries());

        e.target.reset();

        let [result, ok] = await api(`/blogs/${id}`, { method: 'post', body: JSON.stringify(object) });

        handleAddComment(result.comment);
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleNewComment} className="comment-section-input-container" action="">
                <input name='author_name' required minLength={2} maxLength={1000} className='comment-section-input' type="text" placeholder='leave your name' />
                <textarea name='content' required minLength={2} maxLength={1000} className='comment-section-input' type="text" placeholder='Comment' />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
