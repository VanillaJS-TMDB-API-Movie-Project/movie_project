// 파일 이름 변경: sup.js => moviewReviewPage.js
// import 메서드 선언:  getDetailedMovie(), getCastArray()
// import 경로: ./api/api.js으로 변경

import { getDetailedMovie, getCastArray } from "./api/api.js";

const key = 300; //임시 영화 id 값

const detailData = await getDetailedMovie(key); // getDetailedMovie() 함수 실행
const castData = await getCastArray(key); // getCastArray() 함수 실행
const img_url = "https://image.tmdb.org/t/p/w500/"; //이미지 크기 조정

movieInformatrion(detailData, castData);

function movieInformatrion(detailData, castData) {
  // let title = detailData["title"]; // 영화 제목
  // let overview = detailData["overview"]; // 영화 내용
  // let vote = detailData["vote_average"].toFixed(2); //영화 평점
  // let image = detailData["poster_path"]; // 영화 사진
  // let genres = detailData["genres"]; // 영화 장르
  // let oftenMovie = detailData["release_date"]; //개봉일
  // let castArr = []; // 출연진
  // let productionCompanies = detailData["production_companies"]; //영화 제작사
  // let PcArr = [];

  // console.log(movieCompanny);
  // image();
  // castData.map((item, index) => {
  //   if (index < 5) {
  //     castArr[index] = item.name;
  //   }
  //   return castArr;
  // });

  let MovieObject = {
    title: detailData["title"], // 영화 제목
    overview: detailData["overview"], // 영화 내용
    vote: detailData["vote_average"].toFixed(2), //영화 평점
    image: detailData["poster_path"],
    genres: detailData["genres"], // 영화 장르
    oftenMovie: detailData["release_date"], //개봉일
    cast: function test() {
      return castData.map((item) => {
        return item.name;
      });
    },
    PcArr: function ttt() {
      let productionCompanies = detailData["production_companies"]; //영화 제작사
      return productionCompanies.map((item, index) => {
        return item.name;
      });
    }
  };

  console.log(MovieObject);

  // check(title, overview, vote, image, genres, oftenMovie, castArr, PcArr);
  // movieList(title, overview, vote, image, genres, oftenMovie, castArr, PcArr);
  movieList(MovieObject);

  function movieList(MovieObject) {
    let casStr = MovieObject.genres.toString().replace(/,/g, "/");
    let oftenStr = MovieObject.oftenMovie.replace(/-/g, ".");
    let arr = MovieObject.cast().slice(0, 5).toString().replace(/,/g, "/");

    //html 태그 생성 및 값 대입
    let temp = `
<h2>${MovieObject.title}</h2>
<p>${MovieObject.overview}</p>
<p>${MovieObject.vote}</p>
<p>${oftenStr}</p>
<p>${casStr}</p>
<p>${arr}</p>

`;

    document.querySelector(".movies-content").innerHTML = temp;
    document.querySelector(".poster-img").innerHTML = `<img src="${img_url + image}" alt="${title}" />`;
  }
}

// function movieList(title, overview, vote, image, genres, oftenMovie, castArr, PcArr) {
//   let casStr = genres.toString().replace(/,/g, "/");
//   let oftenStr = oftenMovie.replace(/-/g, ".");

//   //html 태그 생성 및 값 대입
//   let temp = `
// <h2>${title}</h2>
// <p>${overview}</p>
// <p>${vote}</p>
// <p>${oftenStr}</p>
// <p>${casStr}</p>
// <p>${castArr}</p>
// <p>${PcArr}</p>
// `;

//   document.querySelector(".movies-content").innerHTML = temp;
//   document.querySelector(".poster-img").innerHTML = `<img src="${img_url + image}" alt="${title}" />`;
// }

//유효성 검사
// function check(title, overview, vote, image, genres, oftenMovie, castArr, PcArr) {
//   let object = {
//     title,
//     overview,
//     vote,
//     image,
//     genres,
//     oftenMovie,
//     castArr,
//     PcArr
//   };

//   object.array.forEach(item, (index) => {
//     if (item[index] === null) {
//       if (item === "title") {
//         item = "테스중입니다.";
//       }
//     }
//   });
// }
