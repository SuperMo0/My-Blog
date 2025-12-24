import React, { useEffect, useState, useRef } from 'react'
import MyEditor from '../../Editor/Editor'
import './EditorPage.css'
import { Link, useParams } from 'react-router';
import api from './../../../utils/Api.js'
import Notification from '../../Notification/Notification.jsx';
import Article from '../Article/Article.jsx';


export default function EditorPage({ dark }) {
    const { id } = useParams();

    const [InitialContent, setInitialContent] = useState(null);

    const [title, setTitle] = useState('');

    const [published, setPublished] = useState(false);

    const [preview, setPreview] = useState(false);

    const [notification, setNotification] = useState(false);

    const [loading, setLoading] = useState(!!id);

    const editorRef = useRef(null);

    const titleRef = useRef(null);

    useEffect(() => {
        if (!id) return;
        async function getInitialBlog() {
            const [result, ok] = await api(`/admin/blogs/${id}`);
            if (ok) {
                let blog = result.blog;
                setInitialContent(blog.content);
                setTitle(blog.title);
                setPublished(blog.published);
                setLoading(false);
            }
        }
        getInitialBlog();
    }, [])

    useEffect(() => {
        if (!notification) return;

        let timeId = setTimeout(() => { setNotification(null) }, 2000);

    })

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    async function handleSave() {
        let body = {
            published: published,
            title: title,
            content: editorRef.current.getContent(),
        }
        let path = id ? `/admin/blogs/${id}` : '/admin/blogs';
        let [result, ok] = await api(path, { method: id ? 'put' : 'post', body: JSON.stringify(body) });
        if (ok) setNotification('article saved successfuly');
        else setNotification('there was a problem !');
    }

    function togglePreview() {
        setPreview(!preview);
    }

    // <Notification ref={notifyRef}></Notification>

    if (loading) return <h1>loading.....</h1>;

    let content = editorRef.current ? editorRef.current.getContent() : InitialContent;

    return (
        <>
            {notification && <Notification message={notification} />}
            <div className="wrapper">
                {preview &&
                    <div className="window">
                        <button onClick={togglePreview}>close</button>
                        <Article preview={true} previewContent={content} ></Article>
                    </div>
                }

                <div hidden={preview ? true : false} className="flex editor-menu">
                    <button onClick={togglePreview} >preview</button>
                    <button onClick={handleSave}>Save</button>
                    <Link to={'/admin/dashboard'}>  <button>Dashboard</button></Link>
                </div>
                <input value={title} onChange={handleTitleChange} className='title-input' type="text" placeholder='Article Title' />
                <MyEditor content={content} EditorRef={editorRef} />
            </div>
        </>

    )
}
