
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://www.abibliadigital.com.br/api/',
});

export default httpClient;