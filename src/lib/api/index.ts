import https from 'https';
import { URL, type Url } from 'url';
import axios from 'axios'

const baseUrl: Record<string, string> = {
	development: 'https://cmss.cwg-plc.com', //'http://localhost:3000',
	production: 'https://cmss.cwg-plc.com'
};

const BASE_URL = baseUrl[process.env.NODE_ENV ?? 'development'];

// Define your base URL

// Create an HTTPS agent with rejectUnauthorized set to false
const agent = new https.Agent({  
  rejectUnauthorized: false
});

// Function to make GET requests
export function get(url: Url, options = {}) {
  return new Promise((resolve, reject) => {
    const requestUrl = new URL(url, BASE_URL);
    const requestOptions = {
      ...options,
      method: 'GET',
      agent: agent,
    };

    const req = https.request(requestUrl, requestOptions, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(new Error('Failed to parse JSON response'));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
}

// Function to make POST requests
export function post(url: Url, body: Body, options = {}) {
  return new Promise((resolve, reject) => {
    const requestUrl = new URL(url, BASE_URL);
    const requestOptions = {
      ...options,
      method: 'POST',
      agent: agent,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(requestUrl, requestOptions, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(new Error('Failed to parse JSON response'));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (body) {
      req.write(JSON.stringify(body));
    }

    req.end();
  });
}

// Usage examples
export const getCmsData = (endpoint) => get(`/api${endpoint}`);
export const postCmsData = (endpoint, body ) => post(`/api${endpoint}`, body);


export const graphqlClient = axios.create({
	baseURL: `${BASE_URL}/graphql`,
	timeout: 60000,
	method: 'post',
	httpsAgent: agent
});


export const CMS_URL = 'https://cmss.cwg-plc.com'