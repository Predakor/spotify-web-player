import Artists from '@components/Artists/Artists';
import LikeButton from '@components/Button/LikedButton';
import CoverImage from '@components/CoverImage/CoverImage';
import TrackList from '@components/Playlist/PlaylistTracks/TrackList';
import TrackRow from '@components/Playlist/PlaylistTracks/TrackRow';
import Track from '@components/Track/Track';
import useAlbumInfo from '@hooks/spotify/Info/useAlbumInfo';
import { msToText } from '@utils/time';
import Head from 'next/head';
import { useRouter } from 'next/router';

function Album() {
  const { albumID } = useRouter().query;
  const { value: album, loading, error } = useAlbumInfo(albumID?.toString());

  if (loading) return <h2>loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!album) return <h2>Album not found</h2>;

  const { name, album_type, images, artists, tracks, total_tracks } = album;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <header className="flex flex-col gap-4 p-4 md:flex-row md:items-center">
        <CoverImage
          url={images[0].url}
          className={'aspect-square w-auto md:w-1/4'}
        />

        <section className="flex flex-col gap-12 text-4xl lg:justify-end">
          <p>{album_type}</p>
          <h2 className="font-bold lg:text-6xl">{name}</h2>
          <span className="flex gap-2 text-2xl">
            <Artists artists={artists} className={'text-base-content'} />
            <p>{total_tracks} songs</p>
          </span>
        </section>
      </header>

      <section className="p-4">
        <header></header>
        <div>
          {tracks.items.map((track, i) => (
            <article
              className="grid grid-cols-[3ch,2fr,1fr,repeat(3,5ch)] items-center gap-8"
              key={track.id}
            >
              <span className="justify-self-end">{i + 1}</span>
              <div>{track.name}</div>
              <div>{track.disc_number}</div>
              <LikeButton isLiked={false} ariaLabel={''} />
              <div>{msToText(track.duration_ms)}</div>
              <span>|</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export default Album;
