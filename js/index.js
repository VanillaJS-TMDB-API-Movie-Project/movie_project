import * as movieApi from './api/api.js';

let movieArray = await movieApi.getTopRatedMovieArray(1); // 영화 정보를 저장하는 배열
let isSearchResult = false; // 검색 결과를 보여주고 있는지 여부

//필터 버튼들 만들고 이벤트 등록
async function makeButtons() {

    // document.querySelectorAll('.movies-btn-list > li > a').forEach(filter => {
    //     filter.addEventListener(
    //         "click", (event) => {
    //             event.preventDefault();
    //             clickFilter(filter.innerHTML);
    //         }
    //     )
    // });

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

//사이트를 열었을 때 출력할 카드들 생성
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

//출력한 카드들에 영화의 정보들을 적용
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

// function clickFilter(filter) {
//     console.log(filter);
    

//     tabMenu.addEventListener('click', function (e) {
//         let targetItem = e.target.closest('li > a');

//         if (targetItem) {
//             e.preventDefault();

//             tabMenu.querySelectorAll('li').forEach((item) => {
//                 item.classList.remove('active');
//             });

//             targetItem.closest('li').classList.add('active');

//             switch (filter) {
//                 case '전체보기':
//                     showAll();
//                     break;
//                 case '인기순':
//                     showPopularityOrder();
//                     break;
//                 case '출시일순':
//                     showReleaseDateOrder();
//                     break;
//                 case '드라마':
//                     showDrama();
//                     break;
//                 case '액션':
//                     showAction();
//                     break;
//             }
//         }
//     });
// }

//필터에 걸러지기 전의 모든 영화정보들을 출력
async function showAll() {
    if (isSearchResult) {
        clickSearch();
    }
    else {
        movieArray = await movieApi.getTopRatedMovieArray(1);
        setMovies();
    }
}

//인기도 순으로 정렬해서 영화 정보들을
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
}

//출시일 순으로 정렬해서 영화 정보들을
function showReleaseDateOrder() {
    movieArray = movieArray.sort((a, b) => new Date(b['release_date']).getTime() - new Date(a['release_date']).getTime());
    setMovies();
}

//드라마 장르의 영화들만 출력
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
    setMovies();
}

//액션 장르의 영화들만 출력
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
    setMovies();
}

//검색 버튼을 클릭했을 때, 검색 내용을 출력
async function clickSearch() {
    let $searchText = document.querySelector('.movie-search > input');

    if ($searchText.value === '') {
        alert('검색할 내용을 입력하세요.');
        return;
    }

    isSearchResult = true;
    movieArray = await movieApi.getSearchArray($searchText.value, 1);
    setMovies();
}

//사이트를 열었을 때 초기화하는 과정
function init() {
    makeButtons();
    makeCards();

    // 클릭 이벤트 리스너 등록
    let tabMenu = document.querySelector('.movies-btn-list');
    tabMenu.addEventListener('click', function (e) {
        let targetItem = e.target.closest('li > a');

        if (targetItem) {
            e.preventDefault();

            tabMenu.querySelectorAll('li').forEach((item) => {
                item.classList.remove('active');
            });

            targetItem.closest('li').classList.add('active');

            switch (targetItem.innerHTML) {
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
    });
}

//사이트를 로딩하기 전에 초기화 과정을 끝냄
document.addEventListener("DOMContentLoaded", init());