import { ReactElement } from 'react';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchCategories from '@components/SearchCategories/SearchCategories';
import SearchResults from '@components/SearchResults/SearchResults';
import useSearch from '@hooks/useSearch';
import Layout from 'Layout';
import { NextPageWithLayout } from './_app';

const Search: NextPageWithLayout = () => {
  const { data, query, status } = useSearch();

  if (!query) {
    return <div>browse</div>;
  }

  if (status === 'pending') {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="btn loading btn-ghost btn-square btn-xl scale-150" />
      </div>
    );
  }

  return (
    <div className={!query ? 'hidden' : ''}>
      <SearchResults searchResult={data} />
    </div>
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
