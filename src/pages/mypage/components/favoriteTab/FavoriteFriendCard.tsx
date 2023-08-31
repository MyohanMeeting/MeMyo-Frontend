import { Link } from 'react-router-dom';
import { FavoriteFriend } from '../../../../types/FavoriteFriend';
import { BiCommentDetail } from 'react-icons/bi';

interface FavoriteFriendProps {
  info: FavoriteFriend;
}

export default function FavoriteFriendCard({ info }: FavoriteFriendProps) {
  return (
    <Link to={`/adopt/detail/${info.notice.noticeId}`}>
      <section>
        <div className="border border-memyo-yellow8 rounded-2xl md:w-[348px] md:h-[427px] md:space-y-2">
          <div
            className="hidden md:block md:h-3/4 rounded-tl-2xl rounded-tr-2xl"
            style={{
              backgroundImage: `url(${info.notice.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <div className="flex items-center p-3 rounded-2xl md:h-24 md:p-4">
            <div className="flex w-96">
              <img
                className="object-cover w-24 h-24 mr-4 rounded-full md:w-full md:h-full md:p-0 md:hidden md:mr-0"
                src={`${info.notice.thumbnail}`}
                alt="favoriteCatImage"
              />
              <div className="flex items-center ">
                <div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 md:relative">
                      <div className="flex flex-col">
                        <p className="font-bold text-memyo-yellow8 text-md md:text-lg">
                          {info.notice.noticeTitle}
                        </p>
                        <p className="text-xs font-bold">이름:{info.notice.catName} </p>
                      </div>
                    </div>
                    <div className="md:block md:flex md:space-x-2">
                      <p className="text-xs">묘종: {info.notice.catSpecies}</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="6 0 28 25"
                          fill="currentColor"
                          className="w-4 h-3 text-memyo-yellow8"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <p className="text-xs ">{info.notice.shelterCity}</p>
                      </div>
                      <div className="flex items-center">
                        <BiCommentDetail className="w-3 h-3 mr-1 text-memyo-yellow8" />
                        <p className="text-xs">댓글:{info.notice.commentCount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}
