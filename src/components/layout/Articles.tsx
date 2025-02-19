import Article from './Article';
import { ArticleType } from '../../types';

const Articles = ({ articles }: { articles: ArticleType[]}) => {
  return (
    <div className='articles grid gap-8'>
      {articles.map((article, i) => (
        <Article
          key={i}
          title={article.item.title}
          date={article.item.pubDate}
          url={article.item.link}
          content={article.item.contentSnippet}
        />
      ))}
    </div>
  );
};

export default Articles;
