import { ReactElement } from 'react';
import { FetchedValue } from '@hooks/fetch/useFetchedValue';
import Loading from '@layout/Loading';

interface Props<T> {
  fetchValue: FetchedValue<T>;
  children: (arg0: NonNullable<T>) => ReactElement;
  onLoading?: ReactElement;
  onError?: ReactElement;
  onNull?: ReactElement;
  options?: {
    lazyLoad: boolean;
  };
}

function FetchingComponent<T>({
  fetchValue,
  children,
  onError,
  onLoading,
  onNull,
}: Props<T>) {
  const { loading, error, value } = fetchValue;

  if (loading && !value) return onLoading || <Loading />;
  if (error) return onError || <h2>something went wrong</h2>;
  if (!value) return onNull || <h2>Nothing found</h2>;
  return children(value as unknown as NonNullable<T>);
}
export default FetchingComponent;
