async function getReviews() {
  const response = await fetch('https://learn.codeit.kr/2728/film-reviews');
  const body = await response.json();
  return body;
}

export default getReviews;
