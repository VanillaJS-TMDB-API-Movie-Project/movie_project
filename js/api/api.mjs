import { config } from './apikey.mjs';
import { isoCode } from './isoCode.mjs';
const TMDB_API = config.APIKey;

// 레이팅 순위로 정렬된 영화 목록(내림차순) - https://developer.themoviedb.org/reference/movie-top-rated-list
async function getTopRatedMovieArray(page) {
    let result;
    let movie = {};
    let movieArray = [];
    // const languageArray = await getLanguageArray();
    const genreArray = await getGenreArray();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${page}`, options)
        .then(response => response.json())
        .then(response => response['results'])
        .catch(err => console.error(err));

    for (let i = 0; i < 20; i++) {
        movie = { ...result[i] };
        movie['backdrop_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['backdrop_path'];
        movie['poster_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['poster_path'];

        for (let i = 0; i < movie['genre_ids'].length; i++) {
            for (let j = 0; j < genreArray.length; j++) {
                if (movie['genre_ids'][i] === genreArray[j]['id']) {
                    movie['genre_ids'][i] = genreArray[j]['name'];
                }
            }
        }

        // for (let i = 0; i < languageArray.length; i++) {
        //     if (movie['originalLanguage'] === languageArray[i]['iso_639_1']) {
        //         movie['originalLanguage'] = languageArray[i]['english_name'];
        //     }
        // }


        movie['original_language'] = isoCode[movie['original_language']];

        movieArray.push(movie);
    }
    console.log(movieArray);
    return movieArray;
}

// 장르 id - 한국어 모음 - https://developer.themoviedb.org/reference/genre-movie-list
async function getGenreArray() {
    let result;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=ko', options)
        .then(response => response.json())
        .then(response => response['genres'])
        .catch(err => console.error(err));

    return result;

}

// 나라별 나라이름 iso_3166_1 code 모음(iso_3166_1, 영어, 한국어) - https://developer.themoviedb.org/reference/configuration-countries
async function getCountryArray() {
    let result;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch('https://api.themoviedb.org/3/configuration/countries?language=ko', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

    return result;
}

// 나라별 언어이름 iso_639_1 code 모음(iso_639_1 - 영어 - 현지어) - https://developer.themoviedb.org/reference/configuration-languages
// async function getLanguageArray() {
//     let result;

//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: config.APIKey
//         }
//     };

//     result = await fetch('https://api.themoviedb.org/3/configuration/languages', options)
//         .then(response => response.json())
//         .then(response => response)
//         .catch(err => console.error(err));

//     console.log(result);
//     return result;
// }

// 해당 영화 상세정보 - https://developer.themoviedb.org/reference/movie-details
async function getDetailedMovie(id) {
    let result;
    let movie = {};
    // const languageArray = await getLanguageArray();
    const genreArray = await getGenreArray();
    const countryArray = await getCountryArray();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
    {
        movie = { ...result };
        movie['backdrop_path'] = 'https://image.tmdb.org/t/p/original/' + result['backdrop_path'];
        movie['poster_path'] = 'https://image.tmdb.org/t/p/original/' + result['poster_path'];
        if (movie['belongs_to_collection']) {
            movie['belongs_to_collection']['poster_path'] = 'https://image.tmdb.org/t/p/original/' + movie['belongs_to_collection']['poster_path'];
            movie['belongs_to_collection']['backdrop_path'] = 'https://image.tmdb.org/t/p/original/' + movie['belongs_to_collection']['backdrop_path'];
        }


        for (let i = 0; i < movie['genres'].length; i++) {
            for (let j = 0; j < genreArray.length; j++) {
                if (movie['genres'][i]['id'] === genreArray[j]['id']) {
                    movie['genres'][i] = genreArray[j]['name'];
                }
            }
        }

        movie['original_language'] = isoCode[movie['original_language']];

        for (let i = 0; i < movie['production_companies'].length; i++) {
            movie['production_companies'][i]['logo_path'] = 'https://image.tmdb.org/t/p/original/' + movie['production_companies'][i]['logo_path'];
            for (let j = 0; j < countryArray.length; j++) {
                if (movie['production_companies'][i]['origin_country'] === countryArray[j]['iso_3166_1']) {
                    movie['production_companies'][i]['origin_country'] = countryArray[j]['native_name'];
                }
            }
        }

        for (let i = 0; i < movie['production_countries'].length; i++) {
            for (let j = 0; j < countryArray.length; j++) {
                if (movie['production_countries'][i]['iso_3166_1'] === countryArray[j]['iso_3166_1']) {
                    movie['production_countries'][i] = countryArray[j]['native_name'];
                }
            }
        }
        for (let i = 0; i < movie['spoken_languages'].length; i++) {
            movie['spoken_languages'][i] = isoCode[movie['spoken_languages'][i]['iso_639_1']];
        }

        console.log(movie);

        return movie;


    }
}

// 해당 영화 캐스트 모음 - https://developer.themoviedb.org/reference/movie-details
async function getCastArray(id) {
    // https://developer.themoviedb.org/reference/movie-credits
    let result;
    let cast = {};
    let castArray = [];

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=ko`, options)
        .then(response => response.json())
        .then(response => response['cast'])
        .catch(err => console.error(err));

    for (let i = 0; i < result.length; i++) {
        cast = { ...result[i] };
        cast['profile_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['profile_path'];
        if (cast['gender'] == 1) {
            cast['gender'] = '여성';
        }

        else if (cast['gender'] == 2) {
            cast['gender'] = '남성';
        }
        castArray.push(cast);
    }

    console.log(castArray);

    return castArray;
}

// 해당 영화 크루 모음 - https://developer.themoviedb.org/reference/movie-details
async function getCrewArray(id) {
    // https://developer.themoviedb.org/reference/movie-credits
    let result;
    let crew = {};
    let crewArray = [];

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=ko`, options)
        .then(response => response.json())
        .then(response => response['crew'])
        .catch(err => console.error(err));

    for (let i = 0; i < result.length; i++) {
        crew = { ...result[i] };
        crew['profile_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['profile_path'];
        if (crew['gender'] == 1) {
            crew['gender'] = '여성';
        }

        else if (crew['gender'] == 2) {
            crew['gender'] = '남성';
        }
        crewArray.push(crew);
    }

    console.log(crewArray);

    return crewArray;
}

// 해당 영화 홍보 SNS, 미디어 데이터베이스 id(IMDb,	Wikidata, Facebook, Instagram, Twitter) - https://developer.themoviedb.org/reference/movie-external-ids
async function getSupportedArray(id) {
    let result;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));

    return result;
}

// 해당 영화 배경 이미지 모음(포스터도 있음, 포스터 필요하면 추가 가능, 다른 나라 언어는 양이 적어서 영어로 설정) - https://developer.themoviedb.org/reference/movie-images
async function getBackDropArray(id) {
    let result;
    let backDrop = {};
    let backDropArray = [];
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en`, options)
        .then(response => response.json())
        .then(response => response['backdrops'])
        .catch(err => console.error(err));

    for (let i = 0; i < result.length; i++) {
        backDrop = { ...result[i] };
        backDrop['iso_639_1'] = '영어';
        backDrop['file_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['file_path'];

        console.log(backDrop);
        backDropArray.push(backDrop);
    }
    return backDropArray;
}

// 해당 영화 관련 키워드 모음(해쉬 태그랑 비슷한 듯) - https://developer.themoviedb.org/reference/movie-keywords
async function getKeywordArray(id) {
    let result;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/238/keywords`, options)
        .then(response => response.json())
        .then(response => response['keywords'])
        .catch(err => console.error(err));

    console.log(result);
    return result;
}

// 해당 영화 관련 추천 영화 모음 - https://developer.themoviedb.org/reference/movie-recommendations
async function getRecommendationArray(id, page) {
    let result;
    let recommendation = {};
    let recommendationArray = [];
    // const languageArray = await getLanguageArray();
    const genreArray = await getGenreArray();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?language=ko&page=${page}`, options)
        .then(response => response.json())
        .then(response => response['results'])
        .catch(err => console.error(err));

    for (let i = 0; i < result.length; i++) {
        recommendation = { ...result[i] };
        recommendation['backdrop_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['backdrop_path'];
        recommendation['poster_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['poster_path'];

        for (let i = 0; i < recommendation['genre_ids'].length; i++) {
            for (let j = 0; j < genreArray.length; j++) {
                if (recommendation['genre_ids'][i] === genreArray[j]['id']) {
                    recommendation['genre_ids'][i] = genreArray[j]['name'];
                }
            }
        }

        // for (let i = 0; i < languageArray.length; i++) {
        //     if (movie['originalLanguage'] === languageArray[i]['iso_639_1']) {
        //         movie['originalLanguage'] = languageArray[i]['english_name'];
        //     }
        // }


        recommendation['original_language'] = isoCode[recommendation['original_language']];

        recommendationArray.push(recommendation);
    }

    return recommendationArray;
}

// 해당 영화 관련 비슷한 영화 모음 - https://developer.themoviedb.org/reference/movie-similar
async function getSimilarArray(id, page) {
    let result;
    let similar = {};
    let similarArray = [];
    // const languageArray = await getLanguageArray();
    const genreArray = await getGenreArray();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?language=ko&page=${page}`, options)
        .then(response => response.json())
        .then(response => response['results'])
        .catch(err => console.error(err));

    for (let i = 0; i < result.length; i++) {
        similar = { ...result[i] };
        similar['backdrop_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['backdrop_path'];
        similar['poster_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['poster_path'];

        for (let i = 0; i < similar['genre_ids'].length; i++) {
            for (let j = 0; j < genreArray.length; j++) {
                if (similar['genre_ids'][i] === genreArray[j]['id']) {
                    similar['genre_ids'][i] = genreArray[j]['name'];
                }
            }
        }

        // for (let i = 0; i < languageArray.length; i++) {
        //     if (movie['originalLanguage'] === languageArray[i]['iso_639_1']) {
        //         movie['originalLanguage'] = languageArray[i]['english_name'];
        //     }
        // }


        similar['original_language'] = isoCode[similar['original_language']];

        similarArray.push(similar);
    }
    console.log(similarArray);
    return similarArray;
}

// 해당 영화 관련 영상(트레일러, 클립 등) 모음 (한국은 양이 적어서 영어로 설정) - https://developer.themoviedb.org/reference/movie-videos
async function getVideoArray(id) {
    let result;
    let video = {};
    let videoArray = [];

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en`, options)
        .then(response => response.json())
        .then(response => response['results'])
        .catch(err => console.error(err));

    for (let i = 0; i < result.length; i++) {
        video = { ...result[i] };
        video['iso_3166_1'] = '미국';
        video['iso_639_1'] = '영어';
        videoArray.push(video);
    }

    return videoArray;
}

// 영화 검색 (키워드로 검색 제목이나 요약 등 해당하는 키워드가 포함되면 가져옴) 모음 (한국어 기반, 언어는 변경 가능) - https://developer.themoviedb.org/reference/search-movie
async function getSearchArray(keyword, page) {
    let result;
    let search = {};
    let searchArray = [];
    // const languageArray = await getLanguageArray();
    const genreArray = await getGenreArray();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    };

    result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&language=ko&page=${page}`, options)
        .then(response => response.json())
        .then(response => response['results'])
        .catch(err => console.error(err));

    for (let i = 0; i < result.length; i++) {
        search = { ...result[i] };
        search['backdrop_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['backdrop_path'];
        search['poster_path'] = 'https://image.tmdb.org/t/p/original/' + result[i]['poster_path'];

        for (let i = 0; i < search['genre_ids'].length; i++) {
            for (let j = 0; j < genreArray.length; j++) {
                if (search['genre_ids'][i] === genreArray[j]['id']) {
                    search['genre_ids'][i] = genreArray[j]['name'];
                }
            }
        }

        // for (let i = 0; i < languageArray.length; i++) {
        //     if (movie['originalLanguage'] === languageArray[i]['iso_639_1']) {
        //         movie['originalLanguage'] = languageArray[i]['english_name'];
        //     }
        // }


        search['original_language'] = isoCode[search['original_language']];

        searchArray.push(search);
    }

    return searchArray;
}

async function test() {
    //console.log(await getGenreArray());
    await getSearchArray('기생충', 1);
}
test();