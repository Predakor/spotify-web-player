import { useRef, useState } from 'react';

interface FetchedValue<T> {
  value?: T;
  loading: boolean;
  error?: string;
}
type returnType<T> = [
  FetchedValue<T>,
  { fetchSucces: (value: T) => void; fetchFail: (error: string) => void }
];

function useFetchedValue<T>(initialValue?: T): returnType<T> {
  const [fetchedValue, setFetchedValue] = useState<FetchedValue<T>>({
    value: initialValue,
    loading: true,
  });

  const actions = useRef({
    fetchSucces: (value: T) => {
      setFetchedValue({
        value,
        loading: false,
      });
    },
    fetchFail: (error: string) => {
      setFetchedValue({
        error,
        loading: false,
      });
    },
  });

  return [fetchedValue, actions.current];
}
export default useFetchedValue;
