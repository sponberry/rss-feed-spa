import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Blog from './components/layout/Blog.tsx';
import ViewButton from './components/ui/ViewButton.tsx';
import { ArticleType, BlogInterface, View } from './types';
import Articles from './components/layout/Articles.tsx';

function App() {
  const [view, setView] = useState(View.ALL);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [blogs, setBlogs] = useState<BlogInterface>({});
  console.log(articles);
  console.log(blogs);
  // add option to switch between /all and /blogs

  const getArticles = async () => {
    try {
      const res = await axios.get('http://localhost:4000/all');
      setArticles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:4000/blogs');
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (view === View.ALL) {
      getArticles();
    } else {
      getBlogs();
    };
  }, [view]);

  return (
    <>
      <ViewButton view={view} setView={setView} />

      <h1 className='font-mono m-5 tracking-wide'>Good morning, Abi. ☕️</h1>
      {view === View.ALL ? (
        <Articles articles={articles} />
      ) : (
        <div className='blogs grid grid-cols-2'>
          {Object.entries(blogs).map((blogItem, i) => (
            <Blog key={i} title={blogItem[0]} blogArticles={blogItem[1]} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
