[간단 정보] - TopRatedMovieArray
adult : 성인인지 여부(boolena 값)
backdrop_path : 배경 이미지(URL 경로)
genre_ids : 장르 id들(장르명 반환X, 장르 ID 들을 반환)
id : 영화 고유 id
original_language : 영화 오리지널 언어(언어 코드로 반환)
title : 영화 제목 (한국어)
original_title : 원어(영어 현지어로 반환 (ex)일어, 중국어 등)
overview : 요약
popularity : 인기
poster_path : 포스터 이미지(URL 경로)
release_date : 출시일
video : 비디오 있는지(언어 설정이 한국어라서 한국 영상이 없을 수 있음)
vote_average : 평점
vote_count : 총 투표 수

[상세 정보] - getDetailedMovie
adult : 성인인지 여부(boolena 값)
backdrop_path : 배경 이미지(URL 경로)
belongs_to_collection : 시리즈물 (null일수도 있음)
budget : 예산
genres : 장르
homepage : 홈페이지
id : 영화 고유 id
imdb_id : imbd 사이트 영화 고유 id
original_language : 영화 오리지널 언어(언어 코드로 반환)
original_title : 원어(영어 현지어로 반환 (ex)일어, 중국어 등)
overview : 요약
popularity : 인기
poster_path : 포스터 이미지(URL 경로)
production_companies": [  // 제작회사(배열)
    {
      "id": 97,
      "logo_path": "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
      "name": "Castle Rock Entertainment",
      "origin_country": "US"
    },
    {
      "id": 5,
      "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
      "name": "Columbia Pictures",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
release_date : 출시일
revenue : 수익
runtime: 상영시간
spoken_languages : 음성 언어(배열)
status: 개봉상태
tagline: 슬로건 ((ex)"두려움은 너를 죄수로 가두고 희망은 너를 자유롭게 하리라")
title : 영화 제목 (한국어)
video : 비디오 있는지(언어 설정이 한국어라서 한국 영상이 없을 수 있음)
vote_average : 평점
vote_count : 총 투표 수

[캐스트] - getCastArray
adult: 성인인지 여부(boolena 값)
gender: 성별(1:여성, 2:남성)
id: 504, 
known_for_department: 알려진 캐스트 직업
name": 캐스트 이름
original_name: 캐스트 본명
popularity: 인기도
profile_path: 프로필 이미지
cast_id: 모르겠음
character: 배역
credit_id: // 모르겠음
order: // 캐스트 중 순서(몇 번째 캐스트인지)

[크루] - getCrewArray
adult: false,
gender: 성별
id: 154,
known_for_department: 알려진 직업
name: 이름
original_name: 본명
popularity: 인기도
profile_path: 프로필 사진
credit_id: // 모르겠음
department: 부서
job: 직업

[지원 id] - getSupportedArray
{
id:  영화 id
imdb_id: imdb id
wikidata_id: 위키피디아 id
facebook_id: 페이스북 id
instagram_id: 인스타그램 id
twitter_id: 트위터 id
}

[배경 이미지] - getBackDropArray
aspect_ratio: 가로 세로 비율
height:  높이
iso_639_1:  언어
file_path: 파일 이미지 경로
vote_average:  평점
vote_count:  투표수
width:  가로

[키워드] - getKeywordArray
id:  키워드 고유 id
name:  키워드

[추천 영화] - getRecommendationArray
adult : 성인인지 여부(boolena 값)
backdrop_path : 배경 이미지(URL 경로)
genre_ids : 장르 id들(장르명 반환X, 장르 ID 들을 반환)
id : 영화 고유 id
original_language : 영화 오리지널 언어(언어 코드로 반환)
title : 영화 제목 (한국어)
original_title : 원어(영어 현지어로 반환 (ex)일어, 중국어 등)
overview : 요약
popularity : 인기
poster_path : 포스터 이미지(URL 경로)
release_date : 출시일
video : 비디오 있는지(언어 설정이 한국어라서 한국 영상이 없을 수 있음)
vote_average : 평점
vote_count : 총 투표 수

[비슷한 영화] - getSimilarArray
adult : 성인인지 여부(boolena 값)
backdrop_path : 배경 이미지(URL 경로)
genre_ids : 장르 id들(장르명 반환X, 장르 ID 들을 반환)
id : 영화 고유 id
original_language : 영화 오리지널 언어(언어 코드로 반환)
title : 영화 제목 (한국어)
original_title : 원어(영어 현지어로 반환 (ex)일어, 중국어 등)
overview : 요약
popularity : 인기
poster_path : 포스터 이미지(URL 경로)
release_date : 출시일
video : 비디오 있는지(언어 설정이 한국어라서 한국 영상이 없을 수 있음)
vote_average : 평점
vote_count : 총 투표 수

[관련 영상] - getVideoArray
iso_639_1: 언어
iso_3166_1: 나라
name:  제목
key:   유튜브일 경우, 유튜브 링크 watch?v= 뒤에 붙이면 재생 됨
site:  유튜브
size: 해상도
type:  영상 종류(클립, 트레일러)
official:  공식여부
published_at: 업로드 날짜
id:  고유 값

[관련 영상 태그] - getVideoTagArray
위의 [관련 영상] 값들을 html 태그로 변환

[검색한 영화] - getSearchArray
adult : 성인인지 여부(boolena 값)
backdrop_path : 배경 이미지(URL 경로)
genre_ids : 장르 id들(장르명 반환X, 장르 ID 들을 반환)
id : 영화 고유 id
original_language : 영화 오리지널 언어(언어 코드로 반환)
title : 영화 제목 (한국어)
original_title : 원어(영어 현지어로 반환 (ex)일어, 중국어 등)
overview : 요약
popularity : 인기
poster_path : 포스터 이미지(URL 경로)
release_date : 출시일
video : 비디오 있는지(언어 설정이 한국어라서 한국 영상이 없을 수 있음)
vote_average : 평점
vote_count : 총 투표 수

<참고>
-국가 코드 부분 최적화 할 것
-국가 코드 따로 빼놓기
-값 받아올 때, NULL 반드시 체크할 것
-유명한 영화나 사용자가 많은 언어(영어)는 자료가 많으나 인기가 없는 영화이거나 많이 사용되지 않는 언어는 데이터가 없을수 있음