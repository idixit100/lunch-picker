export const fetchRestaurants = (url) => {
  return fetch(url)
    .then(r => r.json())
  }