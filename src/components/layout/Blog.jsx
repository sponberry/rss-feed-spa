import Articles from './Articles';
import Carousel from '../ui/Carousel';

const Blog = ({ title, blogArticles }) => {
  console.log(blogArticles);
  return (
    <div className='p-8 col-span-1'>
      <h2 className='text-4xl tracking-widest lowercase pb-2'>{title}</h2>
      <Carousel articles={blogArticles} />
    </div>
  );
};

export default Blog;
