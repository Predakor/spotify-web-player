import useSpotifyControls from 'hooks/useSpotifyControls';

const Song = ({ song }: { song: SpotifyApi.TrackObjectFull }) => {
  const { id, name, artists, duration_ms, uri } = song;
  const { playSong } = useSpotifyControls();

  return (
    <div
      className="flex gap-2 bg-gray-600 w-fit p-2"
      onClick={() => playSong(uri, id)}
      key={id}
    >
      <p>{name}</p>
      <p>{duration_ms / 1000}s</p>
      <p>{artists[0].name}</p>
    </div>
  );
};

export default Song;
