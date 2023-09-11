import { MyAdoption } from '../../../../types/Mypage';
import { Link } from 'react-router-dom';

export interface AdoptionCardProps {
  myAdoption: MyAdoption;
}

function AdoptionCard({ myAdoption }: AdoptionCardProps) {
  return (
    <Link to={`/adopt/detail/${myAdoption.noticeId}`}>
      <section>
        <div className="p-4 bg-white border border-memyo-yellow8 rounded-xl md:space-y-3 justify-between md:w-[328px] md:h-[427px] md:p-16 h-40 items-center flex">
          <div className="flex items-center">
            <div className="flex items-center md:flex-col md:justify-center md:items-center md:text-center">
              <img
                className="object-cover w-16 h-16 mr-4 rounded-full md:mr-0 md:w-40 md:h-40 md:rounded-full"
                src={`${myAdoption.author.profileImageUrl}`}
                alt="adoptionHandleProfile"
              />
              <div className="flex items-center space-x-2 md:h-24">
                <div className="space-y-1 ">
                  <p className="font-semibold text-md ">{myAdoption.author.nickname}</p>

                  <div className="flex items-center">
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
                    <p className="text-xs">{myAdoption.applicant.address}</p>
                  </div>
                  <p className="text-xs ">{myAdoption.createdAt}</p>
                </div>

                <p className="text-xs ">{myAdoption.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default AdoptionCard;
