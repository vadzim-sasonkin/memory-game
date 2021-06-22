const { config } = require('utils/config');

async function handleResponse(response) {
  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }
}

async function apiFetch(endpoint, { params, body, ...configProps } = {}) {
  const token = config.unsplashApi.accessToken;
  const headers = { 'content-type': 'application/json' };
  if (token) {
    headers.Authorization = `Client-ID ${token}`;
  }
  const fetchConfig = {
    ...configProps,
    headers: {
      ...headers,
      ...configProps.headers,
    },
  };
  if (body) {
    fetchConfig.body = JSON.stringify(body);
  }

  const url = `${config.unsplashApi.baseUrl}/${endpoint}${params ? '?' : ''}${
    params ? new URLSearchParams(params) : ''
  }`;

  try {
    const response = await window.fetch(url, fetchConfig);
    return await handleResponse(response);
  } catch (error) {
    // store.dispatch({ type: CALL_API_ERROR, payload: error.toString() });
    throw error;
  }
}

async function loadRandomPhotos() {
  const response = await apiFetch('photos/random', {
    params: { count: config.numberOfCards, orientation: 'portrait' },
  });
  return response.map(({ id, urls, description }) => ({ id, urls, description }));
}

export const imagesService = { loadRandomPhotos };
