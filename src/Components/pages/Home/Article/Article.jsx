import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import './Article.css'
import DOMPurify from 'dompurify'
import api from './../../../../utils/Api.js'
import { useParams } from 'react-router'
import Comments from '../../../Comments/Comments.jsx'
import NewComment from '../../../New-Comment/NewComment.jsx'

export default function Article() {
    let param = useParams();
    const [article, setArticle] = useState(null);

    let content = '';
    if (article) content = DOMPurify.sanitize(article.content);

    useEffect(() => {
        async function getArticle() {
            let result = await api(`/blogs/${param.id}`);
            setArticle(result.blog);
        }
        getArticle();
    }, [])
    return (
        <>
            <div className="wrapper">
                <div className="main-content">
                    <article className="prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: content }}></article>
                </div>
            </div >
            <Comments id={param.id}></Comments>
        </>
    )
}
