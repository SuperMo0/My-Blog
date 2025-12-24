import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import './Dashboard.css'
import { GoHeart } from "react-icons/go";
import { GoTrash } from "react-icons/go";
import { useState } from 'react';
import api from './../../../utils/Api.js'



export default function DashBoard() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {

        async function getArticles() {
            let [result, ok] = await api('/admin/blogs', {});
            setArticles(result.blogs);
        }
        getArticles();

    }, [])

    async function handleDelete(id) {
        const [result, ok] = await api(`/admin/blogs/${id}`, { method: 'delete' });
        setArticles(articles.filter((a) => { a.id != id }));
    }

    async function handleStatus(id, status) {
        let body = {
            published: !status,
        }
        const [result, ok] = await api(`/admin/blogs/${id}`, { method: 'put', body: JSON.stringify(body) });

        setArticles(articles.map((a) => {
            if (a.id == id) a.published = !a.published;
            return a;
        }))
    }

    return (
        <div className="wrapper">
            <Link to={'/admin/editor'}>
                <button className='new-article-button'>New article</button>
            </Link>
            <div className="board">
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Likes</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            articles && articles.map((a) => {
                                return (
                                    <tr key={a.id}>
                                        <th scope="row">{a.title}</th>
                                        {a.published ? <td> <div className="published">published</div> </td> : <td><div className="unpublished">unpublished</div> </td>}

                                        <td>2025/12/22</td>
                                        <td> <div className="flex"> {a.likes} <GoHeart></GoHeart></div> </td>
                                        <td>
                                            <div className="flex">
                                                {a.published ? <button onClick={() => { handleStatus(a.id, a.published) }}>unpublish</button> : <button onClick={() => { handleStatus(a.id, a.published) }}>publish</button>}


                                                <Link to={`/admin/editor/${a.id}`}><button >Edit</button></Link>
                                                <  GoTrash className='trash' onClick={() => { handleDelete(a.id) }} />

                                            </div>
                                        </td>
                                    </tr>





                                )
                            })


                        }


                    </tbody>

                </table>




            </div>


        </div>
    )
}
