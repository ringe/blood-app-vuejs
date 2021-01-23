import axios from 'axios';

const client = axios.create({
  baseURL: "http://localhost:5001/api",
	headers: {
	  "Content-type": "application/json"
	},
  json: true
});

export default client;