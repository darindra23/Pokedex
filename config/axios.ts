import axios from 'axios';

// const baseURL = 'http://localhost:4000';
const baseURL = 'https://api-megafit.xyz/';

const API = axios.create({baseURL});

export {API, baseURL};
