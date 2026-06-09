const rawApiUrl = import.meta.env.VITE_API_URL;

export const API_BASE_URL = import.meta.env.DEV
    ? '/api'
    : (rawApiUrl && rawApiUrl.trim() ? rawApiUrl.replace(/\/$/, '') : 'https://grocery-sub.onrender.com/api');