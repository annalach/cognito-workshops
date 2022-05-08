import { useEffect, useState } from 'react';

import { fetchData } from '../api';

function Index() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setData(data);
    })();
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default Index;
