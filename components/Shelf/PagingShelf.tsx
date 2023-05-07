import { ReactNode } from 'react';
import usePaging from '@hooks/paging';
import { FetchFunction, PagingObject } from '@hooks/paging/usePaging';
import useWidthToCols from '@hooks/useWidthToCols';
import { clampArray } from '@utils/clamp';
import Shelf from './Shelf';

interface Props<T> {
  title: string;
  paging: PagingObject<T>;
  pagingFunction: FetchFunction<T>;
  children: (displayedContent: T[]) => ReactNode;
}

function PagingShelf<T>({ title, paging, pagingFunction, children }: Props<T>) {
  const [items, , fetchAll] = usePaging(paging, pagingFunction);
  const shelfLimit = useWidthToCols();

  const displayedTracks = clampArray(items, 0, shelfLimit);

  const moreToShow = items.length > shelfLimit;
  const showMoreButton = moreToShow ? (
    <button className="btn-ghost btn" onClick={fetchAll}>
      Show all
    </button>
  ) : null;

  if (items.length <= 0) return null;
  return (
    <Shelf title={title} header={showMoreButton}>
      {children(displayedTracks)}
    </Shelf>
  );
}
export default PagingShelf;
