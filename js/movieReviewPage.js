import { getDetailedMovie, getCastArray } from "./api/api.js";

let url = new URL(window.location.href);
let urlParameter = new URLSearchParams(url.search);
const id = urlParameter.get("id"); //영화 id 값

const detailData = await getDetailedMovie(id); // getDetailedMovie() 함수 실행
const castData = await getCastArray(id); // getCastcastay() 함수 실행

document.addEventListener(
  "DOMContentLoaded",
  movieInformatrion(detailData, castData)
);

function movieInformatrion(detailData, castData) {
  let MovieObject = {
    title: detailData["title"], // 영화 제목
    overview: detailData["overview"], // 영화 내용
    vote: detailData["vote_average"].toFixed(2), //영화 평점
    posterImg: detailData["poster_path"], //영화 포트터 사진
    backdropImg: detailData["backdrop_path"], //영화 배경 사진
    genres: detailData["genres"], // 영화 장르
    releaseDate: detailData["release_date"], //개봉일
    runtime: detailData["runtime"], //상영 시간
    cast: function () {
      //영화 배우 정보
      return castData.map((item) => {
        return {
          name: item.original_name,
          profile: item.profile_path,
          character: item.character,
        };
      });
    },
    CompanyName: function () {
      let productionCompanies = detailData["production_companies"]; //영화 제작사
      return productionCompanies.map((item) => {
        return item.name;
      });
    },
  };
  movieList(MovieObject);
}

function movieList(MovieObject) {
  const moviesContent = document.querySelector(".movies-content");
  const moviesPoster = document.querySelector(".poster-img");

  const castData = MovieObject.cast().slice(0, 5);

  const castName = castData.map((item) => item.name).join("/"); //배우 이름
  const castCharacter = castData //배역 이름
    .map((item) => item.character.replace(/\d/g, ""))
    .join("");
  const castProfile = castData.map((item) => item.profile); //배우 프로필
  const genres = MovieObject.genres.join("/"); //장르
  const releaseDate = MovieObject.releaseDate.replace(/-/g, "."); //개봉일
  const companyName = MovieObject.CompanyName().join("/"); //제작 회사

  // 배우 프로필 처리
  const defaultProfile = "../images/image-default.jpeg"; //images 폴더 안에 있는 기본 이미지
  const NullProfile = "https://image.tmdb.org/t/p/original/null"; //api에 이미지 없는 경로
  const tagProfile = castProfile
    .map((item) => {
      if (item !== NullProfile) {
        return `<img src="${item}" alt="${MovieObject.title}"/>`;
      } else {
        return `<img src="${defaultProfile}" alt="${MovieObject.title}" />`;
      }
    })
    .join("");

  const temp = `
    <h2>${MovieObject.title}</h2>
    <p>${MovieObject.overview}</p>
    <p>${MovieObject.vote}</p>
    <p>${MovieObject.runtime}분</p>
    <p>${releaseDate}</p>
    <p>${genres}</p>
    <p>배우</p>
    <p>${castName}</p>
    <p>배역</p>
    <p>${castCharacter}</p>
    <p>제작 회사</p>
    <p>${companyName}</p>
  `;

  const poster = `<img src="${MovieObject.posterImg}" alt="${MovieObject.title}" />
  <img src="${MovieObject.backdropImg}" alt="${MovieObject.title}" />`;

  // html 태그 적용
  moviesContent.innerHTML = temp;
  moviesPoster.innerHTML = poster;
  moviesContent.innerHTML += tagProfile;
}
