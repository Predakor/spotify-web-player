import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSong } from '@store/playbackState';
import useSpotify from './useSpotify';

export default function useSongInfo() {
  const dispatch = useDispatch();
  const spotifyApi = useSpotify();
  const songID = useSelector(
    (state: { song: { currentSong: string } }) => state.song.currentSong
  );
  const [songInfo, setSongInfo] = useState<SpotifyApi.SingleTrackResponse>();

  useEffect(() => {
    const fetchSongInfo = async () => {
      const trackInfo = (await spotifyApi.getTrack(songID)).body;
      setSongInfo(trackInfo);
    };
    const checkIfPlaying = async () => {
      const currentSong = (await spotifyApi.getMyCurrentPlaybackState()).body;
      currentSong.item?.id && dispatch(changeSong(currentSong.item.id));
    };
    songID ? fetchSongInfo() : checkIfPlaying();
  }, [dispatch, songID, spotifyApi]);

  return songInfo;
}
