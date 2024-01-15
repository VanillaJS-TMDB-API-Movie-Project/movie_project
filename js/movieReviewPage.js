import { getDetailedMovie, getCastArray } from "./api/api.js";

let url = new URL(window.location.href);
let urlParameter = new URLSearchParams(url.search);
const key = urlParameter.get("id"); //영화 id 값

const detailData = await getDetailedMovie(key); // getDetailedMovie() 함수 실행
const castData = await getCastArray(key); // getCastcastay() 함수 실행

movieInformatrion(detailData, castData);

function movieInformatrion(detailData, castData) {
  let MovieObject = {
    title: detailData["title"], // 영화 제목
    overview: detailData["overview"], // 영화 내용
    vote: detailData["vote_average"].toFixed(2), //영화 평점
    posterImg: detailData["poster_path"], //영화 사진
    genres: detailData["genres"], // 영화 장르
    releaseDate: detailData["release_date"], //개봉일
    cast: function () {
      //영화 배우
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
    CompanyLogo: function () {
      let productionCompanies = detailData["production_companies"]; //영화 제작사
      let path = "https://image.tmdb.org/t/p/original/null";
      return productionCompanies.map((item) => {
        if (item.logo_path === path) {
          return "images/test.jpg";
        } else {
          return item.logo_path;
        }
      });
    },
  };

  movieList(MovieObject);
}

function movieList(MovieObject) {
  const moviesContent = document.querySelector(".movies-content");
  const moviesPoster = document.querySelector(".poster-img");
  let castName = []; //배우 이름
  let castProfile = []; // 배우 프로필 사진
  let castCharacter = []; // 역할

  MovieObject.cast().map((item, index) => {
    castName[index] = item.name;
    castCharacter[index] = item.character;
    castProfile[index] = item.profile;

    return castName, castCharacter, castProfile;
  });

  let name = castName.slice(0, 5).toString().replace(/,/g, "/"); //배우
  let character = castCharacter.slice(0, 5).toString().replace(/\d/g, ""); // 배역
  let genres = MovieObject.genres.toString().replace(/,/g, "/"); //장르
  let releaseDate = MovieObject.releaseDate.replace(/-/g, "."); //개봉일
  let CompanyName = MovieObject.CompanyName().toString().replace(/,/g, "/"); //제작 회사
  let CompanyLogo = MovieObject.CompanyLogo();

  CompanyLogo;

  //html 태그 생성 및 값 대입
  let temp = `
<h2>${MovieObject.title}</h2>
<p>${MovieObject.overview}</p>
<p>${MovieObject.vote}</p>
<p>${releaseDate}</p>
<p>${genres}</p>
<p>${name}</p>
<p>${character}</p
<p>${CompanyName}</p>

`;

  //html 태그 생성 및 값 대입
  let poster = `
  <img src=" ${MovieObject.posterImg}" alt="${MovieObject.title}" />
  <img src="${CompanyLogo}" alt="${MovieObject.title}" />
  `;

  {
  }
  //html 태그 적용
  moviesContent.innerHTML = temp;
  moviesPoster.innerHTML = poster;
}
