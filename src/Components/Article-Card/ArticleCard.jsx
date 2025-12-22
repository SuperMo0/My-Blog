import React, { useEffect, useState } from 'react'
import './ArticleCard.css'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from 'react-router';

import api from './../../utils/Api.js'



export default function ArticleCard({ article }) {
    let navigate = useNavigate();
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        let like = JSON.parse(localStorage.getItem(`${article.id}`));
        if (like) setLiked(true);
    })

    async function handleLike() {
        let res = await api(`/blogs/${article.id}/like`, { method: 'post' });
        setLiked(!liked);
        if (liked) {
            localStorage.removeItem(article.id);
            article.likes--;
        }
        else {
            localStorage.setItem(article.id, true)
            article.likes++;
        };
    }

    return (
        <div onClick={() => { navigate(`/blogs/${article.id}`) }} className='article-card'>
            <img className='home-article-card-image' src="https://picsum.photos/300" alt="" />
            <div className="home-article-card-meta-wrapper">
                <h2 className='home-article-card-title'>{article.title}</h2>
                <div className="data-like-container">
                    <p className='home-article-card-date'>{article.created_at.slice(0, 10)} </p>
                    <div style={{ display: 'flex', gap: '5px', alignItems: "center" }} className="container">
                        <p>{article.likes}</p>
                        {liked ? <GoHeartFill onClick={handleLike} className='love-red'></GoHeartFill> : <GoHeart onClick={handleLike} className='love' />}
                    </div>
                </div>
                <button className='home-article-card-button'>Read Article</button>
            </div>
        </div>
    )
}
