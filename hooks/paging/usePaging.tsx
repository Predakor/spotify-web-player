import { useEffect, useState } from 'react';

export interface Paging<T> extends SpotifyApi.PagingObject<T> {
  fetching?: boolean;
}

type FetchFunction<T> = (
  offset: number,
  itemsCount: number
) => Promise<SpotifyApi.PagingObject<T>>;

let fetching = false;

function usePagingTracks<T>(
  initPaging: Paging<T>,
  fetchMore: FetchFunction<T>
): [Paging<T>, (amount?: number) => Promise<T[]>] {
  const [paging, setPaging] = useState<Paging<T>>({
    ...initPaging,
    fetching: false,
  });

  useEffect(() => {
    setPaging({
      ...initPaging,
      fetching: false,
    });
  }, [initPaging]);

  const fetchMoreItems = async () => {
    console.log(fetching);

    if (fetching) return;
    if (paging.items.length < paging.limit) return;

    try {
      fetching = true;
      const result = await fetchMore(paging.offset, paging.items.length);
      const newItems = paging.items.concat(result.items);
      update({ ...result, items: newItems, fetching: false });
    } catch (error) {
    } finally {
      fetching = false;
    }
  };

  const getMoreItems = async (amount?: number) => {
    const moreItemsToGet = paging.items.length + 20 < paging.total;
    if (!moreItemsToGet) return [];
    fetchMoreItems();
    return paging.items;
  };
  const update = (object: Partial<Paging<T>>) => {
    setPaging((prev) => ({ ...prev, ...object }));
  };
  const updateItems = (items: Array<T>) => {
    update({ items, fetching: false });
  };

  return [paging, getMoreItems];
}

export default usePagingTracks;
