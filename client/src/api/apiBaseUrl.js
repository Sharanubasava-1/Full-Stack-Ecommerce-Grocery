const rawApiUrl = import.meta.env.VITE_API_URL;

const getDefaultApiBaseUrl = () => {
    if (import.meta.env.DEV) {
        return '/api';
    }

    if (rawApiUrl && rawApiUrl.trim()) {
        return rawApiUrl.replace(/\/$/, '');
    }

    return `${window.location.origin}/api`;
};

export const API_BASE_URL = getDefaultApiBaseUrl();