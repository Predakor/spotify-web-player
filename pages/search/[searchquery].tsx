import { ReactElement } from 'react';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchCategories from '@components/SearchCategories/SearchCategories';
import SearchResults from '@components/SearchResults/SearchResults';
import useSearchResult from '@hooks/spotify/useSearch';
import Layout from 'Layout/Layouts/Layout';
import { NextPageWithLayout } from '../_app';

const Search: NextPageWithLayout = () => {
  const fetchingResults = useSearchResult();

  return (
    <FetchingComponent fetchValue={fetchingResults}>
      {(results) => <SearchResults searchResult={results} />}
    </FetchingComponent>
  );
};

Search.getLayout = (page: ReactElement) => (
  <Layout
    extendHeader={
      <>
        <SearchBar />
        <SearchCategories />
      </>
    }
  >
    {page}
  </Layout>
);

export default Search;
