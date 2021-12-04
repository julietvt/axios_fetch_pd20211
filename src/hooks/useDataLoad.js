import { useState, useEffect } from 'react';

const useDataLoad = (loadedData) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    loadedData({})
      .then((data) => setData(data.results))
      .catch((error) => setIsError(true))
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  return { data, isFetching, isError };
};

export default useDataLoad;
