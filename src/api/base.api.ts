import axios from 'axios';

export const BASE_URL = 'httpd://rickandmortyapi.com/api/';

export const instance = axios.create({
  baseURL: BASE_URL,
})