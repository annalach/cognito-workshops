import { useEffect } from 'react';

import config from '../config';

function OAuthRedirect() {
  useEffect(() => {
    if (window.location.hash === '') {
      window.location.href = '/';
  }
    const accessToken = window.location.href.split('access_token=')[1].split('&')[0];
    localStorage.setItem(config.ACCESS_TOKEN_STORAGE_KEY, accessToken);
    window.location.href = '/';
}, []);

  return null;
}

export default OAuthRedirect;
