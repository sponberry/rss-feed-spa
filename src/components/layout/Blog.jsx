import Articles from './Articles';

const Blog = ({ title, blogArticles }) => {
  console.log(blogArticles);
  return (
    <div className='p-8 col-span-1'>
      <h2>{title}</h2>
      <Articles articles={blogArticles} />
    </div>
  );
};

export default Blog;
