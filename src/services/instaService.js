export default class instaService {
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }
  getResource = async (url) => {
    const res = await fetch('${this._apiBase}${url}');
    
    if (!res.ok)
      throw new Error('Could not fetch ${url}')

  }
}