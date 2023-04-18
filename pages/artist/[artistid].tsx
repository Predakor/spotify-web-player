import RelatedArtists from '@components/Artists/RelatedArtists';
import TopTracks from '@components/Artists/TopTracks';
import CoverImage from '@components/CoverImage/CoverImage';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import Shelf from '@components/Shelf/Shelf';
import { useArtistInfo } from '@hooks/spotify/Info';
import Head from 'next/head';

function Artistid() {
  const fetchingArtist = useArtistInfo();

  return (
    <FetchingComponent fetchValue={fetchingArtist}>
      {(artist) => {
        const { name, followers, genres, images } = artist;
        const [image] = images;
        return (
          <section className="flex flex-col gap-12">
            <Head>
              <title>{name}</title>
            </Head>
            <header className="min-h-[60vh]">
              <h1 className="text-9xl text-text-important">{name}</h1>
              <div className="aspect-video h-full">
                <CoverImage url={image.url} />
              </div>
              <p>{followers.total} followers</p>
            </header>
            <div className="text-6xl">
              <p>{genres}</p>
            </div>
            <section>
              <h2 className="py-4 text-4xl font-semibold">Popular</h2>
              <TopTracks id={artist.id} />
            </section>

            <section>
              <h2 className="py-4 text-4xl font-semibold">Releated</h2>
              <RelatedArtists id={artist.id} />
            </section>
          </section>
        );
      }}
    </FetchingComponent>
  );
}
export default Artistid;
