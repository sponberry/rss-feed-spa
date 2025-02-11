import { View } from '../../utils/types';

const ViewButton = ({ view, setView }) => {
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
