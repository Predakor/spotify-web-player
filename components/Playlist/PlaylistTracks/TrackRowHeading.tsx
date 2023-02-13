import { useSelector } from 'react-redux';
import { selectInView } from '@store/scrollSlice';

function TrackRowHeading() {
  const inView = useSelector(selectInView);
  console.log(inView);

  const background = inView ? '' : 'bg-black';
  return (
    <div
      className={`sticky top-0 hidden 
      ${background} 
      z-10 items-center gap-4 p-2 md:grid
      md:grid-cols-[3ch,repeat(2,minmax(0,1fr)),repeat(3,5ch)] `}
    >
      <span className="justify-self-end text-xl font-bold">#</span>
      <span>Track</span>
      <span>Album</span>
      <span></span>
      <span className="justify-self-start">time</span>
    </div>
  );
}
export default TrackRowHeading;
