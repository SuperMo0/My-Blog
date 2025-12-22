import React, { useEffect, useState } from 'react'
import ArticleCard from '../Article-Card/ArticleCard'
import './HomeArticles.css'
import api from './../../utils/Api'

export default function HomeArticles() {
    const [articles, setArticles] = useState(null)
    useEffect(() => {
        async function fetchData() {
            let data = await api('/blogs');
            setArticles(data.blogs);
        }
        fetchData();
    }, [])

    return (
        <div className="wrapper">
            <div className="home-cards-grid">
                {articles ? articles.map((article) => <ArticleCard key={article.id} article={article}></ArticleCard>)
                    : <h1>Loading</h1>
                }
            </div>
        </div >
    )
}