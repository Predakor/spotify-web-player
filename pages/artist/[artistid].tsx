import { useEffect, useState } from 'react';
import CoverImage from '@components/CoverImage/CoverImage';
import TrackList from '@components/Playlist/PlaylistTracks/TrackList';
import TrackRow from '@components/Playlist/PlaylistTracks/TrackRow';
import useArtistInfo from '@hooks/useArtistInfo';
import useSpotifyControls from '@hooks/useSpotifyControls';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Artistid() {
  const { getArtistTopTracks } = useSpotifyControls();
  const { artistid } = useRouter().query;
  const id = artistid?.toString() ?? '';

  const artist = useArtistInfo(id);
  const [topTracks, setTopTracks] =
    useState<SpotifyApi.ArtistsTopTracksResponse>();

  useEffect(() => {
    if (!id) return;

    const fetchTopTracks = async () => {
      const result = await getArtistTopTracks(id);
      if (result) setTopTracks(result);
    };
    fetchTopTracks();
  }, [getArtistTopTracks, id]);

  if (artist === undefined) {
    return <div>loading</div>;
  }

  if (artist === null) {
    return <div>{"This artist doesn't exist"}</div>;
  }

  const { name, popularity, followers, genres, images } = artist;
  const [image] = images;
  console.log(images);

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
        <h2 className="text-6xl text-text-important">{name} top tracks</h2>
        {topTracks && (
          <>
            {topTracks.tracks.map((track, i) => (
              <TrackRow key={track.id} track={track} index={i} />
            ))}
          </>
        )}
      </section>
    </section>
  );
}
export default Artistid;
