import React from 'react';
// import Link from 'next/link';
import styles from './RelatedArticles.module.css';
import orange from '../public/img/orange.jpg'

type Article = {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
};

const articles: Article[] = [
  {
    title: 'Achieving High Productivity from Your Own Home Garden',
    date: 'October 12, 2023',
    description: 'A Practical Guide to Achieving Satisfactory Results from Plants Grown in Your Home.',
    image: '../public/image/orange.jpg',
    slug: '/articles/article1',
  },
  {
    title: 'The Best Guide to Planting Seeds with Optimal Results',
    date: 'October 15, 2023',
    description: 'Effective Strategies and Techniques to Achieve Healthy and Productive Plant Growth.',
    image: '../public/img/orange.jpg',
    slug: '/articles/article2',
  },
  {
    title: 'Strategies for Caring for Your Garden More Efficiently and Productively',
    date: 'October 20, 2023',
    description: 'An approach to improving plant performance and effective garden management.',
    image: '../public/image/orange.jpg',
    slug: '/articles/article3',
  },
];

const RelatedArticles = () => {
  return (
    <div className={styles.articlesContainer}>
      <h2 className={styles.heading}>Related Articles</h2>
      <div className={styles.articlesGrid}>
        {articles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <img src={article.image} alt={article.title} className={styles.articleImage} />
            <h3>{article.title}</h3>
            <p className={article.description}>{article.description}</p>
            <small className={article.date}>{article.date}</small>
            {/* <Link href={article.slug}>
              <a>Read more</a>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
