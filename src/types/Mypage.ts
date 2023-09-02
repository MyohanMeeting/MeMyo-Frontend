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

export interface Author {
  authorId: number;
  nickname: string;
  profileImageUrl: string;
}

export interface Applicant {
  name: string;
  age: number;
  gender: string;
  address: string;
  phoneNumber: string;
  job: string;
  married: string;
}

export interface Survey {
  answer1_1: string;
  answer1_2: string;
  answer2_1: string;
  answer2_2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
}

export interface MyAdoption {
  applicationId: number;
  noticeId: number;
  author: Author;
  applicant: Applicant;
  survey: Survey;
  content: string;
  createdAt: string;
}

export interface UserPassword {
  currentPassword: string;
  newPassword: string;
}
