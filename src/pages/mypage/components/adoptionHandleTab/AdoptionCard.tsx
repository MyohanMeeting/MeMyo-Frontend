function AdoptionCard() {
  return (
    <section className="mx-4 mt-4 space-y-4">
      <div className="flex items-center justify-between w-full border-2 border-gray-300 rounded-2xl">
        <img
          className="w-1/4 rounded-xl"
          src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
          alt="adoptionCardImage"
        />
        <div className="ml-8 space-y-2">
          <p className="text-sm font-bold">양갱</p>
          <p className="text-xs">서울시 강북구 번동</p>
          <p className="text-xs">노르웨이숲</p>
        </div>
        <div className="flex">
          <button className="p-3 text-sm text-white bg-green-400 rounded-xl">입양 승인</button>
          <button className="p-3 text-sm text-white bg-red-400 rounded-xl">입양 거절</button>
        </div>
      </div>
    </section>
  );
}
export default AdoptionCard;
