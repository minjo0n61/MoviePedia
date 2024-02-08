import { useState } from 'react';
import ReviewList from './ReviewList';
import getReviews from '../api';

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');

  const handleDelete = (id) => {
    // 해당 id값이랑 다른 것들만 새로 items 배열로 만들어서 넣어주고 선택한 한개의 id는 제외되는 것
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={handleNewestClick}>
          최신순
        </button>
        <button type="button" onClick={handleBestClick}>
          인기순
        </button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button type="button" onClick={handleLoadClick}>
        불러오기
      </button>
    </div>
  );
}

export default App;
