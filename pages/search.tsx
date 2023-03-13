import { ReactElement, useEffect, useState } from 'react';
import LoadingButton from '@components/Button/LoadingButton';
import CategoryCard from '@components/Card/CategoryCard';
import SearchBar from '@components/SearchBar/SearchBar';
import SearchCategories from '@components/SearchCategories/SearchCategories';
import SearchResults from '@components/SearchResults/SearchResults';
import Shelf from '@components/Shelf/Shelf';
import useSearch from '@hooks/spotify/useSearch';
import useSpotify from '@hooks/spotify/useSpotify';
import Layout from 'Layout/Layout';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';

type PagingCategories = SpotifyApi.MultipleCategoriesResponse;
const Search: NextPageWithLayout = () => {
  const [pagingCategories, setPagingCategories] = useState<PagingCategories>();
  const { data, query, status } = useSearch();
  const spotifyApi = useSpotify();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await spotifyApi.getCategories();
        setPagingCategories(response.body);
      } catch (error) {}
    };
    fetchCategories();
  }, [spotifyApi]);

  if (!query) {
    return (
      <div>
        <Shelf title="recent searches">
          <div className="aspect-square w-64 bg-accent"></div>
          <div className="aspect-square w-64 bg-accent"></div>
          <div className="aspect-square w-64 bg-accent"></div>
          <div className="aspect-square w-64 bg-accent"></div>
        </Shelf>
        <Shelf title="browse all">
          {pagingCategories?.categories &&
            pagingCategories.categories.items.map((category) => (
              <CategoryCard
                category={category}
                onClick={() => {
                  1;
                }}
                key={category.id}
              />
            ))}
        </Shelf>
      </div>
    );
  }

  if (status === 'pending') return <LoadingButton />;

  return (
    <div>
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
    <Head>
      <title>Discofy</title>
    </Head>
    {page}
  </Layout>
);

export default Search;
