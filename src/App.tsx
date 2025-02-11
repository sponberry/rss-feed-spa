import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Blog from './components/layout/Blog';
import ViewButton from './components/ui/ViewButton';
import { View } from './utils/types';
import Articles from './components/layout/Articles';

function App() {
  const [view, setView] = useState(View.ALL);
  const [articles, setArticles] = useState([]);
  const [blogs, setBlogs] = useState({});
  console.log(articles);
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
    view === View.ALL ? getArticles() : getBlogs();
  }, [view]);

  return (
    <>
      <ViewButton view={view} setView={setView} />

      <h1 className=''>Good morning, Abi. ☕️</h1>
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
