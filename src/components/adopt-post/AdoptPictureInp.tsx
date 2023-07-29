function AdoptPictureInp() {
  return (
    <div className="relative basis-1/4 border-4 border-memyo-yellow5  rounded-xl">
      <input type="file" hidden />

      <div className="w-full aspect-square rounded-lg shadow-xl cursor-pointer">
        <div className="w-full aspect-square rounded-full overflow-hidden"></div>
      </div>
    </div>
  );
}

export default AdoptPictureInp;
