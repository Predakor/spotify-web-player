import RelatedArtists from '@components/Artists/RelatedArtists';
import TopTracks from '@components/Artists/TopTracks';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageActions from '@components/Page/PageActions';
import PageContent from '@components/Page/PageContent';
import PageHeader from '@components/Page/PageHeader';
import Shelf from '@components/Shelf/Shelf';
import { useArtistInfo } from '@hooks/spotify/Info';
import Head from 'next/head';

function Artistid() {
  const fetchingArtist = useArtistInfo();

  return (
    <FetchingComponent fetchValue={fetchingArtist}>
      {(artist) => {
        const { name, followers, images } = artist;
        return (
          <>
            <Head>
              <title>{name}</title>
            </Head>
            <PageHeader images={images}>
              <>
                <h2 className="text-6xl text-text-important">{name}</h2>
                <p>{followers.total} followers</p>
              </>
            </PageHeader>
            <PageActions uri={''} actions={'play'} moreActions={[]} />
            <PageContent>
              <>
                <Shelf title="Popular" vertical>
                  <TopTracks id={artist.id} />
                </Shelf>

                <Shelf title="Releated artists">
                  <RelatedArtists id={artist.id} />
                </Shelf>
              </>
            </PageContent>
          </>
        );
      }}
    </FetchingComponent>
  );
}
export default Artistid;
