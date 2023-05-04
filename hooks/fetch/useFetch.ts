import { useEffect } from 'react';
import useFetchedValue from './useFetchedValue';

type FetchFunction<T> = () => Promise<Awaited<{ body: T }>>;

function useFetch<T>(fetchFunction: FetchFunction<T>) {
  const [category, actions] = useFetchedValue<T>();

  useEffect(() => {
    fetchFunction()
      .then((result) => actions.fetchSucces(result.body))
      .catch((err) => actions.fetchFail(err));
  }, [actions]);

  return [category, fetchFunction] as const;
}

export default useFetch;
