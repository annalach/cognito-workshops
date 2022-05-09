import { useEffect, useState } from 'react';

import { fetchData } from './api'; 

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

export default App;
