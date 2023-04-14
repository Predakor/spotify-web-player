import { useRef, useState } from 'react';

interface FetchedValue<T> {
  value?: T;
  loading: boolean;
  error?: string;
}

function useFetchedValue<T>(initialValue?: T) {
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

  return [fetchedValue, actions.current] as const;
}
export default useFetchedValue;
