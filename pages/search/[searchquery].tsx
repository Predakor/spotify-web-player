import { ReactElement } from 'react';
import LoadingButton from '@components/Button/LoadingButton';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchCategories from '@components/SearchCategories/SearchCategories';
import SearchResults from '@components/SearchResults/SearchResults';
import useSearchResult from '@hooks/spotify/useSearch';
import Layout from 'Layout/Layout';
import { NextPageWithLayout } from '../_app';

const Search: NextPageWithLayout = () => {
  const { value, loading, error } = useSearchResult();

  if (loading) return <LoadingButton />;
  if (error) return <h2>Something went wrong</h2>;
  if (!value) return <h2>Nothing found</h2>;

  return <SearchResults searchResult={value} />;
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
