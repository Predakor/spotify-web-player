import { ReactElement } from 'react';
import LibraryCategories from '@components/Categories/LibraryNav';
import Layout from 'Layout/Layouts';

const Artists = ({}) => {
  return <div>Artists</div>;
};

Artists.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<LibraryCategories />}>{page}</Layout>
);

export default Artists;
