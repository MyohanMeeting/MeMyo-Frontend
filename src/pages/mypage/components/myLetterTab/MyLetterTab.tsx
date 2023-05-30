import CatInfoCard from '../CatInfoCard';

function MyLetterTab() {
  return (
    <section className="pt-4 mx-4 space-y-4 md:space-y-0 md:gap-y-6 md:grid-cols-3 md:grid md:m-auto">
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
    </section>
  );
}

export default MyLetterTab;
