import axios from 'axios';

const BASE_URL =
	process.env.NODE_ENV === 'production' ? 'http://78.141.232.122' : 'http://127.0.0.1:1337';

export const CMS_URL = BASE_URL;

export const apiClient = axios.create({
	baseURL: `${BASE_URL}/api`,
	timeout: 5000
});

export const grapgqlClient = axios.create({
	baseURL: `${BASE_URL}/graphql`,
	timeout: 10000,
	method: 'post'
});
