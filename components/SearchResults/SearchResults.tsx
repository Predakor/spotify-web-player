import { useSelector } from 'react-redux';
import { selectSearch } from '@store/searchSlice';

function SearchResults() {
  const { data, status } = useSelector(selectSearch);

  if (!data) return <></>;
  if (status === 'pending') return <p>please wait</p>;

  const { albums, artists, episodes, playlists, shows, tracks } = data;

  return (
    <section>
      {albums && (
        <div>
          <h2>Albums</h2>
          <>
            {albums.items.map((album) => {
              const { id, name, total_tracks } = album;
              return (
                <div key={id}>
                  <h3>{name}</h3>
                  <p>Tracks:{total_tracks}</p>
                </div>
              );
            })}
          </>
        </div>
      )}
    </section>
  );
}
export default SearchResults;
