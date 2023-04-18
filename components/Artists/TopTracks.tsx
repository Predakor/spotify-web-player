import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import TrackList from '@components/Playlist/PlaylistTracks/TrackList';
import { useTopTracks } from '@hooks/spotify/Info';

function TopTracks({ id }: { id: string }) {
  const fetchingTracks = useTopTracks(id);

  return (
    <FetchingComponent fetchValue={fetchingTracks}>
      {({ tracks }) => <TrackList fetchedTracks={tracks} />}
    </FetchingComponent>
  );
}

export default TopTracks;
