//iso_639_1 코드 모음
let isoCode = {
    'af': '아프리칸스어',
    'als': '알자스어',
    'ar': '아랍어',
    'az': '아제르바이잔어',
    'ba': '바슈키르어',
    'be': '벨라루스어(벨로루시어)',
    'bg': '불가리아어',
    'bh': '비하리어',
    'bi': '비슐라마(바누아트의 크리올)',
    'bm': '밤바라어',
    'bn': '벵골어',
    'br': '브레통어(브르타뉴)',
    'bs': '보스니아어',
    'ca': '카탈루냐어 (카탈란)',
    'ce': '체첸어',
    'ceb': '세부어 (세부아노)',
    'ch': '차모로어',
    'co': '코르시카어',
    'cr': '크리어',
    'cs': '체코어',
    'da': '덴마크어',
    'de': '독일어',
    'dv': '디베히어',
    'el': '현대 그리스어',
    'en': '영어',
    'eo': '에스페란토',
    'es': '에스파냐어(스페인어)',
    'et': '에스토니아어',
    'eu': '바스크어',
    'fa': '페르시아어(이란)',
    'ff': '풀라어',
    'fi': '핀란드어',
    'fj': '피지어',
    'fo': '페로어',
    'fr': '프랑스어',
    'fy': '프리지아어',
    'ga': '아일랜드어',
    'gd': '게일어 (스코틀랜드)',
    'gl': '갈리시아어(갈레고)',
    'gn': '과라니어',
    'grc': '고대 그리스어',
    'gu': '구자라티어',
    'gv': '맨어 (맹크스)',
    'ha': '하우사어',
    'he': '히브리어',
    'hi': '힌디어',
    'hr': '크로아티아어',
    'hsb': '상소르브어',
    'ht': '아이티크리올어',
    'hu': '헝가리어',
    'hy': '아르메니아어',
    'hz': '헤레로어',
    'ia': '인터링구아 (인공어)',
    'id': '인도네시아어',
    'ii': '이어 (쓰촨에서 사용)',
    'ik': '이누피아크어 (북부 이누이트어)',
    'io': '이도 (인공어)',
    'is': '아이슬란드어',
    'it': '이탈리아어',
    'iu': '이누이트어',
    'ja': '일본어',
    'jv': '자바어',
    'ka': '그루지야어',
    'kg': '콩고어',
    'ki': '키쿠유어',
    'kj': '콰냐마어',
    'kk': '카자흐어',
    'kl': '그린란드어',
    'km': '크메르어',
    'kn': '칸나다어',
    'ko': '한국어',
    'kr': '카누리어',
    'ks': '카슈미르어',
    'ku': '쿠르드어',
    'kv': '페름어 (코미어)',
    'ky': '키르기스어',
    'la': '라틴어',
    'lb': '룩셈부르크어',
    'lg': '간다어',
    'li': '림뷔르흐어',
    'ln': '링갈라어',
    'lo': '라오어',
    'lt': '리투아니아어',
    'lu': '루바-카탕가어',
    'lv': '라트비아어',
    'mg': '마다가스카르어',
    'mak': '마카사르어',
    'mi': '마오리어',
    'mk': '마케도니아어',
    'ml': '말라얄람어',
    'ms': '말레이어',
    'mn': '몽골어(몽고어)',
    'mo': '몰도바어',
    'mr': '마라타어',
    'mt': '몰타어',
    'na': '나우루어',
    'nd': '북느데벨 (?)',
    'nds': '저지 색슨어',
    'ne': '네팔어',
    'ng': '느동가 (?)',
    'nl': '네덜란드어',
    'no': '노르웨이어',
    'nr': '남느드벨 (?)',
    'nv': '나바호어',
    'oc': '프로방스어(남부 프랑스)',
    'oj': '오지브와어',
    'om': '갈라어 (오로모어)',
    'or': '오리야어',
    'os': '오세트어',
    'pa': '펀자브어',
    'pi': '팔리어',
    'pl': '폴란드어',
    'ps': '파슈툰어',
    'prs': '다리어',
    'pt': '포르투갈어',
    'qu': '케추아어',
    'rm': '레토-로만어',
    'ro': '루마니아어',
    'rn': '룬디어',
    'ru': '러시아어',
    'rw': '르완다어',
    'sa': '산스크리트(범어)',
    'sc': '사르데냐어',
    'scn': '시칠리아어',
    'sd': '신드어',
    'se': '북사미어',
    'sg': '상고어 (?)',
    'si': '싱할라어 (신할라어)',
    'sk': '슬로바키아어',
    'simple': '(간단 영어)',
    'sl': '슬로베니아어',
    'sm': '사모아어',
    'sn': '쇼나어',
    'so': '소말리어 카테고리 소말리어',
    'sq': '알바니아어',
    'sr': '세르비아어',
    'ss': '스와티어',
    'st': '남소토어',
    'su': '순다어',
    'sv': '스웨덴어',
    'sw': '스와힐리어',
    'ta': '타밀어',
    'te': '텔루구어',
    'tg': '타지크어',
    'th': '타이어 (태국어)',
    'ti': '티그리냐어',
    'tk': '투르크멘어',
    'tl': '타갈로그',
    'tn': '츠와나어',
    'to': '통가어',
    'tr': '터키어',
    'ts': '총가어',
    'tt': '타타르어',
    'tw': '트위어',
    'ty': '타이티어',
    'ug': '위구르어',
    'uk': '우크라이나어',
    'ur': '우르두어',
    'uz': '우즈베크어',
    've': '벤다어',
    'vi': '베트남어',
    'vo': '볼라퓌크',
    'wa': '왈론어',
    'wo': '월로프어',
    'xh': '코사어',
    'yi': '이디시어',
    'yo': '요루바어',
    'zh': '중국어',
    'zh-min-nan': '중국 민난어',
};

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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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
            Authorization: config.APIKey
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