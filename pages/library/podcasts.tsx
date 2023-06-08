import { ReactElement } from 'react';
import LibraryCategories from '@components/Categories/LibraryNav';
import Layout from '@layout/Layouts';

const Podcasts = ({}) => {
  return <div>Podcasts</div>;
};

Podcasts.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Podcasts;
