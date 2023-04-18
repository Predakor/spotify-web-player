import Artists from '@components/Artists/Artists';
import CoverImage from '@components/CoverImage/CoverImage';
import FetchingComponent from '@components/FetchingComponent/FetchingComponent';
import useTrackInfo from '@hooks/spotify/Info/useTrackInfo';

function Track() {
  const fetchingTrack = useTrackInfo();

  return (
    <FetchingComponent fetchValue={fetchingTrack}>
      {(track) => {
        const { name, artists, album, type } = track;
        return (
          <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center">
            <CoverImage
              url={album.images[0].url}
              className={'aspect-square w-auto md:w-1/4'}
            />
            <section className="flex flex-col gap-12 text-4xl lg:justify-end">
              <p>{type}</p>
              <h2 className="font-bold lg:text-6xl">{name}</h2>
              <span className="flex gap-2 text-2xl">
                by
                <Artists artists={artists} className={'text-base-content'} />
              </span>
            </section>
          </div>
        );
      }}
    </FetchingComponent>
  );
}
export default Track;
