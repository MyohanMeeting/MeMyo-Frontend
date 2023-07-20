

type AdoptMobileProps = {
  isSearch: boolean;
  onClick: () => void;
};

function AdoptSearchMobile({ onClick, isSearch }: AdoptMobileProps) {
  return (
    <div className='md:hidden block relative h-10 right-0 w-full top-3'>
      <button
        className="rounded-md w-32 h-10 text-sm text-center float-right hover:bg-memyo-yellow6 bg-memyo-yellow5 p-2 text-white mr-2"
        onClick={onClick}
      >
        검색 필터
      </button>
    </div>
  );
}

export default AdoptSearchMobile;