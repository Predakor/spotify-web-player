import { useSelector } from 'react-redux';
import { selectInView } from '@store/scrollSlice';

function TrackRowHeading() {
  const sticky = useSelector(selectInView);

  const background = sticky ? '' : 'bg-background-100 -mx-4 px-4 ';
  return (
    <div
      className={`sticky hidden ${background} top-20 z-10 cursor-default md:block`}
    >
      <span
        className={`grid grid-cols-[3ch,repeat(2,minmax(0,1fr)),repeat(3,5ch)] items-center gap-4 p-2`}
      >
        <span className="justify-self-end text-xl font-bold">#</span>
        <span>Track</span>
        <span>Album</span>
        <span />
        <span className="justify-self-start">time</span>
      </span>
      <hr className={`border-text-disabled ${background}`} />
    </div>
  );
}
export default TrackRowHeading;
