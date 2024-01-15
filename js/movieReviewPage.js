import { getDetailedMovie, getCastArray } from "./api/api.js"; //api 호출

//메인 페이지에서 영화 id 값 할당
let url = new URL(window.location.href);
let urlParameter = new URLSearchParams(url.search);
const id = urlParameter.get("id");

const detailData = await getDetailedMovie(id); // getDetailedMovie() 함수 실행
const castData = await getCastArray(id); //  getCastArray() 함수 실행

document.addEventListener(
  "DOMContentLoaded",
  movieInformation(detailData, castData)
);

function movieInformation(detailData, castData) {
  let MovieObject = {
    //getDetailedMovie() 메서드
    title: detailData["title"], // 영화 제목
    overview: detailData["overview"], // 영화 내용
    vote: detailData["vote_average"].toFixed(2), //영화 평점
    posterImg: detailData["poster_path"], //영화 포트터 사진
    backdropImg: detailData["backdrop_path"], //영화 배경 사진
    releaseDate: detailData["release_date"], //개봉일
    runtime: detailData["runtime"], //상영 시간
    //getCastArray() 메서드
    castName: castData.map((item) => item.name),
    castCharacter: castData.map((item) => item.character),
    castProfile: castData.map((item) => item.profile_path),
  };

  movieList(MovieObject);
}

function movieList(MovieObject) {
  const defaultProfile = "../images/image-default.png"; //images 폴더 안에 있는 기본 이미지 설정
  const NullProfile = "https://image.tmdb.org/t/p/original/null"; // 이미지 경로가 null인 값

  //각각 영화 정보 표현식 변경
  const releaseDate = MovieObject.releaseDate.replace(/-/g, "."); //개봉일
  const castProfile = MovieObject.castProfile.slice(0, 5); //배우 프로필
  const castName = MovieObject.castName.slice(0, 5); //배우 이름
  const castCharacter = MovieObject.castCharacter.slice(0, 5); //배역
  const title = MovieObject.title; //제목
  const vote = MovieObject.vote; //평점
  const overview = MovieObject.overview; //내용
  const runtime = MovieObject.runtime; //상영 시간
  const backdropImg = MovieObject.backdropImg; //배경 사진
  const posterImg = MovieObject.posterImg; // 영화 포스터 사진

  //배우 프로필, 이름, 배역 html 할당
  const tagProfile = castProfile
    .map((item, index) => {
      // 배우 프로필 사진 유효성검사
      if (item !== NullProfile) {
        return `
        <li class="cast-list">
            <div class="movies-cast-list">
              <img src="${item}" alt="${title}">
              <div class="movies-cast-title">
                <h3>${castName[index]}</h3>
                <p>${castCharacter[index]}</p>
              </div>
            </div>
        </li>
        `;
      } else {
        return `
        <li class="cast-list">
        <div class="movies-cast-list">
          <img src="${defaultProfile}" alt="${title}">
          <div class="movies-cast-title">
            <h3>${castName[index]}</h3>
            <p>${castCharacter[index]}</p>
          </div>
        </div>
    </li>
        `;
      }
    })
    .join(""); //프로필 마다(,)쉼표가 표시되어 삭제

  //배경 사진, 포스터 사진, 제목, 평점, 개봉일, 상영시간, 내용
  const temp = `
  <div class="movies-detail-inner">
  <a href="../index.html"><i class="fa-solid fa-arrow-left"></i></a>
  <img src="${backdropImg}" alt="${title}" />
  <div class="movies-detail-list">
    <div class="poster-img">
      <img src="${posterImg}" alt="${title}" />
    </div>
    <div class="movies-content">
      <ul>
        <li>
        <h2>${title}</h2>
        <p>평점 : ${vote}</p>
        <p>개봉일 : ${releaseDate}</p>
        <p>상영시간 : ${runtime}분</p>
        <p class="movies-contents">${overview}</p>
        </li>
      </ul>
    </div>
</div>
</div>
`;

  const moviesContent = document.querySelector(".movies-detail");
  const moviesPoster = document.querySelector(".movies-cast-name-inner");

  // html 태그 적용
  moviesContent.innerHTML = temp;
  moviesPoster.innerHTML = tagProfile;
}
