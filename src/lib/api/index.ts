import axios from 'axios';

export const BASE_URL = 'http://78.141.232.122/api';

export const CMS_URL = 'http://78.141.232.122';

export const apiClient = axios.create({
	baseURL: 'http://78.141.232.122/api',
	timeout: 5000
});

export const grapgqlClient = axios.create({
	baseURL: 'http://78.141.232.122/graphql',
	timeout: 10000,
	method: 'post'
});
