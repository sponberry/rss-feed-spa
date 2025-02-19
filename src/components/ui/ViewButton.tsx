import { View } from '../../types/index';
import { JSX } from 'react';

const ViewButton = ({ view, setView }: { view: View, setView: (view: View.ALL | View.BLOGS) => void }): JSX.Element => {
  return (
    <button
      onClick={() =>
        view === View.ALL ? setView(View.BLOGS) : setView(View.ALL)
      }
    >
      {view === View.ALL ? 'View  Blogs' : 'View All Articles'}
    </button>
  );
};

export default ViewButton;
