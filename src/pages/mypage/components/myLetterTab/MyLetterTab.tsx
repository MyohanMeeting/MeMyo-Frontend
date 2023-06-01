import CatInfoCard from '../CatInfoCard';

function MyLetterTab() {
  return (
    <article className="max-w-lg pt-4 m-auto space-y-4 md:space-y-0 md:gap-y-6 md:grid-cols-3 md:grid md:m-auto">
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
      <CatInfoCard />
    </article>
  );
}

export default MyLetterTab;
