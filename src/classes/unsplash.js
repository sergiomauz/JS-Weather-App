import 'babel-polyfill';
import Keys from '../config/keys';

class Unsplash {
  constructor(description) {
    const UNSLPLASH_ID = Keys.getUnsplashKey();
    this.urlUnsplash = `https://api.unsplash.com/search/photos?query=${description}&orientation=portrait&per_page=20&client_id=${UNSLPLASH_ID}`;
  }

  async getImageUrl() {
    const rndImageIndex = Math.floor(Math.random() * Math.floor(20));

    this.imageUrl = await fetch(this.urlUnsplash)
      .then((responseUnsplash) => responseUnsplash.json())
      .then((jsonUnsplash) => jsonUnsplash.results[rndImageIndex].urls.small);

    return this.imageUrl;
  }
}

export default Unsplash;