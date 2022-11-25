interface ArtistProps {
  artists: SpotifyApi.ArtistObjectSimplified[] | Spotify.Entity[];
}

function Artists({ artists }: ArtistProps) {
  return (
    <div className="flex">
      {artists.map((artist) => (
        <p
          className="text-secondary-400 hover:text-opacity-80 hover:underline transition-opacity"
          key={artist.uri}
        >
          {artist.name}
        </p>
      ))}
    </div>
  );
}

export default Artists;
