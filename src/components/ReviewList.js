import './ReviewList.css';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item }) {
  return (
    <div className="ReviewListItem">
      <img src={item.imgUrl} alt={item.title} className="ReviewListItem-img" />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function ReviewList({ items }) {
  const itemsList = items;
  // eslint-disable-next-line
  return (
    <ul>
      {itemsList.map((item, index) => (
        <li key={`item ${index + 1}`}>
          <ReviewListItem item={item} />
        </li>
      ))}
    </ul>
  );
}
export default ReviewList;
