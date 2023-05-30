import CatInfoCard from '../CatInfoCard';

function MyLetterTab() {
  return (
    <section className="pt-4 mx-4 space-y-4">
      <div>
        <p className="text-xs">입양 대기중</p>
        <CatInfoCard />
      </div>
      <div>
        <p className="text-xs text-red-600">입양 거절</p>
        <CatInfoCard />
      </div>
      <div>
        <p className="text-xs text-green-600">입양 승인</p>
        <CatInfoCard />
      </div>
    </section>
  );
}

export default MyLetterTab;
