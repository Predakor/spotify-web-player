import WebPlayback from '@components/WebPlayback/WebPlayback';
import useSpotify from 'hooks/useSpotify';
import { useEffect, useState } from 'react';

type initialData = SpotifyApi.CurrentPlaybackResponse;

function Footer() {
  const spotifyApi = useSpotify();
  const [data, setData] = useState<initialData | undefined>(undefined);

  useEffect(() => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      try {
        setData(data.body);
      } catch (error) {
        console.log(error); //redirect to error page
      }
    });
  }, [spotifyApi]);

  return (
    <footer className="sticky bottom-0 bg-gray-900 p-4">
      {data && <WebPlayback initialPlaybackState={data} />}
    </footer>
  );
}
export default Footer;
