import config from './config';

export const fetchData = async () => {
    const accessToken = localStorage.getItem(config.ACCESS_TOKEN_STORAGE_KEY) || '';
    const response = await fetch(config.API_URL, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    if (response.status === 401) {
        window.location.href = config.SIGN_IN_SCREEN_URL;
    }

    return response.json();
};
