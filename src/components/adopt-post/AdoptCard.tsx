import { Link } from 'react-router-dom';
import { AdoptPost } from '@/types/Adopt';


interface Props {
  adopt: AdoptPost
}

function AdoptCard(props:Props) {
  const { adopt:{catName,catSpecies,thumbnail,noticeId} } = props;
  
  
  return (
    <Link to={`/adopt/detail/${noticeId}`}
      className="border border-memyo-yellow4 hover:bg-memyo-yellow2 rounded-md transition-all 
      cursor-pointer hover:p-2 shadow-sm hover:shadow-md hover:border-memyo-yellow2 box-border flex flex-col justify-between h-64"
    >
      <img
        className="border-b border-memyo-yellow4 rounded-t-md hover:rounded-md h-full"
        src={thumbnail}
      />
      <div className="p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">{catName}</span>
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-memyo-yellow4 hover:fill-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">묘종</span>
          <span className="text-sm">{catSpecies}</span>
        </div>
        </div>
    </Link>
  );
}

export default AdoptCard;
