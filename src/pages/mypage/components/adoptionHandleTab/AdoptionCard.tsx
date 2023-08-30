import { MyAdoption } from '../../../../types/Mypage';
import adoptionHeart from '../../../../assets/mypage/adoptHeart.png';

export interface AdoptionCardProps {
  myAdoption: MyAdoption;
}

function AdoptionCard({ myAdoption }: AdoptionCardProps) {
  return (
    <section>
      <div className="shadow-2xl">
        <div className="flex items-center p-4 m-auto bg-white border border-memyo-yellow8 rounded-xl md:w-[350px] md:h-2/4 md:space-y-3 justify-between md:w-[674px] md:h-[309px] md:p-16">
          <div className="flex space-x-4 ">
            <div className="flex items-center md:flex-col md:justify-center md:items-center md:text-center">
              <img
                className="object-cover w-16 h-16 mr-4 rounded-full md:mr-0 md:w-40 md:h-40 md:rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=800&q=60"
                alt="adoptionHandleProfile"
              />
              <div className="flex items-center md:h-24">
                <div className="space-y-1 ">
                  <p className="font-semibold text-md ">{myAdoption.applicant.name}</p>
                  <p className="text-xs text-gray-700">{myAdoption.applicant.age}</p>
                  <p className="text-xs text-gray-700">{myAdoption.applicant.phoneNumber}</p>

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
                </div>
              </div>
            </div>
          </div>
          <img className="w-8 md:w-14" src={adoptionHeart} alt="adoptionheart" />
          <div>
            <img
              className="object-cover w-16 h-16 rounded-full md:w-40 md:h-40"
              src={`${myAdoption.author.profileImageUrl}`}
              alt="adoptHandlingCatThumbnail"
            />
            <div className="hidden md:block md:flex md:flex-col md:justify-center md:items-center md:space-y-1 md:h-24">
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
                <p className="text-xs">서울특별시 강남구 역삼동</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdoptionCard;
