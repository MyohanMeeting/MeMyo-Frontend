# 묘한만남

## 📌 배포 링크

- [https://myohanmeeting.github.io/MeMyo-Frontend/](https://myohanmeeting.github.io/MeMyo-Frontend/)

## 📌 프로젝트 소개

- 유기묘를 입양할 수 있는 사이트입니다.
- 이메일과 카카오로 로그인/회원가입이 가능합니다.
- 신청서를 작성해 유기묘 공고를 등록할 수 있습니다.
- 마이페이지에서 올린 공고, 분양 신청한 공고, 최애 친구 등을 확인할 수 있습니다.

## 📌 기술 스택
- Front-end
  - React.js
  - TypeScript
  - Redux Toolkit
  - Tailwind CSS

## 📌팀원 소개

<table align="center">
<tr >
<td align="center"><a href="https://github.com/vanillovin"><img src="https://avatars.githubusercontent.com/vanillovin" width="100%"  height="50%" /></a></td>
<td align="center"><a href="https://github.com/heywon0909"><img src="https://avatars.githubusercontent.com/heywon0909" width="100%"  height="65%"/></a></td>
<td align="center"><a href="https://github.com/wecaners"><img src="https://avatars.githubusercontent.com/wecaners" width="100%" height="50%" /></a></td>
</tr>
<tr>
<td align="center"><b>이민지</b></td>
<td align="center"><b>박혜원</b></td>
<td align="center"><b>김진우</b></td>
</tr>
<tr>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
<td align="center"><b>FE Developer</b></td>
</tr>
</table>


## 📌프로젝트 과정 소개

- 팀 미팅과 작업 진행 과정을 notion과 trello로 기록하고 discord로 소통하였습니다.
- github actions으로 pulll request 시 assignee, reviewer를 자동 지정하도록 자동화 작업을 수행하였습니다.

### Git 커밋 컨벤션 정의 

|     커밋 유형     |                       의미                     |
|:----------------:|:----------------------------------------------:|
|       Feat       |                  새로운 기능 추가                |
|        Fix       |                     버그 수정                   |
|       Style      | 코드 formatting, 세미콜론 누락, 코드 변경 없는 경우 |
|       Docs       |                    문서 수정                    |
|     Refactor     |                  코드 리팩토링                   |
|       Test       |                 테스트 코드 작성                 |
|       Chore      |         패키지 매니저 수정, 기타 수정              |
|      Design      |           CSS 등 사용자 UI 디자인 변경            |
|     Comment      |               필요한 주석 추가 및 변경            |
|      Rename      |         파일 또는 폴더명 수정 or 이동              |
|      Remove      |              파일 삭제 작업만 수행                |
| !BREAKING CHANGE |                 큰 API 변경의 경우               |
|     !HOTFIX      |           급한 치명적인 버그 수정 경우             |


### 폴더 구조

1) `public/`: 정적 파일들이 위치한 폴더로 index.html, 파비콘 등이 들어갑니다.

2) `src/assets/`: 이미지, 글꼴, 스타일시트 등과 같은 파일이 들어가는 폴더입니다.

3) `src/components/`: 재사용 가능한 UI 컴포넌트를 저장하는 폴더로, 각 컴포넌트는 자신만의 폴더를 가지고, 그 안에 해당 컴포넌트의 JavaScript 파일이 들어갑니다.

4) `src/pages/`: 각 페이지 별 컴포넌트를 저장하는 폴더로, 이 폴더 내에 각 페이지별로 폴더를 만들고 해당 페이지의 JavaScript 파일을 저장합니다.

5) `src/utils/`: 공통으로 사용되는 유틸리티 함수를 저장하는 폴더입니다.

6) `src/services/`: API 호출이나 외부 서비스와 관련된 코드를 저장하는 폴더입니다.

7) `src/store/`: 리덕스 등의 상태 관리 라이브러리와 관련된 코드를 저장하는 폴더입니다.

## 📌 기능 목록 명세

### ✔ 담당자 : 김진우

- 홈 화면 레이아웃 및 API 호출 구현
- 마이페이지 구현
  - 올린 공고 조회
  - 신청한 공고 조회
  - 최애 친구 조회
- 사이드바 구현

### ✔ 담당자 : 박혜원

- 유기묘 입양 공고 조회 페이지 구현
  - 공고를 필터하는 기능 구현  
- 유기묘 입양 공고 작성 페이지 구현
  - 유기 동물 입양 신청서 양식을 활용한 신청서 폼 구현

### ✔ 담당자 : 이민지

- 홈 화면 레이아웃 디자인 구현
- 카카오 로그인, 회원가입 기능 구현
- 닉네임, 이메일 중복 확인 기능 구현
- 이메일 인증, 로그인, 회원가입 기능 구현

## 📌 프로젝트 설치 및 시작

### 프로젝트 클론

```
$ git clone https://github.com/MyohanMeeting/MeMyo-Frontend.git
```

### 패키지 설치

```
$ npm install
```

### 서버 실행

```
$ npm run dev
```

## 📌 폴더 구조

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜authApi.ts
 ┃ ┣ 📜fileApi.ts
 ┃ ┗ 📜signUpApi.ts
 ┣ 📂assets
 ┃ ┣ 📂adopt
 ┃ ┃ ┣ 📜냥이10.png
 ┃ ┃ ┗ 📜냥이5.jpg
 ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📂pretendard
 ┃ ┃ ┃ ┗ 📜PretendardVariable.ttf
 ┃ ┣ 📂homePage
 ┃ ┃ ┗ 📜homePageMainImage.png
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜kakao_login_medium_wide.png
 ┃ ┃ ┣ 📜login-background-md.jpeg
 ┃ ┃ ┣ 📜login-background.jpeg
 ┃ ┃ ┗ 📜login-cat-image.jpeg
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📜adoptHeart.png
 ┃ ┃ ┣ 📜approved.png
 ┃ ┃ ┣ 📜await.png
 ┃ ┃ ┣ 📜favoriteCat.png
 ┃ ┃ ┣ 📜femenine.png
 ┃ ┃ ┣ 📜kitten.png
 ┃ ┃ ┣ 📜male.png
 ┃ ┃ ┣ 📜modifying.png
 ┃ ┃ ┣ 📜posting.png
 ┃ ┃ ┣ 📜reject.png
 ┃ ┃ ┗ 📜stamp.png
 ┃ ┗ 📂signup
 ┃ ┃ ┣ 📜signup-bg-img.jpeg
 ┃ ┃ ┗ 📜signupMainImg.jpg
 ┣ 📂components
 ┃ ┣ 📂adopt-post
 ┃ ┃ ┣ 📂apply
 ┃ ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┃ ┣ 📜AdoptAgreeCheck.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptAgreePromise.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptApplyCheck.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptApplyUser.tsx
 ┃ ┃ ┃ ┃ ┗ 📜AdoptApplyUserTest.tsx
 ┃ ┃ ┃ ┗ 📂template
 ┃ ┃ ┃ ┃ ┣ 📜AdoptApplyForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptApplyForms.tsx
 ┃ ┃ ┃ ┃ ┗ 📜AdoptApplyTemplate.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📜AdoptAddMyReview.tsx
 ┃ ┃ ┃ ┗ 📜AdoptDetailReview.tsx
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┗ 📜Form.tsx
 ┃ ┃ ┣ 📂regist
 ┃ ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┃ ┣ 📜AdoptCatForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptPostTheme.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptShelterForm.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptUploadCatPic.tsx
 ┃ ┃ ┃ ┃ ┣ 📜AdoptUploadPicForm.tsx
 ┃ ┃ ┃ ┃ ┗ 📜CatImg.tsx
 ┃ ┃ ┃ ┣ 📂mobile
 ┃ ┃ ┃ ┃ ┣ 📜AdoptMobileTemplate.tsx
 ┃ ┃ ┃ ┃ ┗ 📜AdoptRegistNextBut.tsx
 ┃ ┃ ┃ ┗ 📂pc
 ┃ ┃ ┃ ┃ ┣ 📜AdoptRegisterBut.tsx
 ┃ ┃ ┃ ┃ ┗ 📜AdoptWebTemplate.tsx
 ┃ ┃ ┣ 📜AdoptCard.tsx
 ┃ ┃ ┣ 📜AdoptCards.tsx
 ┃ ┃ ┣ 📜AdoptCatDetail.tsx
 ┃ ┃ ┣ 📜AdoptCatPic.tsx
 ┃ ┃ ┣ 📜AdoptDetailCard.tsx
 ┃ ┃ ┣ 📜AdoptMobileFacet.tsx
 ┃ ┃ ┣ 📜AdoptSearchFacet.tsx
 ┃ ┃ ┣ 📜AdoptSelectBox.tsx
 ┃ ┃ ┗ 📜AdoptShelterDetail.tsx
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜NavBar.tsx
 ┃ ┃ ┗ 📜Wrapper.tsx
 ┃ ┣ 📂loading
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📜KakaoCallBack.tsx
 ┃ ┗ 📜Modal.tsx
 ┣ 📂context
 ┃ ┗ 📜AdoptFormContext.tsx
 ┣ 📂data
 ┣ 📂hooks
 ┃ ┣ 📜useAuthInputs.tsx
 ┃ ┗ 📜useResponsiveStatus.tsx
 ┣ 📂pages
 ┃ ┣ 📂adopt
 ┃ ┃ ┣ 📜AdoptApplying.tsx
 ┃ ┃ ┣ 📜AdoptDetail.tsx
 ┃ ┃ ┣ 📜AdoptForm.tsx
 ┃ ┃ ┗ 📜AdoptPage.tsx
 ┃ ┣ 📂certification
 ┃ ┃ ┗ 📜CertificationPage.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜Sidebar.tsx
 ┃ ┃ ┗ 📜HomePage.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┗ 📜LoginPage.tsx
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂adoptionHandleTab
 ┃ ┃ ┃ ┃ ┣ 📜AdoptionCard.tsx
 ┃ ┃ ┃ ┃ ┗ 📜AdoptionHandleTab.tsx
 ┃ ┃ ┃ ┣ 📂favoriteTab
 ┃ ┃ ┃ ┃ ┣ 📜FavoriteFriendCard.tsx
 ┃ ┃ ┃ ┃ ┗ 📜FavoriteTab.tsx
 ┃ ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┃ ┃ ┣ 📂myLetterTab
 ┃ ┃ ┃ ┃ ┗ 📜MyLetterTab.tsx
 ┃ ┃ ┃ ┣ 📂userInfoModifyTab
 ┃ ┃ ┃ ┃ ┣ 📜UserInfoModifyInput.tsx
 ┃ ┃ ┃ ┃ ┗ 📜UserInfoModifyPage.tsx
 ┃ ┃ ┃ ┗ 📜CatInfoCard.tsx
 ┃ ┃ ┗ 📜MyPage.tsx
 ┃ ┗ 📂signup
 ┃ ┃ ┗ 📜SignupPage.tsx
 ┣ 📂reducers
 ┃ ┣ 📜Adopt.ts
 ┃ ┣ 📜AdoptApply.ts
 ┃ ┗ 📜AdoptSearch.ts
 ┣ 📂redux
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜axiosConfig.ts
 ┃ ┣ 📂slice
 ┃ ┃ ┣ 📜adoptSlice.ts
 ┃ ┃ ┣ 📜authSlice.ts
 ┃ ┃ ┣ 📜favoriteFriendSlice.ts
 ┃ ┃ ┣ 📜mypageSlice.ts
 ┃ ┃ ┗ 📜recentPostSlice.ts
 ┃ ┣ 📂thunks
 ┃ ┃ ┣ 📜AdoptThunk.ts
 ┃ ┃ ┣ 📜AuthThunk.ts
 ┃ ┃ ┣ 📜FavoriteFriendThunk.ts
 ┃ ┃ ┣ 📜HomeThunk.ts
 ┃ ┃ ┗ 📜MyThunk.ts
 ┃ ┣ 📜hooks.ts
 ┃ ┣ 📜reducer.ts
 ┃ ┗ 📜store.ts
 ┣ 📂router
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜paths.tsx
 ┣ 📂services
 ┃ ┣ 📜api.ts
 ┃ ┗ 📜authService.ts
 ┣ 📂types
 ┃ ┣ 📜Adopt.ts
 ┃ ┣ 📜Auth.ts
 ┃ ┣ 📜custom.d.ts
 ┃ ┣ 📜FavoriteFriend.ts
 ┃ ┗ 📜Mypage.ts
 ┣ 📂utils
 ┃ ┣ 📜ApiResponseHandler.ts
 ┃ ┣ 📜config.ts
 ┃ ┣ 📜jwtUtils.ts
 ┃ ┗ 📜validation.ts
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┣ 📜setupTests.ts
 ┣ 📜styles.css
 ┗ 📜vite-env.d.ts
```
