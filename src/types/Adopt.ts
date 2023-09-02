import { applicationId } from './Adopt';

export interface searchFacet {
  page: number;
  limit: number;
  title: string;
  content: string;
  authorName: string;
  noticeStatus: string;
  catName: string;
  catSpecies: string;
  catAge: string;
  catSex: string;
  neutered: string;
  city: string;
  shelterName: string;
  sort: string;
}

export interface AdoptPost {
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
  createAt: string;
}

export interface Author {
  authorId: number;
  nickname: string;
  profileImageUrl: string;
}

export type gender = 'MALE' | 'FEMALE' | 'OTHER';

export interface Cat {
  name: string;
  age: string;
  registered: string;
  registNumber: string;
  species: string;
  sex: gender;
  neutered: string;
  healthStatus: string;
  personality: string;
  foundedPlace: string;
  foundedAt: string;
  weight: number;
}

export type CITY_NAME =
  | 'SEOUL'
  | 'SEJONG'
  | 'BUSAN'
  | 'DAEGU'
  | 'INCHEON'
  | 'GWANGJU'
  | 'ULSAN'
  | 'DAEJEON'
  | 'GYEONGGI'
  | 'GANGWON'
  | 'CHUNGCHEONG_BUK'
  | 'CHUNGCHEONG_NAM'
  | 'JEOLLA_BUK'
  | 'JEOLLA_NAM'
  | 'GYEONGSANG_BUK'
  | 'GYEONGSANG_NAM'
  | 'JEJU';

export interface Shelter {
  city: CITY_NAME;
  name: string;
  address: string;
  phoneNumber: string;
}
export interface Thumbnail {
  uploadId: number;
  url: string;
}
export interface catPicture {
  uploadId: number;
  url: string;
}

export interface AdoptPostTheme {
  title: string;
  content: string;
}

export type NoticeId = NonNullable<number | null>;

export type uploadIdArr = number[];

export type applicationId = { applicationId: number };

export interface AdoptDetail {
  noticeId: NoticeId;
  author: Author;
  cat: Cat;
  shelter: Shelter;
  thumbnail: Thumbnail;
  catPictures: catPicture[];
  status: string;
  title: string;
  content: string;
  applicationCount: number;
  commentCount: number;
  createdAt: string;
}

export interface AdoptComment {
  noticeId: NoticeId;
  author: Author;
  content: string;
  createdAt: string;
  noticeCommentId: number;
}

export type userComment = Pick<AdoptComment, 'noticeId' | 'content'>;

export interface AdoptForm {
  cat: Partial<Cat>;
  shelter: Partial<Shelter>;
  thumbnailId: Thumbnail['uploadId'];
  catPictures: catPicture[];
  title: string;
  content: string;
}

export type Marrried = 'MARRIED' | 'UNMARRIED';

export interface ApplyUser {
  name: string;
  age: number;
  gender: gender;
  address: string;
  phoneNumber: string;
  job: string;
  married: Married;
}

export type Answer = 'YES' | 'NO';

export type Married = 'MARRIED' | 'UNMARRIED';

export interface Survey {
  answer1_1: Answer;
  answer1_2: string;
  answer2_1: Answer;
  answer2_2: string;
  answer3: string;
  answer4: Answer;
  answer5: string;
  answer6: Answer;
}

export interface AdoptApply {
  noticeId: NoticeId;
  applicant: ApplyUser;
  survey: Survey;
  content: string;
}

export type AdoptApplyKey = keyof AdoptApply;
export type AdoptApplyValue = AdoptApply[AdoptApplyKey];

export type AdoptApplyObj = { AdoptApplyKey: AdoptApplyValue };
