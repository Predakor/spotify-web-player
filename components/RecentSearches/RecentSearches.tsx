import { useSelector } from 'react-redux';
import CardList from '@components/Card/CardList';
import PagingShelf from '@components/Shelf/PagingShelf';
import { selectRecentSearches } from '@store/recentSearchSlice';
import { useRouter } from 'next/router';
import { SearchResponse } from 'types/spotifyTypes';

function RecentSearches() {
  const { push } = useRouter();
  const searches = useSelector(selectRecentSearches);

  const pagedSearches = {
    items: searches,
    limit: 10,
    offset: 0,
    total: searches.length,
  } as SpotifyApi.PagingObject<SearchResponse>;

  return (
    //@ts-expect-error not implemented fetching
    <PagingShelf paging={pagedSearches} title="recent searches">
      {(recent) => <CardList data={recent} onClick={push} />}
    </PagingShelf>
  );
}
export default RecentSearches;
