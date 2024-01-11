// 파일 이름 변경: sup.js => moviewReviewPage.js
// import 메서드 선언:  getDetailedMovie(), getCastArray()
// import 경로: ./api/api.js으로 변경

import { getDetailedMovie, getCastArray } from "./api/api.js";

const key = 3; //임시 영화 id 값

const detailData = await getDetailedMovie(key); // getDetailedMovie() 함수 실행

let title = detailData["title"]; // 영화 제목
let overview = detailData["overview"]; // 영화 내용
let vote = detailData["vote_average"].toFixed(2); //영화 평점
let image = detailData["poster_path"]; // 영화 사진
let genres = detailData["genres"]; // 영화 장르

let temp = `
<h2>${title}</h2>
<p>${overview}</p>
<p>${vote}</p>
<p>${genres}</p>`;

document.querySelector(".movies-content").innerHTML = temp;
document.querySelector(".poster-img").innerHTML = `<img src="${image}" alt="${title}" />`;

// getCastArray() 함수 실행
getCastArray(key).then((data) => {
  let actor = document.querySelector("movies-content");

  data.forEach((i) => {
    let name = i["name"];
    console.log(name);

    document.getElementsByClassName("movies-content").innerHTML = `<p>${name}</p>`;
    // let tem = `
    // <p>${name}</p>`;
    // actor.insertAdjacentHTML("beforeend", tem);
  });

  //   document.getElementById("test_title").innerText = title;
  // document.getElementById("test_overview").innerText = overview;
  // document.getElementById("test_vote").innerText = vote;
  // document.getElementById("test_img").innerText = image;

  //   document.querySelector(".movies-content").innerHTML = temp;
});

// document.getElementsByClassName("movies-content")[0].innerHTML = temp;
