import { useEffect, useState } from 'react';
import CoverImage from '@components/CoverImage/CoverImage';
import TrackList from '@components/Playlist/PlaylistTracks/TrackList';
import { useArtistInfo } from '@hooks/spotify/Info';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TopTracks } from 'types/spotifyTypes';

type ArtistType = {
  artist?: SpotifyApi.ArtistObjectFull;
  loading: boolean;
};

function Artistid() {
  const { fetchArtistInfo, getArtistTopTracks } = useArtistInfo();
  const { artistid } = useRouter().query;
  const id = artistid?.toString() ?? '';

  const [artist, setArtist] = useState<ArtistType>({
    artist: undefined,
    loading: true,
  });

  const [topTracks, setTopTracks] = useState<TopTracks>();

  useEffect(() => {
    if (!id) return;

    const fetchArtist = async () => {
      const artist = await fetchArtistInfo(id);
      if (artist) setArtist({ artist, loading: false });
    };
    const fetchTopTracks = async () => {
      const result = await getArtistTopTracks(id);
      if (result) setTopTracks(result);
    };

    fetchTopTracks();
    fetchArtist();
  }, [fetchArtistInfo, getArtistTopTracks, id]);

  if (artist.loading) {
    return <button className="btn loading "></button>;
  }

  if (!artist.artist) {
    return <h2>Artist now found</h2>;
  }

  const { name, popularity, followers, genres, images } = artist.artist;
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
        <h2 className="text-6xl text-text-important">Popular</h2>
        {topTracks && <TrackList fetchedTracks={topTracks.tracks} />}
      </section>
    </section>
  );
}
export default Artistid;
