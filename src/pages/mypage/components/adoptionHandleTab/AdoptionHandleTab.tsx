import AdoptionCard from '@pages/mypage/components/adoptionHandleTab/AdoptionCard';
import { useThunkDispatch } from '@redux/hooks';
import { RootState } from '@redux/store';
import { getMyAdoptionThunk } from '@redux/thunks/MyThunk';
import { MyAdoption } from '../../../../types/Mypage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function AdoptionHandleTab() {
  const dispatch = useThunkDispatch();
  const myAdoption = useSelector((state: RootState) => state.mypage.myAdoption);

  useEffect(() => {
    dispatch(getMyAdoptionThunk());
  }, [dispatch]);

  if (!myAdoption) {
    return null;
  }

  return (
    <article className="max-w-lg max-h-screen pt-4 m-auto space-y-4 overflow-auto md:space-y-0 md:grid md:grid-cols-2 md:gap-4 md:max-w-none md:place-items-center scrollbar-hide">
      {myAdoption &&
        myAdoption.map((item: MyAdoption) => {
          return (
            <div key={item.applicationId}>
              <div className="flex flex-col space-y-4">
                <AdoptionCard myAdoption={item} />
              </div>
            </div>
          );
        })}
    </article>
  );
}
