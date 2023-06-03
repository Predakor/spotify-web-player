function NoDeviceMessage() {
  return (
    <>
      <h3 className="text-2xl">Spotify Connect</h3>
      <p>your connected devices will appear here</p>
      <a
        className="text-xl"
        href="https://support.spotify.com/us/article/spotify-connect/"
        lang="EN"
      >
        {"You don't see your device?"}
      </a>
    </>
  );
}
export default NoDeviceMessage;
