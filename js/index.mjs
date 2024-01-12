import * as movieApi from './api/api.mjs';

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
    //poster_path 들어가는 이미지 영하 검색했을 때 이미지가 없을 수도 있음, alt 이미지 확보할 것
    //편의 상버튼 아래로 이동시킴, 디자인 수정해야 함

    for (let i = 0; i < 20; i++) {
        let url = new URL(window.location.href);
        let urlParameter = new URLSearchParams(url.search);
        urlParameter.set('id', movieArray[i]['id']);

        // let url = new URL(window.location.href);
        // let urlParameter = new URLSearchParams(url.search);
        // console.log(urlParameter.get('id'));
        // 위 코드 sub에 붙여넣기

        let tag = `
                <li class="movie-list" data-id="${i}">
                    <a href="html/movie_review.html?${urlParameter.toString()}">
                        <div class="side">
                            <img src="${movieArray[i]['poster_path']}" alt="">
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

function setMovies() { // 제대로 작동 안함, 이유를 모르겠음, 안돼면 튜터님께 질문해야 함
    let $cards = document.querySelectorAll('.movie-list');
    let $posterImages = document.querySelectorAll('li > a > div > img');
    let $titles = document.querySelectorAll('.movies-title'); //태그 어떡해 써야할지 모르겠음
    console.log($titles); //고쳐서 콘솔로 찍어봤는데 뭔가 오류떠서 확인을 할수가 없어요.... - park
    for (let i = 0; i < movieArray.length; i++) {
        $posterImages[i].setAttribute('src', movieArray[i]['poster_path']);
        $titles[i].value = movieArray[i]['title']; //주석처리한거 다시 빼서 확인해봤습니다 - Park
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

async function test() {
    let $cards = document.querySelectorAll('.movie-list');
    let $posterImages = document.querySelectorAll('li > a > div > img');
    let $titles = document.querySelectorAll('#movieTitle');

    setMovies();
}

document.addEventListener("DOMContentLoaded", init());
test();