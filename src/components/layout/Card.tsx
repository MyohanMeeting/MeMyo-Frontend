import { useThunkDispatch } from '@redux/hooks';
import {
  deleteFavoriteFriendThunk,
  setFavoriteFriendThunk,
} from '@redux/thunks/FavoriteFriendThunk';
import { Notice } from '../../types/FavoriteFriend';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface PostProps {
  post: Notice;
}

function Card({ post }: PostProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const thunkDispatch = useThunkDispatch();

  function handleHeartClick(noticeId: number) {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      thunkDispatch(deleteFavoriteFriendThunk(noticeId));
    } else {
      thunkDispatch(setFavoriteFriendThunk(noticeId));
    }
  }

  return (
    <div className="box-border transition-all border rounded-md shadow-sm cursor-pointer border-memyo-yellow4 hover:bg-memyo-yellow2 hover:p-2 hover:shadow-md hover:border-memyo-yellow2">
      <Link to={`/adopt/detail/${post.noticeId}`}>
        <img
          className="object-cover w-full h-48 border-b border-memyo-yellow4 rounded-t-md hover:rounded-md"
          src={post.thumbnail}
        />
      </Link>
      <div className="p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold">{post.catName}</span>
          <button onClick={() => handleHeartClick(post.noticeId)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={
                isFavorite
                  ? 'text-red-500 fill-red-500 w-7 h-7 hover:fill-current'
                  : 'text-memyo-yellow6 hover:text-red-500 w-7 h-7 hover:fill-current'
              }
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
          <span className="text-sm">{post.catSpecies}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
