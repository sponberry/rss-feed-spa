import Articles from './Articles';

const Blog = ({ title, blogArticles }) => {
  console.log(blogArticles);
  return (
    <>
      <h2>{title}</h2>
      <Articles articles={blogArticles} />
    </>
  );
};

export default Blog;
