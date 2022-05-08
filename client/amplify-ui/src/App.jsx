import { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { fetchData } from './api'; 
import config from './config';

Amplify.configure({
  region: config.REGION,
  userPoolId: config.USER_POOL_ID,
  userPoolWebClientId: config.USER_POOL_WEB_CLIENT_ID,
});

function App({ signOut, user }) {
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setData(data);
    })();
  }, []);

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <div>{JSON.stringify(data)}</div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default withAuthenticator(App, { loginMechanisms: ['email'] })
