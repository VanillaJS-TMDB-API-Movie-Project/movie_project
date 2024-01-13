import { getDetailedMovie, getCastArray } from "./api/api.js";

const key = 300; //임시 영화 id 값

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
                return item.name;
            });
        },
        Company: function () {
            let productionCompanies = detailData["production_companies"]; //영화 제작사
            return productionCompanies.map((item) => {
                return item.name;
            });
        }
    };

    movieList(MovieObject);
}

function movieList(MovieObject) {
    const moviesContent = document.querySelector(".movies-content");
    const moviesPoster = document.querySelector(".poster-img");

    let genres = MovieObject.genres.toString().replace(/,/g, "/"); //장르
    let cast = MovieObject.cast().slice(0, 5).toString().replace(/,/g, "/"); //배우
    let releaseDate = MovieObject.releaseDate.replace(/-/g, "."); //개봉일
    //html 태그 생성 및 값 대입
    let temp = `
<h2>${MovieObject.title}</h2>
<p>${MovieObject.overview}</p>
<p>${MovieObject.vote}</p>
<p>${releaseDate}</p>
<p>${genres}</p>
<p>${cast}</p>

`;

    //html 태그 생성 및 값 대입
    let poster = `<img src=" ${MovieObject.posterImg}" alt="${MovieObject.title}" />`;

    //html 태그 적용
    moviesContent.innerHTML = temp;
    moviesPoster.innerHTML = poster;
}