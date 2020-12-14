const apiKey = '19486649-5319d4f4ef24cda1042915b3a';
export default {
  baseURL:
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=',
  page: 1,
  _query: '',

  fetchImages() {
    return fetch(
      `${this.baseURL}${this.query}&page=${this.page}&per_page=12&key=${apiKey}`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },
  get query() {
    return this._query;
  },
  set query(value) {
    this._query = value;
  },
};
