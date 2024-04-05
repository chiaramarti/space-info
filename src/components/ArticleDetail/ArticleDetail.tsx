// ArticleDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Common/Loader';
import './ArticleDetail.scss';

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  summary: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get<Article>(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Errore nel caricamento dell\'articolo:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <Loader />;

  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <p>Data di pubblicazione: {article.date}</p>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.summary}</p>
      <Link to="/">Torna alla lista degli articoli</Link>
    </div>
  );
};

export default ArticleDetail;

