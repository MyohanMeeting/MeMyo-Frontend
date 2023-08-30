export interface FavoriteFriend {
  favoriteId: number;
  memberId: number;
  notice: {
    noticeId: number;
    noticeTitle: string;
    noticeStatus: string;
    thumbnail: string;
    authorName: string;
    catName: string;
    catSpecies: string;
    shelterCity: string;
    applicationCount: number;
    commentCount: number;
    createdAt: string;
  };
}
