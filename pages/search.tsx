import { ReactElement } from 'react';
import Layout, { Header } from '@components/Layout';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchResults from '@components/SearchResults/SearchResults';
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

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Header className="flex">
        <SearchBar />
      </Header>
      {page}
    </Layout>
  );
};

export default Search;
