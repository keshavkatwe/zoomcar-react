function getCities() {
  return fetch('https://api.zoomcar.com/v4/cities?platform=web')
  .then(res => res.json());
}

export default {
  getCities
}