import useSpotify from '@hooks/spotify/useSpotify';
import { useEffect } from 'react';
import useFetchedValue from './useFetchedValue';

interface Props<T> {
  fetchFunction: () => Promise<Awaited<{ body: T }>>;
}

function useFetchingFunction<T>({ fetchFunction }: Props<T>) {
    const spotify =useSpotify()
  const [category, actions] = useFetchedValue<T>();

  useEffect(() => {
    fetchFunction()
      .then((result) => actions.fetchSucces(result.body))
      .catch((err) => actions.fetchFail(err));
  }, [actions]);

  return category;
}
export default useFetchingFunction;
