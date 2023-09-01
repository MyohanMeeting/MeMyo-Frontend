import { AdoptPost } from '@/types/Adopt';
import AdoptCard from '@components/adopt-post/AdoptCard';
import { memo } from 'react';

interface Props{
    AdoptPosts:AdoptPost[]
}
function AdoptCards({AdoptPosts}: Props) {
    return (
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-3 my-4 h-72">
          {AdoptPosts.map((adopt) => (
            <AdoptCard key={adopt.noticeId} adopt={adopt} />
          ))}
        </ul>
    );
}
export default memo(AdoptCards);




