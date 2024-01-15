# Movie Website Project in TMDB API
![스크린샷 2024-01-15 오후 12 28 54](https://github.com/seokachu/movie_project/assets/116704646/2a945135-aa54-4466-8c7e-99dc5d2952bd)

<br>
<br>
<br>

## 영화 검색 콜렉션

`Team menbers` : 김명환(팀장), 박서영, 안주원, 이준구

`Link` : [구현 화면 이동하기](https://seokachu.github.io/movie_project/)

<br>
<br>
<br>

## 핵심기능
`영화조회` : 사이트내 카테고리 별 영화를 조회할 수 있습니다.

`영화검색` : 영화 목록을 조회하고 검색할 수 있습니다.

`관람평조회,수정,삭제` : 관람평을 남기고 리뷰 삭제, 수정이 가능합니다.

<br>
<br>
<br>

## 필수요구사항
- 기존 영화정보 카드 리스트에서 특정 item을 선택할 시, 상세 페이지로 이동하도록 구현.
- 상세 페이지에서 메인 페이지(홈)로 이동하는 UI도 함께 구성.
- 상세페이지에서 특정 영화에 대해 의견을 작성할 수 있는 UI를 구현.
- 작성자, 리뷰, 확인비밀번호를 입력하도록 구현.
- 작성한 정보는 브라우저의 localStorage에 적재하도록 함.
- UX를 고려한 validation check (영화 검색 시, 댓글 작성 시, 추가 기능 구현 시)
<br>

- 하기 기재된 Javascript 문법 요소를 이용하여 구현.

- [x] const와 let만을 이용한 변수 선언
- [ ] 형 변환 - 예시 중 2개 이상 사용 (number → string, string → number, boolean → string)
- [ ] 연산자 - 예시 중 3개 이상 사용 ( &&, ||, !, ?:, typeof)
- [ ] 화살표 함수 - 2개 이상 사용 (일반 화살표 함수, 한 줄로 된 화살표 함수, 매개변수가 하나이 화살표 함수)
- [ ] 조건문 전부 구현 (if, if-else, if-else if-else, switch, 삼항연산자, 조건문중첩)
- [ ] 반복문 전부 구현 (for, for in, for of, while, do~while, break, continue)
- [ ] 객체 병합
- [ ] 배열 2개이상 사용 - (push, pop, shift, unshift, splice, slice)
- [ ] 배열 3개이상 사용 - (forEach, map, filter, reduce, find)
- [ ] 자료구조 1개이상 사용 - (map, set, null, undefiend, callback)
- [ ] DOM객체 생성 선택 4개이상 사용
- [ ] 모듈 사용 (import, export)

<br>
<br>
<br>

## Team members
|김명환|박서영|안주원|이준구|
|:----:|:----:|:----:|:----:|
|**Features**<br>TMDB api연결|**Features**<br>메인페이지 퍼블리싱<br>서브페이지 퍼블리싱<br>관람평등록CRUD구현<br>CRUD벨리데이션 구현|**Features**<br>메인페이지 검색 벨리데이션|**Features**<br>카드리스트 상세페이지 이동 구현|

<br>
<br>
<br>

## Tools
Communication
|Github|Slack|
|:----:|:----:|
|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/github-icon.svg" alt="icon" width="65" height="65" /></div>|![slack](https://github.com/seokachu/movie_project/assets/116704646/fad071dc-b434-4e1d-aecd-448ed189a96d)<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>|

<br>
<br>
<br>

## Front-End
|Javascript|HTML|CSS|Prettier|
|:----:|:----:|:----:|:----:|
|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /></div>|![free-icon-html-5-174854](https://github.com/seokachu/movie_project/assets/116704646/5a2583df-deee-40c3-8ba4-bbe5b2595075)|![css3](https://github.com/seokachu/movie_project/assets/116704646/c46cba3f-4976-41df-b6a7-5776753dfb8c)|<div style="display: flex; align-items: flex-start;"><img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /></div>|

<br>
<br>
<br>

## Git Branch
`main` : 운영, 배포 브랜치

`dev` : 기능 통합 브랜치

<br>
<br>
<br>

## 기능 미리보기(Front-end)
||페이지 및 기능|설명|담당개발자|
|:----:|:----:|:----:|:----:|
|Main Page||- 카테고리 별 영화조회<br>- 영화 목록 조회 검색<br>- TMDB API연결| **FRONT-END**<br> `김명환`|
|Main Page||- 영화 목록 조회 검색<br>- 검색 벨리데이션 구현| **FRONT-END**<br> `안주원`|
|Main Page||- 메인페이지 퍼블리싱<br>- 카드효과<br>- 버튼효과 적용| **FRONT-END**<br> `박서영`|
|movie_review Page||- 관람평CRUD구현<br>- 관람평 벨리데이션 구현|-|`박서영`|
|movie_review Page||- 카드 클릭시 서브페이지 이동기능 구현<br>|-|`이준구`|














