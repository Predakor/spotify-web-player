import CurrentSong from '@components/CurrentSong/CurrentSong';
import Player from '@components/Player/Player';
import VolumeControl from '@components/VolumeControl/VolumeControl';
import WebPlayback from '@components/WebPlayback/WebPlayback';
import useSpotify from 'hooks/useSpotify';
import { useState } from 'react';

function Footer() {
  const token = useSpotify().getAccessToken();
  if (!token) return <></>;

  return (
    <footer className="flex items-center justify-between p-2 px-5">
      <WebPlayback token={token} />
    </footer>
  );
}
export default Footer;
