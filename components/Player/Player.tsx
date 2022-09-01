import useSpotify, {
  nextSong,
  prevSong,
  repeatSong,
  toogleShugle,
} from 'hooks/useSpotify';

const Player = () => {
  const spotifyApi = useSpotify();

  const clickHandler = async () => {
    const data = (await spotifyApi.getMyCurrentPlaybackState()).body;
    data.is_playing ? spotifyApi.pause() : spotifyApi.play();
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
