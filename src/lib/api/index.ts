import https from 'https';
import axios from 'axios';
import { URL } from 'url'; 

const baseUrl: Record<string, string> = {
  development: 'https://cmss.cwg-plc.com', //'http://localhost:3000',
  production: 'https://cmss.cwg-plc.com'
};

const BASE_URL = baseUrl[process.env.NODE_ENV ?? 'development'];

// Create an HTTPS agent with rejectUnauthorized set to false
const agent = new https.Agent({
  rejectUnauthorized: false
});

// Function to make GET requests
export function get(path: string, options = {}) {
  return new Promise((resolve, reject) => {
    const requestUrl = new URL(`/api${path}`, BASE_URL); // Use URL class to combine base URL with path
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
export function post(path: string, body: any, options = {}) {
  return new Promise((resolve, reject) => {
    const requestUrl = new URL(`/api${path}`, BASE_URL); // Use URL class to combine base URL with path
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
export const getCmsData = (endpoint: string) => get(endpoint);
export const postCmsData = (endpoint: string, body: any) => post(endpoint, body);

export const apiClient = axios.create({
  baseURL: `${BASE_URL}/api`,
  timeout: 60000,
  method: 'post',
  httpsAgent: agent
});

export const graphqlClient = axios.create({
  baseURL: `${BASE_URL}/graphql`,
  timeout: 60000,
  method: 'post',
  httpsAgent: agent
});

export const CMS_URL = 'https://cmss.cwg-plc.com';
