import * as movieApi from './api/api.js';

let movieArray = await movieApi.getTopRatedMovieArray(1);

async function makeButtons() {
    let genreArray = await movieApi.getGenreArray();
    let $searchForm = document.querySelector("section");
    let $button;
    let orders = ['asc', 'desc'];
    let ordersKor = ['오름차순', '내림차순'];
    let sorts = ['releaseDate', 'popularity'];
    let sortsKor = ['출시일', '인기도'];

    for (let i = 0; i < genreArray.length; i++) {
        let $buttonTag = document.createElement("button");

        $buttonTag.className = `genre-btn`;
        $buttonTag.id = 'genre-btn' + i;
        $buttonTag.textContent = genreArray[i]['name'];
        $searchForm.appendChild($buttonTag);
    }

    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < sorts.length; j++) {
            $button = document.createElement("button");
            $button.textContent = sortsKor[j] + "_" + ordersKor[i];
            $button.className = 'filter-btn';
            $button.id = sorts[j] + "_" + orders[i] + '-btn';
            $searchForm.appendChild($button);
        }
    }

    document.querySelectorAll('.genre-btn').forEach(btn => {
        btn.addEventListener(
            "click",
            function () {

                clickGenre(btn.textContent);
            },
            false,
        );
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener(
            "click",
            function () {
                clickOrder(btn.id);
            }
        )
    })

    document.querySelector('.movie-search-inner > button').
        addEventListener("click", (event) => {
            event.preventDefault();
            clickSearch();
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

    console.log($reviewSrc);

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

async function clickGenre(genre) {
    console.log(genre);
    movieArray = await movieApi.getTopRatedMovieArray(1);
    movieArray = movieArray.filter(movie => {
        let matchFlag = false;

        movie['genre_ids'].forEach(item => {
            if (item === genre) {
                console.log(item);
                matchFlag = true;
            }
        });
        return matchFlag;
    });
    console.log(movieArray);
    setMovies();
}

function clickOrder(id) {
    let tempArray = id.split('_');
    let sort = tempArray[0].replace('releaseDate', 'release_date');
    let order = tempArray[1].slice(0, tempArray[1].indexOf('-'));

    if (sort === 'popularity' && order === 'asc') {
        console.log(sort, '오름차순');
        movieArray.sort((a, b) => {
            if (a[sort] > b[sort])
                return 1;
            else if (a[sort] < b[sort])
                return -1
            else
                return 0;
        });
        for (let movie of movieArray)
            console.log(movie['popularity']);
    }
    else if (sort === 'popularity' && order === 'desc') {
        console.log(sort, '내림차순');
        movieArray.sort((a, b) => {
            if (a[sort] > b[sort])
                return -1;
            else if (a[sort] < b[sort])
                return 1
            else
                return 0;
        });
        for (let movie of movieArray)
            console.log(movie['popularity']);
    }
    else if (sort == 'release_date' && order === 'asc') {
        console.log(sort, '오름차순');
        movieArray.sort((a, b) => new Date(a[sort]).getTime() - new Date(b[sort]).getTime());

        for (let movie of movieArray)
            console.log(movie['release_date']);
    }
    else if (sort == 'release_date' && order === 'desc') {
        console.log(sort, '내림차순');
        movieArray.sort((a, b) => new Date(b[sort]).getTime() - new Date(a[sort]).getTime());

        for (let movie of movieArray)
            console.log(movie['release_date']);
    }

    setMovies();
}

async function clickSearch() {
    let $searchText = document.querySelector('.movie-search > input');
    movieArray = await movieApi.getSearchArray($searchText.value, 1);
    console.log(movieArray);
    setMovies();
}

function init() {
    makeButtons();
    makeCards();
}

document.addEventListener("DOMContentLoaded", init());