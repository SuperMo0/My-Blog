import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import './Article.css'
import DOMPurify from 'dompurify'
import api from './../../../utils/Api.js'
import { useParams } from 'react-router'
import Comments from './../../Comments/Comments.jsx'
import prism from 'prismjs'

export default function Article({ preview, previewContent }) {
    let param = useParams();
    const [article, setArticle] = useState(null);

    let content = previewContent;

    if (article) content = DOMPurify.sanitize(article.content, { ADD_ATTR: ['target'] });

    useEffect(() => {
        if (preview) return;
        async function getArticle() {
            let [result, ok] = await api(`/blogs/${param.id}`);
            setArticle(result.blog);
        }
        getArticle();
    }, [])

    useEffect(() => {
        prism.highlightAll();
    })

    if (!article) return <></>
    return (
        <>
            <div className="wrapper">
                <div className="main-content">
                    <article className="prose sm:prose-lg prose-img:!w-full  prose-img:!h-auto prose-img:rounded-lg prose-pre:max-w-[calc(99vw)] prose-pre:overflow-x-auto"
                        dangerouslySetInnerHTML={{ __html: content }}></article>
                </div>
            </div >
            {!preview && <Comments id={param.id}></Comments>}
        </>
    )
}
