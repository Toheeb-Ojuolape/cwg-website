import axios from 'axios';

const BASE_URL =
	process.env.NODE_ENV !== 'production' ? 'https://cmss.cwg-plc.com' : 'https://cmss.cwg-plc.com';

export const CMS_URL = BASE_URL;

export const apiClient = axios.create({
	baseURL: `${BASE_URL}/api`,
	timeout: 5000
});

export const graphqlClient = axios.create({
	baseURL: `${BASE_URL}/graphql`,
	timeout: 10000,
	method: 'post'
});
