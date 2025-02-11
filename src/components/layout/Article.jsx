const Article = ({ title, date, url, content }) => {
  const formatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const articleDate = new Date(date).toLocaleDateString('en-GB', formatOptions);
  return (
    <>
      <a href={url} rel='no_referrer' target='blank'>
        <h2>{title}</h2>
      </a>
      <date>{articleDate}</date>
      <p>{content}</p>
    </>
  );
};

export default Article;
