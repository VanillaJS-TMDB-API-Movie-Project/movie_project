import * as movieApi from './api/api.js';

let movieArray = await movieApi.getTopRatedMovieArray(1);
let isSearchResult = false;

async function makeButtons() {

    document.querySelectorAll('.movies-btn-list > li > a').forEach(filter => {
        filter.addEventListener(
            "click", (event) => {
                event.preventDefault();
                clickFilter(filter.innerHTML);
            }
        )
    });

    document.querySelector('.movie-search-inner > button').
        addEventListener("click", (event) => {
            event.preventDefault();
            clickSearch();
        });

    document.querySelector('.logo > a').
        addEventListener("click", (event) => {
            event.preventDefault();
            isSearchResult = false;
            document.querySelector('.movie-search > input').value = '';
            showAll();
        });

}

function makeCards() {
    let $cardList = document.querySelector('.card-list');
    while ($cardList.firstChild) {
        $cardList.firstChild.remove()
    }

    for (let i = 0; i < 20; i++) {
        let url = new URL(window.location.href);
        let urlParameter = new URLSearchParams(url.search);
        urlParameter.set('id', movieArray[i]['id']);

        let tag = `
                <li class="movie-list" data-id="${i}">
                    <a href="html/movie_review.html?${urlParameter.toString()}">
                        <div class="side">
                            <img src="${movieArray[i]['poster_path']}">
                        </div>
                        <div class="side back">
                            <p class="movies-title">${movieArray[i]['title']}</p>
                        <p class="review"> 자세히보기 <i class="fa-solid fa-angle-right"></i></p>
                        </div>
                    </a>
                </li> `;
        $cardList.insertAdjacentHTML('beforeend', tag);
    }
}

function setMovies() {
    movieArray = movieArray.filter(movie => {
        if (movie['poster_path'].indexOf('null') !== -1) {
            return false;
        }
        else if (movie['backdrop_path'].indexOf('null') !== -1) {
            return false;
        }
        return true;
    });

    let $cards = document.querySelectorAll('.movie-list');
    let $posterImages = document.querySelectorAll('li > a > div > img');
    let $reviewSrc = document.querySelectorAll('.movie-list > a');
    let $titles = document.querySelectorAll('.movies-title');
    let $searchResult = document.querySelector('.list-none');

    if (movieArray.length !== 0) {
        $searchResult.style.display = 'none';
    }
    else {
        $searchResult.style.display = 'block';
    }

    for (let i = 0; i < movieArray.length; i++) {
        let url = new URL(window.location.href);
        let urlParameter = new URLSearchParams(url.search);
        urlParameter.set('id', movieArray[i]['id']);

        $posterImages[i].setAttribute('src', movieArray[i]['poster_path']);
        $posterImages[i].setAttribute('alt', 'images/testNoImage.jpg')
        $reviewSrc[i].href = `html/movie_review.html?${urlParameter.toString()}`
        $titles[i].innerHTML = movieArray[i]['title'];
        $cards[i].style.display = "block";
    }

    for (let i = movieArray.length; i < $cards.length; i++) {
        $cards[i].style.display = 'none';
    }
}

function clickFilter(filter) {
    console.log(filter);

    switch (filter) {
        case '전체보기':
            showAll();
            break;
        case '인기순':
            showPopularityOrder();
            break;
        case '출시일순':
            showReleaseDateOrder();
            break;
        case '드라마':
            showDrama();
            break;
        case '액션':
            showAction();
            break;
    }
}

async function showAll() {
    console.log('전체보기');
    if (isSearchResult) {
        clickSearch();
    }
    else {
        movieArray = await movieApi.getTopRatedMovieArray(1);
        setMovies();
    }
}

function showPopularityOrder() {
    movieArray = movieArray.sort((a, b) => {
        if (a['popularity'] > b['popularity'])
            return -1;
        else if (a['popularity'] < b['popularity'])
            return 1
        else
            return 0;
    });
    setMovies();
    //movieArray.forEach(movie => console.log(movie['title'], movie['popularity']));
}

function showReleaseDateOrder() {
    movieArray = movieArray.sort((a, b) => new Date(b['release_date']).getTime() - new Date(a['release_date']).getTime());
    setMovies();
    //movieArray.forEach(movie => console.log(movie['title'], movie['release_date']));
}

async function showDrama() {
    if (isSearchResult) {
        let $searchText = document.querySelector('.movie-search > input');

        movieArray = await movieApi.getSearchArray($searchText.value, 1);
    }
    else {
        movieArray = await movieApi.getTopRatedMovieArray(1);
    }

    movieArray = movieArray.filter(movie => {
        let matchFlag = false;

        movie['genre_ids'].forEach(item => {
            if (item === '드라마') {
                matchFlag = true;
            }
        });
        return matchFlag;
    });
    //movieArray.forEach(movie => console.log(movie['title'], movie['genre_ids']));
    setMovies();
}

async function showAction() {
    if (isSearchResult) {
        let $searchText = document.querySelector('.movie-search > input');

        movieArray = await movieApi.getSearchArray($searchText.value, 1);
    }
    else {
        movieArray = await movieApi.getTopRatedMovieArray(1);
    }

    movieArray = movieArray.filter(movie => {
        let matchFlag = false;

        movie['genre_ids'].forEach(item => {
            if (item === '액션') {
                matchFlag = true;
            }
        });
        return matchFlag;
    });
    //movieArray.forEach(movie => console.log(movie['title'], movie['genre_ids']));
    setMovies();
}

async function clickSearch() {
    let $searchText = document.querySelector('.movie-search > input');

    if ($searchText.value === '') {
        alert('검색할 내용을 입력하세요.');
        return;
    }

    isSearchResult = true;
    movieArray = await movieApi.getSearchArray($searchText.value, 1);
    console.log(movieArray);
    setMovies();
}

function init() {
    makeButtons();
    makeCards();
}

document.addEventListener("DOMContentLoaded", init());