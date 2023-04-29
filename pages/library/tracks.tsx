import SavedTracksImage from '@components/CoverImage/SavedTracksImage';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import PageContent from '@components/Page/PageContent';
import PageHeader from '@components/Page/PageHeader';
import { PlaylistAuthor } from '@components/Playlist/PlaylistDetails';
import TrackList from '@components/Playlist/PlaylistTracks/TrackList';
import TrackRowHeading from '@components/Playlist/PlaylistTracks/TrackRowHeading';
import useUserSavedTracks from '@hooks/spotify/Info/useUserSavedTracks';

function Tracks() {
  const fetchTracks = useUserSavedTracks();

  return (
    <FetchingComponent fetchValue={fetchTracks}>
      {({ items, total }) => (
        <>
          <PageHeader
            images={[]}
            customImage={
              <SavedTracksImage className="h-[20vh] max-h-60 text-8xl " />
            }
            className="flex flex-col justify-around gap-4 text-base-content"
          >
            <>
              <p className="font-semibold lg:text-xl">PLAYLIST</p>
              <h1 className="font-bold md:text-4xl lg:text-6xl 2xl:text-8xl">
                Liked Songs
              </h1>

              <span className="flex items-center">
                <PlaylistAuthor user={null} />
                <h2 className="text-2xl">{total} songs</h2>
              </span>
            </>
          </PageHeader>

          <PageContent>
            <TrackRowHeading />
            <TrackList fetchedTracks={items.map((item) => item.track)} />
          </PageContent>
        </>
      )}
    </FetchingComponent>
  );
}
export default Tracks;
