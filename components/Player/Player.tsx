import useSpotify from 'hooks/useSpotify';
import useSpotifyControls from 'hooks/useSpotifyControls';

const Player = () => {
  const spotifyApi = useSpotify();
  const { nextSong, prevSong, repeatSong, toogleShugle, play, pause } =
    useSpotifyControls();

  const clickHandler = async () => {
    const data = (await spotifyApi.getMyCurrentPlaybackState()).body;
    data.is_playing ? pause() : play();
  };

  return (
    <div className="flex gap-4">
      <button onClick={toogleShugle}>Shufle</button>
      <button onClick={prevSong}>Prev</button>
      <button onClick={clickHandler}>Play/Pause</button>
      <button onClick={nextSong}>Next</button>
      <button onClick={repeatSong}>repeat</button>
    </div>
  );
};
export default Player;
