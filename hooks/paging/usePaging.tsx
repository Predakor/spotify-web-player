import { useCallback, useEffect, useState } from 'react';

export type PagingOptions = Partial<{ offset: number; limit: number }>;
export type PagingObject<T> = SpotifyApi.PagingObject<T>;
export type FetchFunction<T> = (
  options: PagingOptions
) => Promise<{ body: PagingObject<T> }>;

const MaxOffset = 50;

let fetching = false;

function usePaging<T>(
  pagingObject: PagingObject<T>,
  fetchFunction: FetchFunction<T>
) {
  const [paging, setPaging] = useState(pagingObject);
  const [items, setItems] = useState(pagingObject.items);

  const fetchNext = useCallback(async () => {
    const limit = paging.limit ?? 50;
    const offset = limit + paging.offset;
    if (fetching || offset >= paging.total) return;

    try {
      fetching = true;
      const request = fetchFunction({ offset, limit });
      const result = (await request).body;
      setPaging(result);
    } catch {
    } finally {
      fetching = false;
    }
  }, [fetchFunction, paging]);

  const fetchAll = useCallback(async () => {
    console.log(fetchFunction({}));
  }, []);

  useEffect(() => {
    const { offset, limit, total } = paging;

    setItems((items) => {
      const moreToFetch = items.length < offset + limit && items.length < total;
      return moreToFetch ? [...items, ...paging.items] : items;
    });
  }, [paging]);

  useEffect(() => {
    setPaging(pagingObject);
    setItems(pagingObject.items);
  }, [pagingObject]);

  return [items, fetchNext, fetchAll] as const;
}

export default usePaging;
