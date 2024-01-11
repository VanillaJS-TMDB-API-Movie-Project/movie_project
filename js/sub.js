/* 사용자 받아오는 전역변수 지정(다른함수에서 재사용) */
const userGrade = document.querySelector('.review-write-inner > button'); //관람평 등록 버튼
const userTextarea = document.getElementsByTagName('textarea')[0]; //textarea 불러옴(과제 조건에 충족하기 위해 일부러 querySelector사용 안함)
const userName = document.getElementById('user-name'); //이름
const userPassWord = document.getElementById('pw');
const userList = document.querySelector('.user-review-inner'); //ul
const userListItem = userList.querySelectorAll('li');

allUserData(); //처음 로드시 내가 추가한 영화리뷰 출력해서 보여주는 함수

//관람평등록을 추가했을때 user가 쓴 관람평 내용을 등록 하고 localStorage에 넣기
userGrade.addEventListener('click', function (e) {
    e.preventDefault();
    const userTextResult = userTextarea.value;
    const userNameResult = userName.value;
    const userNamePassWord = userPassWord.value;
    const timeStamp = new Date().getTime();
    // console.log(timeStamp);

    // 입력된 값을 객체로 저장
    const userData = {
        user : userNameResult,
        content : userTextResult,
        password : userNamePassWord,
        userId : timeStamp
    };

    // console.log(userTextResult, userNameResult, userNamePassWord);

    //데이터 저장
    localStorage.setItem(timeStamp, JSON.stringify(userData)); //객체를 문자열로 변환해서 올림
    // const UserData = JSON.parse(localStorage.getItem(timeStamp)); //user 고유의 번호를 다시 불러옴
    allUserData(); //로컬스토리지에 있는 내용을 읽어와서, 웹페이지에 뿌리기     
    
    // 폼 내용 비우기
    userTextarea.value = '';
    userName.value = '';
    userPassWord.value = '';
});

/* 로컬 스토리지에 저장된 모든 데이터를 가져와서 출력 */
function allUserData(){
    userList.innerHTML = '';
    const userKeys = Object.keys(localStorage); //localStorage객체의 키들을 배열로 반환해줌
    for (let i = 0; i < userKeys.length; i++) {
        const key = userKeys[i];
        const userData = JSON.parse(localStorage.getItem(key)); //user고유의 번호를 다시 불러옴

        // 각 데이터에 대한 HTML 생성
        const user_html = `
            <li class="user-review-list">
                <div class="user-name-rating" id="${userData.userId}">
                    <h3>${userData.user}</h3>
                    <p class="star user-star">
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                    </p>
                </div>
                <div class="user-review-txt">
                    <p>${userData.content}</p>
                    <div class="user-control">
                        <button id="user-revise" data-key="${userData.userId}">수정</button>
                        <button id="user-del" data-key="${userData.userId}">삭제</button>
                    </div>
                </div>
                <div class="user-pw-revise">
                    <form>
                        <p>
                            <label for="user-pw">비밀번호입력 : </label>
                            <input type="password" id="user-pw" maxlength="15">
                            <button>확인</button>
                        </p>
                        <!-- 폼벨리데이션 -->
                        <p>비밀번호가 틀립니다.</p>
                    </form>
                </div>
            </li>
        `;
        // userList에 HTML 추가
        userList.insertAdjacentHTML('beforeend', user_html);
    }
}


/* 삭제버튼 & 수정버튼 */
userList.addEventListener('click', function (e) {
    const userControl = e.target.closest('.user-review-list'); //li

    if (userControl) {
        const userDelButton = userControl.querySelector('#user-del');
        const userReviseButton = userControl.querySelector('#user-revise');

        if (e.target === userDelButton) {
            // 삭제 버튼 클릭했을때
            const myKey = userDelButton.getAttribute('data-key');
            localStorage.removeItem(myKey);
            allUserData(); // 다시 새로고침
        } else if (e.target === userReviseButton) {
            // 수정 버튼을 클릭하게
            const myKey = userReviseButton.getAttribute('data-key');
            //20240112(금)- 수정처리 더 할것....
        }
    }
});



