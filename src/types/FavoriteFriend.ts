export interface Notice {
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
}

export interface FavoriteFriend {
  favoriteId: number;
  memberId: number;
  notice: Notice;
}
