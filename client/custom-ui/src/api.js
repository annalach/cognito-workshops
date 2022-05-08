import config from './config';

export const fetchData = async () => {
    const accessToken = localStorage.getItem(config.ACCESS_TOKEN_STORAGE_KEY) || '';
    const response = await fetch(config.API_URL, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    return response.json();
};
