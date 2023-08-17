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
    noticeId: number,
    noticeTitle: string,
    noticeStatus: string,
    thumbnail: string,
    authorName: string,
    catName: string,
    catSpecies: string,
    shelterCity: string,
    applicationCount: number,
    commentCount: number,
    createAt:string
} 

interface Author{
    authorId: number,
    nickname: string,
    profileImageUrl:string
}

type gender = 'MALE' | 'FEMALE';

interface Cat{
    name: string,
    age: string,
    registered: string,
    registNumber:string,
    species: string,
    sex: gender,
    neutered: string,
    healthStatus: string,
    personality: string,
    foundedPlace: string,
    foundedAt: string,
    weight: number
}

type CITY_NAME = 'SEOUL' | 'SEJONG' | 'BUSAN' | 'DAEGU' | 'INCHEON' | 'GWANGJU' | 'ULSAN' | 'DAEJEON' | 'GYEONGGI' | 'GANGWON' | 'CHUNGCHEONG_BUK' |
    'CHUNGCHEONG_NAM' | 'JEOLLA_BUK' | 'JEOLLA_NAM' | 'GYEONGSANG_BUK' | 'GYEONGSANG_NAM' | 'JEJU';

interface Shelter{
    city: CITY_NAME,
    name: string,
    address: string,
    phoneNumber:string
}
interface Thumbnail{
    uploadId: number,
    url:string
}
interface catPicture{
    uploadId: number,
    url:string
}
export type NoticeId = NonNullable<number | null>

export interface AdoptDetail{
    noticeId: number,
    author: Author,
    cat: Cat,
    shelter: Shelter,
    thumbnail: Thumbnail,
    catPictures: catPicture[],
    status: string,
    title: string,
    content: string,
    applicationCount: number,
    commentCount: number,
    createdAt: string
}


