import { getDetailedMovie, getCastArray } from "./api/api.js";

let url = new URL(window.location.href);
let urlParameter = new URLSearchParams(url.search);
const id = urlParameter.get("id"); //영화 id 값

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
    genres: detailData["genres"], // 영화 장르
    releaseDate: detailData["release_date"], //개봉일
    runtime: detailData["runtime"], //상영 시간
    CompanyName: detailData["production_companies"].map((item) => item.name), //제작 회사
    //getCastArray() 메서드
    castName: castData.map((item) => item.name),
    castCharacter: castData.map((item) => item.character),
    castProfile: castData.map((item) => item.profile_path),
  };

  movieList(MovieObject);
}

function movieList(MovieObject) {
  const moviesContent = document.querySelector(".movies-detail");
  const moviesPoster = document.querySelector(".movies-cast-name-inner");

  //각각 영화 정보의 표현방식을 바꿈
  //slice(): 배열 자릿수 표현
  //join(): 배열을 문자열로 바꿈
  //replace(): 해당 조건에 만족할 경우 문자 교체 및 삭제
  const genres = MovieObject.genres.join("/"); //장르
  const releaseDate = MovieObject.releaseDate.replace(/-/g, "."); //개봉일
  const companyName = MovieObject.CompanyName.join("/"); //제작 회사
  const castName = MovieObject.castName.slice(0, 5); //배우 이름
  const castCharacter = MovieObject.castCharacter.slice(0, 5); //배역
  const castProfile = MovieObject.castProfile.slice(0, 5); //배우 프로필

  // 배우 프로필 사진 유효성 검사
  const defaultProfile = "../images/image-default.jpeg"; //images 폴더 안에 있는 기본 이미지 설정
  const NullProfile = "https://image.tmdb.org/t/p/original/null"; //api에 없는 이미지 설정
  const tagProfile = castProfile
    .map((item, index) => {
      if (item !== NullProfile) {
        return `
        <li class="cast-list">
            <div class="movies-cast-list">
              <img src="${item}" alt="${MovieObject.title}">
              <div class="movies-cast-title">
                <h3>${castName[index]}</h3>
                <p>${castCharacter[index]}</p>
              </div>
            </div>
        </li>
        `;
      } else {
        return `<img src="${defaultProfile}" alt="${MovieObject.title}" />`;
      }
    })
    .join(""); //프로필 마다(,)쉼표가 표시되어 삭제

  // const temp = `
  //   <h2>${MovieObject.title}</h2>
  //   <p>${MovieObject.overview}</p>
  //   <p>${MovieObject.vote}</p>
  //   <p>${MovieObject.runtime}분</p>
  //   <p>${releaseDate}</p>
  //   <p>${genres}</p>
  //   <p>배우</p>
  //   <p>${castName}</p>
  //   <p>배역</p>
  //   <p>${castCharacter}</p>
  //   <p>제작 회사</p>
  //   <p>${companyName}</p>
  // `;
//   const temp = `
//   <div class="movies-detail-inner">
//   <a href="../index.html"><i class="fa-solid fa-arrow-left"></i></a>
//   <img src="${MovieObject.backdropImg}" alt="${MovieObject.title}" />
//   <div class="movies-detail-list">
//     <div class="poster-img">
//       <img src="${MovieObject.posterImg}" alt="${MovieObject.title}" />
//     </div>
//     <div class="movies-content">
//       <ul>
//         <li>
//         <h2>${MovieObject.title}</h2>
//         <p>${MovieObject.vote}</p>
//         <p>${releaseDate}</p>
//         <p>${MovieObject.runtime}분</p>
//         <p class="movies-contents">${MovieObject.overview}</p>
//         </li>
//       </ul>
//     </div>
// </div>
// </div>
// `;

  // const poster = `<img src="${MovieObject.posterImg}" alt="${MovieObject.title}" />
  // <img src="${MovieObject.backdropImg}" alt="${MovieObject.title}" />`;

  // html 태그 적용
  moviesContent.innerHTML = temp;
  moviesPoster.innerHTML = tagProfile;
  // moviesContent.innerHTML += tagProfile;
}
