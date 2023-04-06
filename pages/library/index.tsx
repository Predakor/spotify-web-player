import { ReactElement } from 'react';
import Layout from 'Layout/Layouts';

function Library() {
  return 1;
}

Library.getLayout = (page: ReactElement) => (
  <Layout extendHeader={<>categories</>}>{page}</Layout>
);
export default Library;
