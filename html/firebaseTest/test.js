import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { doc, setDoc, deleteDoc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { firebaseConfig } from '../../js/api/apikey.js';
const FIREBASE_CONIFG = firebaseConfig;

let db;

function init() { // 초기화(db연결, 버튼 이벤트 리스너 등록)
    const app = initializeApp(FIREBASE_CONIFG);
    db = getFirestore(app);

    document.querySelector('button').addEventListener('click', test, false);
}

async function addAccount(inputId = "testId", inputPassword = "testPassword", inputEmail = "tesEmail") { // 계정 추가
    if (inputId === '') { // 공백, 중복아이디, 특수문자
        return false;
    }

    else if (inputPassword === '') { //공백,
        return false;
    }

    else if (inputEmail === '') { // 공백, 이메일 정규식
        return false;
    }

    else {
        await setDoc(doc(db, "accounts", inputId), {
            password: inputPassword,
            email: inputEmail,
            reviews: new Array()
        });

        if (getAccount(inputId)) {
            return true;
        }
        else {
            return false;
        }
    }
}

async function getAccount(userId) { // 계정 정보 가져오기
    const accountDoc = doc(db, "accounts", userId);
    const account = await getDoc(accountDoc);

    if (account.exists()) {
        return account.data();
    } else {
        return null;
    }
}

async function deleteAccount(userId) { // 계정 삭제
    if (!await getAccount(userId)) {
        return false;
    }

    else {
        await deleteDoc(doc(db, "accounts", userId))

        if (!await getAccount(userId)) {
            return true;
        }
        else {
            return false;
        }
    }
}

async function updateAccount(inputId, inputPassword, inputEmail) { // 계정 업데이트
    let account = await getAccount(inputId);
    if (account) {
        await updateDoc(doc(db, "accounts", inputId), {
            password: inputPassword,
            email: inputEmail,
        });
        if (account['password'] === inputPassword && account['email'] === inputEmail) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

async function addReview(userId, reviewTitle, reviewContent, reviewScore) { // 리뷰 추가
    let account = await getAccount(userId);
    let isUpdated;

    if (account) {
        await updateDoc(doc(db, "accounts", userId), {
            reviews: arrayUnion({ title: reviewTitle, content: reviewContent, score: reviewScore })
        });
        account = await getAccount(userId);
        isUpdated = account['reviews'].filter(review => review['title'] === reviewTitle && review['content'] === reviewContent && review['score'] === reviewScore).length
        if (isUpdated) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

async function removeReview(userId, reviewTitle, reviewContent, reviewScore) { // 리뷰 삭제
    let account = await getAccount(userId);
    let isRemoved;

    if (account) {
        await updateDoc(doc(db, "accounts", userId), {
            reviews: arrayRemove({ title: reviewTitle, content: reviewContent, score: reviewScore })
        });
        account = await getAccount(userId);
        isRemoved = account['reviews'].filter(review => review['title'] === reviewTitle && review['content'] === reviewContent && review['score'] === reviewScore).length
        if (!isRemoved) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

async function updateReview(userId, reviewTitle, reviewContent, reviewScore) { // 리뷰 수정
    // 복잡해짐, 틀이 어느정도 정해지면 작성
}

async function test() { // 테스트 메서드
    let result
    result = await removeReview('testId', 'title', 'content', 0);


    console.log(result);
}

init(); // 초기 설정