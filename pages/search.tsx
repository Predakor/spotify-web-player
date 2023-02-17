import { ReactElement } from 'react';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchCategories from '@components/SearchCategories/SearchCategories';
import SearchResults from '@components/SearchResults/SearchResults';
import Layout from 'Layout';
import { NextPageWithLayout } from './_app';

const Search: NextPageWithLayout = () => {
  return (
    <>
      <SearchResults />
    </>
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
