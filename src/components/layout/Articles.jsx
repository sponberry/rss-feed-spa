import Article from './Article';

const Articles = ({ articles }) => {
  return (
    <div className='articles'>
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
