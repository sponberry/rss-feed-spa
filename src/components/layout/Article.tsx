import { JSX } from "react";

const Article = ({ title, date, url, content }: { title: string, date: string, url: string, content: string }): JSX.Element => {
  const formatOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const articleDate = new Date(date).toLocaleDateString('en-GB', formatOptions);
  const maxContentLength = 350;

  return (
    <div className='max-w-200'>
      <a href={url} rel='no_referrer' target='blank'>
        <h2>{title}</h2>
      </a>
      <time className='lowercase tracking-wider text-xs'>{articleDate}</time>
      <p>
        {content.length > maxContentLength
          ? content.substring(0, maxContentLength) + '...'
          : content}
      </p>
    </div>
  );
};

export default Article;
