import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import './Article.css'
import DOMPurify from 'dompurify'
import api from './../../../utils/Api.js'
import { useParams } from 'react-router'
import Comments from './../../Comments/Comments.jsx'

export default function Article({ preview, previewContent }) {
    let param = useParams();
    const [article, setArticle] = useState(null);

    let content = previewContent;
    console.log(content);

    if (article) content = DOMPurify.sanitize(article.content);

    useEffect(() => {
        if (preview) return;
        async function getArticle() {
            let [result, ok] = await api(`/blogs/${param.id}`);
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
            {!preview && <Comments id={param.id}></Comments>}
        </>
    )
}
