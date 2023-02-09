import { ReactElement } from 'react';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchCategories from '@components/SearchCategories/SearchCategories';
import SearchResults from '@components/SearchResults/SearchResults';
import Layout, { Header } from 'Layout';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';

const Search: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Discofy</title>
      </Head>
      <div>
        <SearchResults />
      </div>
    </>
  );
};

Search.getLayout = function (page: ReactElement) {
  return (
    <Layout
      header={
        <Header className="flex-wrap">
          <SearchBar />
          <SearchCategories />
        </Header>
      }
    >
      {page}
    </Layout>
  );
};

export default Search;
