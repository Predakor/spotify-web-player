import { ReactElement } from 'react';
import LibraryCategories from '@components/Categories/LibraryNav';
import Layout from 'Layout/Layouts';

const Albums = ({}) => {
  return <div>Albums</div>;
};

Albums.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Albums;
