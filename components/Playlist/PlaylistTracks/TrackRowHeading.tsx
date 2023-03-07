import { useSelector } from 'react-redux';
import { selectInView } from '@store/scrollSlice';

function TrackRowHeading() {
  const sticky = useSelector(selectInView);

  const background = sticky ? '' : 'bg-background-100 -mx-4 px-4 ';
  return (
    <header
      className={`sticky hidden ${background} top-20 z-10 cursor-default md:block`}
      aria-hidden={true}
    >
      <span
        className={`grid grid-cols-[3ch,repeat(2,minmax(0,1fr)),repeat(3,5ch)] items-center gap-4 p-2`}
      >
        <p className="justify-self-end text-xl font-bold">#</p>
        <p>Track</p>
        <p>Album</p>
        <p />
        <p className="justify-self-start">time</p>
      </span>
      <hr className={`border-text-disabled ${background}`} />
    </header>
  );
}
export default TrackRowHeading;
