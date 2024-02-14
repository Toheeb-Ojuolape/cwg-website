import axios from 'axios';

const baseUrl: Record<string, string> = {
	development: 'https://cmss.cwg-plc.com', //'http://localhost:3000',
	production: 'https://cmss.cwg-plc.com'
};

const BASE_URL = baseUrl[process.env.NODE_ENV ?? 'development'];

export const CMS_URL = BASE_URL;

export const apiClient = axios.create({
	baseURL: `${BASE_URL}/api`,
	timeout: 25000
});

export const graphqlClient = axios.create({
	baseURL: `${BASE_URL}/graphql`,
	timeout: 10000,
	method: 'post'
});
