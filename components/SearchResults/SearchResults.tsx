interface SearchResultsProps {
  results: SpotifyApi.SearchResponse[] | undefined;
}

function SearchResults({ results }: SearchResultsProps) {
  if (!results) return null;
  const types = [
    'albums',
    'artists',
    'playlists',
    'tracks',
    'shows',
    'episodes',
  ];

  return (
    <div>
      {results.map((result, i) => {
        const type = types[i];
        const currentType = result[type];
        const { items } = currentType;
        return (
          <div key={i}>
            <h3>{type}</h3>
            {items.map((item) => {
              return <p key={item.name}>{item.name}</p>;
            })}
            {1}
          </div>
        );

        // return <p key={albums?.next}>{albums?.next}</p>;
      })}
    </div>
  );
}
export default SearchResults;
