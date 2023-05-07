import { useSelector } from 'react-redux';
import { selectInView } from '@store/scrollSlice';

function TrackRowHeading() {
  const sticky = useSelector(selectInView);

  const background = sticky ? '' : 'bg-base-300 -mx-4 px-4';

  return (
    <header
      className={`sticky hidden ${background} top-20 z-10 cursor-default border-b-2 border-neutral-content border-opacity-50 md:block`}
      aria-hidden={true}
    >
      <span className={`tracksGrid items-center gap-4 p-2`}>
        <p className="justify-self-end text-xl font-bold">#</p>
        <p>Track</p>
        <p>Album</p>
        <p />
        <p className="justify-self-start">time</p>
      </span>
    </header>
  );
}
export default TrackRowHeading;
