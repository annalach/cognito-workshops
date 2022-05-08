import config from './config';

export const fetchData = async () => {
    const cognitoLastAuthUser = localStorage.getItem(`CognitoIdentityServiceProvider.${config.USER_POOL_WEB_CLIENT_ID}.LastAuthUser`);
    const accessTokenStorageKey = `CognitoIdentityServiceProvider.${config.USER_POOL_WEB_CLIENT_ID}.${cognitoLastAuthUser}.accessToken`;
    const accessToken = localStorage.getItem(accessTokenStorageKey) || '';
    const response = await fetch(config.API_URL, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    return response.json();
};
