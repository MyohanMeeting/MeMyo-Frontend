function Modal({ isModalOpen, children, closeModal }: any) {
  return (
    <div className={isModalOpen ? 'block' : 'hidden'}>
      <div className="z-10 fixed top-0 left-0 w-screen h-screen bg-black opacity-40"></div>
      <div className="z-50 rounded-xl flex justify-center items-center absolute top-50% left-50% w-[300px] h-[300px] bg-white translate-x-1/4 -translate-y-2/4">
        <button className="absolute top-1 right-2" onClick={closeModal}>
          X
        </button>
        <div className="flex">
          <div className="flex flex-col space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
