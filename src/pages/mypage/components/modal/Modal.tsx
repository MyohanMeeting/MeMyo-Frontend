function Modal({ isModalOpen, children, closeModal }: any) {
  return (
    <div className={isModalOpen ? 'block' : 'hidden'}>
      <div className="relative">
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-40"></div>
        <div className="z-50 rounded-xl flex flex-col justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white">
          <button
            className="absolute btn btn-square btn-outline top-2 right-2 "
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex">
            <div className="flex flex-col space-y-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
