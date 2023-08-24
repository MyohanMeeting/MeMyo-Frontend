import AdoptPictureInp from '@components/adopt-post/AdoptPictureInp';
import AdoptSelectBox from '@components/adopt-post/AdoptSelectBox';

function Post() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-5xl mt-24">
        <h1 className="text-3xl mb-10">유기묘 입양 페이지</h1>

        <section className="flex justify-between gap-6">
          <div className="flex-1  border-2 border-memyo-yellow2 rounded-xl p-7">
            <div className=" flex justify-between gap-6">
              <div className="flex-1">
                <p className="mb-8">AD Type</p>
                <div className="flex justify-between gap-5   mb-5">
                  <button className=" py-5  flex-1 border-2 border-memyo-yellow1  text-center  rounded-lg">
                    Lost
                  </button>
                  <button className=" py-5 flex-1 border-2 border-memyo-yellow1 text-center  rounded-lg">
                    button
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <p className="mb-8">Animal Type</p>
                <div className="flex justify-between items-centerr gap-4 mb-7">
                  <button className="w-1/3 border-2 border-memyo-yellow1 py-5  rounded-lg text-center ">
                    test
                  </button>
                  <button className="w-1/3 border-2 border-memyo-yellow1 py-5 rounded-lg text-center ">
                    test
                  </button>
                  <button className="w-1/3  border-2 border-memyo-yellow1 py-5 rounded-lg text-center ">
                    test
                  </button>
                </div>
              </div>
            </div>

            <AdoptSelectBox
              id={1}
              label="종류"
              options={['러시안블루', '고양이', '러시안블루']}
              selectedValue="state 값"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="border-2 border-memyo-yellow2 rounded-xl p-7">
              <p className="text-3xl mb-5">Add a photo</p>

              <span className="text-lg mb-3 block">upload image</span>

              <div className="flex flex-wrap justify-between gap-6 ">
                <AdoptPictureInp />
                <AdoptPictureInp />
                <AdoptPictureInp />
                <AdoptPictureInp />
                <AdoptPictureInp />
                <AdoptPictureInp />
              </div>
            </div>
            <div className="border-2 border-memyo-yellow2 rounded-xl p-7">
              <h3 className="text-3xl mb-5">Contacts</h3>

              <input
                type="text"
                className="block w-full p-3 mb-4 border-2 border-memyo-yellow2 rounded-lg"
                placeholder="name"
              />

              <input
                type="text"
                className="block  w-full p-3 mb-4 border-2 border-memyo-yellow2 rounded-lg"
                placeholder="phone Number"
              />

              <button className="float-right py-3 px-14   border-2 border-memyo-yellow2 rounded-lg">
                등록하기
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Post;
