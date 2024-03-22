import { useState } from 'react'
import Item from './Item'
import { useEffect } from 'react'

const Board = ({ category }) => {
    const [news, setNews] = useState([])

    console.log(news)

    useEffect(() => {
        fetch(`http://localhost:3000/news`)
            .then(res => res.json())
            .then(data => setNews(data))
            .catch(error =>
                console.error('Error fetching articles:', error));
    }, [])

    return (
        <div>
            {category === 'Novedades' && (
                news
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map(article => (
                        <div class="card-group">
                            <Item key={article._id} article={article} />
                        </div>
                    ))
            )}

            {category === 'Archivo' && (
                news
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .filter(article => article.date !== article.archiveDate)
                    .map(article => (
                        <div class="card-group">
                            <Item key={article._id} article={article} />
                        </div>
                    ))
            )}

            {category !== 'Novedades' && category !== 'Archivo' && (
                news
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .filter(article => article.category === category)
                    .map(article => (
                        <div class="card-group">
                            <Item key={article._id} article={article} />
                        </div>
                    ))
            )}
        </div>
    )
}

export default Board