import React from 'react';
import './ArticleCard.scss';

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  date?: string;
  summary: string;
}

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="article-card">
    <img src={article.imageUrl} alt={article.title} />
    <h2>{article.title}</h2>
    <p>{article.summary}</p>
  </div>
);

export default ArticleCard;
