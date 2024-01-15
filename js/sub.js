/* 사용자 받아오는 전역변수 지정(다른함수에서 재사용) */
const userGrade = document.querySelector('.user-register'); //관람평 등록 버튼
const userTextarea = document.getElementsByTagName('textarea')[0]; //textarea 불러옴(과제 조건에 충족하기 위해 일부러 querySelector사용 안함)
const userName = document.getElementById('user-name'); //이름
const userPassWord = document.getElementById('user-pw');
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

    // 입력된 값을 객체로 저장"
    const userData = {
        user : userNameResult,
        content : userTextResult,
        password : userNamePassWord,
        userId : timeStamp
    };
    // console.log(userTextResult, userNameResult, userNamePassWord);
    const validationTxt = document.querySelector('.user-txt');
    const validationName = document.querySelector('.valiname');
    const validationPw = document.querySelector('.valipw');

    if(userTextResult && userNameResult && userNamePassWord){
        //데이터 저장
        localStorage.setItem(timeStamp, JSON.stringify(userData)); //객체를 문자열로 변환해서 올림
        // const UserData = JSON.parse(localStorage.getItem(timeStamp)); //user 고유의 번호를 다시 불러옴
        allUserData(); //로컬스토리지에 있는 내용을 읽어와서, 웹페이지에 뿌리기    
        
        //폼 내용 비우기 및 에러 클래스 제거하기
        validationTxt.classList.remove('error');
        validationName.classList.remove('error');
        validationPw.classList.remove('error');

        userTextarea.value = '';
        userName.value = '';
        userPassWord.value = ''; 

    //빈값은 validation 메세지 추가
    }else{
        if(userTextResult === ''){
            validationTxt.classList.add('error');
        }else{
            validationTxt.classList.remove('error');
        }
        if(userNameResult === ''){
            validationName.classList.add('error');
        }else{
            validationName.classList.remove('error');
        }
        if(userNamePassWord === ''){
            validationPw.classList.add('error');
        }else{
            validationPw.classList.remove('error');
        }
    }
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
                </div>
                <div class="user-review-txt">
                    <p>${userData.content}</p>
                    <textarea class="user-write-register revise-text" required></textarea>
                    <div class="user-control">
                        <button id="user-revise" data-key="${userData.userId}">수정</button>
                        <button id="user-del" data-key="${userData.userId}">삭제</button>
                        <button id="user-re" data-key="${userData.userId}">확인</button>
                        <button id="user-cancel" data-key="${userData.userId}">취소</button>
                    </div>
                    <div class="validation re-content-vali">내용을 넣어주세요.</div>
                </div>
                <div class="user-pw-revise">
                    <form>
                        <p class="user-pw-form">
                            <label for="your-pw">비밀번호입력 : </label>
                            <input type="password" id="your-pw" maxlength="15" required>
                            <button class="user-pw-check">확인</button>
                            <button class="user-pw-check2">확인</button>
                        </p>
                        <p class="validation re-password">비밀번호가 일치하지 않습니다.</p>
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
        const userDelBtn = userControl.querySelector('#user-del');
        const userReviseBtn = userControl.querySelector('#user-revise');
        const yourPasswordForm = userControl.querySelector('.user-pw-revise');
        const yourPassWordBtn = yourPasswordForm.querySelector('.user-pw-check');
        const yourPassWordReBtn = yourPasswordForm.querySelector('.user-pw-check2'); //수정버튼할때  나오는 패스워드
        const yourPassWordInput = yourPasswordForm.querySelector('#your-pw');
        const validation = userControl.querySelector('.re-password');
        const yourReviseInner = userControl.querySelector('.user-review-txt');
        const yourReviseText = yourReviseInner.querySelector('.revise-text');
        const yourReviseBtn = userControl.querySelector('#user-re');
        const yourCancelBtn = userControl.querySelector('#user-cancel');
        const yourReContentVali = document.querySelector('.re-content-vali');//수정벨리데이션
        if (e.target === userDelBtn) {
            // 삭제 버튼 클릭했을때
            yourPassWordReBtn.style.display = "none";
            yourPassWordBtn.style.display = "block";
            const myKey = userDelBtn.getAttribute('data-key');
            const yourDataPw = JSON.parse(localStorage.getItem(myKey)); //다시 객체로 불러옴
            //비밀번호 폼 보이기
            yourPasswordForm.classList.add('active');

            yourPassWordBtn.addEventListener('click',function(e){
                e.preventDefault();
                const yourPassWordValue = yourPassWordInput.value;
                //비밀번호(value)값 확인하기
                if(yourPassWordValue === yourDataPw.password ){
                    localStorage.removeItem(myKey);
                    allUserData(); // 다시 새로고침
                    yourPasswordForm.classList.remove('active');
                }else{
                    validation.classList.add('error');
                }
            });
        } else if (e.target === userReviseBtn) {
            // 수정 버튼을 클릭하면 키를 불러와 비밀번호 폼 보여줘
            yourPassWordBtn.style.display = "none";
            yourPassWordReBtn.style.display = "block";

            const myKey = userReviseBtn.getAttribute('data-key');
            const yourDataPw = JSON.parse(localStorage.getItem(myKey)); //다시 객체로 불러옴
            yourPasswordForm.classList.add('active');
            //비밀번호 확인 버튼을 클릭할때 수정텍스트 나오고 아니면 다시 비번틀렸다고 나옴
            yourPassWordReBtn.addEventListener('click',function(e){
                e.preventDefault();
                yourPassWordBtn.classList.add('active');
                console.log(yourPassWordBtn);
                const yourRePassWordValue = yourPassWordInput.value;
                if(yourRePassWordValue === yourDataPw.password){
                    //키값을 불러와서 사용자가쓴 키값이랑 맞으면? 수정텍스트가 나와
                    const reviseYourText = yourReviseInner.getElementsByTagName('p')[0];
                    yourReviseText.classList.add('active');
                    yourReviseText.innerHTML = reviseYourText.innerHTML; //내용 innerHTML로 넣어줌
                    reviseYourText.style.display = "none";
                    validation.classList.remove('error');
                    yourPasswordForm.classList.remove('active');
                    userReviseBtn.style.display="none";
                    userDelBtn.style.display="none";
                    yourReviseBtn.style.display="block"; 
                    yourCancelBtn.style.display="block";

                    //만약에 사용자가 수정한 값이랑 맞으면 안에 있는거 대치
                    yourReviseBtn.addEventListener('click',function(e){
                        e.preventDefault();
                        const yourReviseTextResult = yourReviseText.value; //값 가지고왔음
                        if(yourReviseTextResult === ''){
                            yourReContentVali.classList.add('error');
                        }else{
                            yourDataPw.content = yourReviseTextResult;
                            localStorage.setItem(myKey, JSON.stringify(yourDataPw)); //스트링값으로 바로 바꿔서올림
                            allUserData(); //바꿨으니 새로 갱신됨
                            // 수정 텍스트 비활성화 및 폼 닫기
                            yourReviseText.classList.remove('active');
                            yourPasswordForm.classList.remove('active');
                            yourReContentVali.classList.remove('error');
                        }
                    });
                    //취소버튼 클릭했을때 그냥 내용 그대로 냅두는 내용
                    yourCancelBtn.addEventListener('click',function(){
                        yourReviseText.classList.remove('active');
                        yourPasswordForm.classList.remove('active');
                        // yourReviseText.innerHTML = '';
                        allUserData(); //바꿨으니 새로 갱신됨
                    });
                }else{
                    //틀렸으니까 틀렸다고 띄움
                    validation.classList.add('error');
                    yourReviseText.classList.remove('active'); 
                }
            });
        }
    }
});

