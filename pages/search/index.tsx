import { ReactElement } from 'react';
import BrowseGenres from '@components/BrowseGenres/BrowseGenres';
import RecentSearches from '@components/RecentSearches/RecentSearches';
import SearchBar from '@components/SearchBar/SearchBar';
import Layout from 'Layout/Layouts/Layout';
import Head from 'next/head';
import { NextPageWithLayout } from '../_app';

export type PagingCategories = SpotifyApi.MultipleCategoriesResponse;

const Search: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Discofy</title>
      </Head>
      <RecentSearches />
      <BrowseGenres />
    </>
  );
};

Search.getLayout = (page: ReactElement) => (
  <Layout
    extendHeader={
      <>
        <SearchBar />
      </>
    }
  >
    {page}
  </Layout>
);

export default Search;
