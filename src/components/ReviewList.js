import './ReviewList.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div className="ReviewListItem">
      <img src={item.imgUrl} alt={item.title} className="ReviewListItem-img" />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button type="button" onClick={handleDeleteClick}>
          삭제
        </button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  const itemsList = items;

  // eslint-disable-next-line
  return (
    <ul>
      {itemsList.map((item) => (
        <li key={item.id}>
          <ReviewListItem item={item} onDelete={onDelete} />
          <input type="text" />
        </li>
      ))}
    </ul>
  );
}
export default ReviewList;
