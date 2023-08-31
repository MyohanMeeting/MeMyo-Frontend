import { useThunkDispatch } from '@redux/hooks';
import FavoriteFriendCard from './FavoriteFriendCard';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useEffect } from 'react';
import { getFavoriteFriendThunk } from '@redux/thunks/FavoriteFriendThunk';
import { Link } from 'react-router-dom';

function FavoriteTab() {
  const dispatch = useThunkDispatch();
  const favoriteFriend = useSelector(
    (state: RootState) => state.persistedReducer.favoriteFriend.favoriteFriends
  );

  console.log(favoriteFriend);

  useEffect(() => {
    dispatch(getFavoriteFriendThunk());
  }, [dispatch]);

  return (
    <div>
      <section className="max-w-lg pt-4 m-auto space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 md:max-w-none md:place-items-center">
        {favoriteFriend.map((item) => {
          return (
            <div>
              <FavoriteFriendCard info={item} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
export default FavoriteTab;
