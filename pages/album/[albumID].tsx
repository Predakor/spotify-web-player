import Artists from '@components/Artists/Artists';
import LikeButton from '@components/Button/ToogleButtons/LikedButton';
import CoverImage from '@components/CoverImage/CoverImage';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageActions from '@components/Page/PageActions';
import PageContent from '@components/Page/PageContent';
import PageHeader from '@components/Page/PageHeader';
import TrackList from '@components/Playlist/PlaylistTracks/TrackList';
import useAlbumInfo from '@hooks/spotify/Info/useAlbumInfo';
import { msToText } from '@utils/time';
import { useRouter } from 'next/router';

function Album() {
  const { albumID } = useRouter().query;
  const fetchingAlbum = useAlbumInfo(albumID?.toString());

  return (
    <FetchingComponent fetchValue={fetchingAlbum}>
      {(album) => {
        const { name, album_type, images, artists, tracks, total_tracks } =
          album;

        return (
          <>
            <PageHeader images={images}>
              <>
                <p>{album_type}</p>
                <h2 className="font-bold lg:text-6xl">{name}</h2>
                <span className="flex gap-2 text-2xl">
                  <Artists artists={artists} className={'text-base-content'} />
                  <p>{total_tracks} songs</p>
                </span>
              </>
            </PageHeader>

            <PageActions uri={''} actions={'play'} moreActions={[]} />
            <PageContent>
              <>
                {tracks.items.map((track, i) => (
                  <article
                    className="grid grid-cols-[3ch,2fr,1fr,repeat(3,5ch)] items-center gap-8"
                    key={track.id}
                  >
                    <span className="justify-self-end">{i + 1}</span>
                    <div>{track.name}</div>
                    <div>{track.type}</div>
                    <LikeButton isLiked={false} ariaLabel={''} />
                    <div>{msToText(track.duration_ms)}</div>
                    <span>|</span>
                  </article>
                ))}

                <footer>
                  <p>{album.release_date}</p>
                  {album.copyrights.map((copyright, i) => (
                    <p key={i}>{copyright.text}</p>
                  ))}
                </footer>
              </>
            </PageContent>
          </>
        );
      }}
    </FetchingComponent>
  );
}

export default Album;
