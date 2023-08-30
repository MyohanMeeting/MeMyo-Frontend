export interface UserInfo {
  email: string;
  nickname: string;
  phoneNumber: string;
  profileImage: string;
  oauthType: string;
}

export interface MyNotice {
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
