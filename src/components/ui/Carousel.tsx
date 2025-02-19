import { useState } from 'react';
import { ArticleType } from '../../types';
import Article from '../layout/Article.tsx';
import { JSX } from 'react';

const Carousel = ({ articles }: { articles: ArticleType[] }): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  return (
    <div className='relative w-full max-w-3xl mx-auto'>
      <div className='overflow-hidden relative h-64'>
        {articles.map((article, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <Article
              key={index}
              title={article.item.title}
              date={article.item.pubDate}
              url={article.item.link}
              content={article.item.contentSnippet}
            />
          </div>
        ))}
      </div>
      <div className='btn-container flex justify-between'>
        <button
          className='relative top-1/2 mt-8 left-0 transform -translate-y-1/2 text-xs tracking-wider bg-gray-800 text-white p-2'
          onClick={prevSlide}
        >
          prev
        </button>
        <button
          className='relative top-1/2 mt-8 right-0 transform -translate-y-1/2 text-xs tracking-wider bg-gray-800 text-white p-2'
          onClick={nextSlide}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
