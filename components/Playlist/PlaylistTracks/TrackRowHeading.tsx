import { useSelector } from 'react-redux';
import { selectInView } from '@store/scrollSlice';

function TrackRowHeading() {
  const inView = useSelector(selectInView);

  const background = inView ? 'pr-0' : 'bg-black mx-0 px-5';
  return (
    <div
      className={`sticky top-20 mx-5 border-b border-secondary-500 text-secondary-400 z-10`}
    >
      <span className="justify-self-end font-bold text-xl">#</span>
      <span>Track</span>
      <span>Album</span>
      <span className="justify-self-end">3:33</span>
    </div>
  );
}
export default TrackRowHeading;