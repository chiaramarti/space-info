import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Loader from '../../components/Common/Loader';
import './Home.scss';

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  summary: string;
}

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<Article[]>('https://api.spaceflightnewsapi.net/v4/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Errore nel caricamento degli articoli:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="home-page">
      <h1>Spaceflight News</h1>
      <div className="articles">
        {articles.length === 0 ? (
          <Loader />
        ) : (
          articles.map(article => <ArticleCard key={article.id} article={article} />)
        )}
      </div>
    </div>
  );
};

export default Home;
