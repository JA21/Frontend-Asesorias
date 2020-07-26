import Axios from 'axios';

export const configApi = {
  baseURL: `http://localhost:5000/`,
  headers: { 
    'Accept': 'application/json', 
    'Content-type': 'application/json'
  }
}
const axios = Axios.create(configApi);

export class Api {

  async post(url, data, header) {
    return await axios.post(url, data, {
      headers: (header) || ''
    });
  }

  async put(url, data, header){
    return await axios.put(url, data, {
      headers: (header) || ''
    });
  }

  async get(url, params, header){
    return await axios.get(`${url}/${params || ''}`);
  }

  async delete(url, params, header){
    return await axios.delete(`${url}/${params || ''}`);
  }
}

export default new Api()

