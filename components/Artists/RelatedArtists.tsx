import { ArtistCard } from '@components/Card';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import useReleatedArtists from '@hooks/spotify/Info/useRelatedArtists';

function RelatedArtists({ id }: { id: string }) {
  const fetchingReleatedArtists = useReleatedArtists(id);

  return (
    <FetchingComponent fetchValue={fetchingReleatedArtists}>
      {({ artists }) => (
        <>
          {artists.map((artist) => (
            <ArtistCard data={artist} onClick={() => 1} key={artist.id} />
          ))}
        </>
      )}
    </FetchingComponent>
  );
}
export default RelatedArtists;
