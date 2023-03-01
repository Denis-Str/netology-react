import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'ok') setData(data);
      else setError(data);

      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
}
