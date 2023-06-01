import CatInfoCard from '../CatInfoCard';

function FavoriteTab() {
  return (
    <div>
      <section className="max-w-lg pt-4 m-auto space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 md:max-w-none md:place-items-center">
        <CatInfoCard />
        <CatInfoCard />
        <CatInfoCard />
        <CatInfoCard />
        <CatInfoCard />
        <CatInfoCard />
        <CatInfoCard />
      </section>
    </div>
  );
}
export default FavoriteTab;
