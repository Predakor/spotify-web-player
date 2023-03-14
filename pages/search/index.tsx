import { ReactElement, useEffect, useState } from 'react';
import CategoryCard from '@components/Card/CategoryCard';
import SearchBar from '@components/SearchBar/SearchBar';
import Shelf from '@components/Shelf/Shelf';
import useSpotify from '@hooks/spotify/useSpotify';
import Layout from 'Layout/Layout';
import Head from 'next/head';
import { NextPageWithLayout } from '../_app';

type PagingCategories = SpotifyApi.MultipleCategoriesResponse;

const Search: NextPageWithLayout = () => {
  const [pagingCategories, setPagingCategories] = useState<PagingCategories>();
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

  return (
    <div>
      <Head>
        <title>Discofy</title>
      </Head>
      <Shelf title="recent searches">
        <div className="aspect-square bg-accent" />
        <div className="aspect-square bg-accent" />
        <div className="aspect-square bg-accent" />
        <div className="aspect-square bg-accent" />
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
