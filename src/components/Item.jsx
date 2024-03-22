import { useState } from 'react';
import axios from 'axios';
import { formatDate } from '../utils/formatDate';

const Item = ({ article }) => {
    const [news, setNews] = useState([]);
    const { title, description, date, content, author, archiveDate } = article

    const handleArchiveClick = async () => {
        try {
            const currentDateISO = new Date().toISOString();
            const response = await axios.put(`http://localhost:3000/news/${article._id}`, {
                archiveDate: currentDateISO
            });

            setNews(updatedNews => {
                const updatedArticles = updatedNews.map(article => {
                    if (article._id === response.data._id) {
                        return {
                            ...article,
                            archiveDate: currentDateISO
                        };
                    }
                    return article;
                });
                return updatedArticles;
            });
        } catch (error) {
            console.error('Error archiving news article:', error);
        }
    };

    return (
        <div className="card mb-3 p-2">
            <div className="row g-0">
                <div className="col-md-12">
                    <div className='card-header'>
                        <h5 className="card-title text-center">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{content}</p>
                    </div>
                    <div className="card-footer d-flex gap-5">
                        <p className="card-text"><small className="text-body-secondary">{author}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{formatDate(date)}</small></p>
                    </div>
                    <div className='d-flex mx-auto justify-content-center align-items-center'>
                        {date !== archiveDate ? (
                            <p>Esta noticia ha sido archivada</p>
                        ) : (
                            <button className="btn" type="button" style={{ width: 'fit-content' }} onClick={handleArchiveClick}>
                                Archivar Noticia
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item