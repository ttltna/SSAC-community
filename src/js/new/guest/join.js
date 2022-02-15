const joinform = document.querySelector(".join_user-info");
const joinNickInput = document.querySelector(".join_user-info__input-user-name");
const nickCheck = document.querySelector(".join_user-info__id-status");
const joinPwInput = document.querySelector(".join_user-info__input-user-password");
const firstPwCheck = document.querySelector(".join_user-info__pw-status");
const passwordCoincide = document.querySelector(".join_user-info__input-check-password");
const secondPwCheck = document.querySelector(".join_user-temp-check");

let nameValue = [];
let emailValue = [];
let phoneValue = [];
let userPassWord = "";
const url = `https://d0ab52b3-193e-4494-a62f-48f4a76231e4.mock.pstmn.io/`

fetch(url).then((response) => response.json()).then((data) => {
    for(const element of data){
        nameValue.push(element.nickname);
        emailValue.push(element.email);
        phoneValue.push(element.phone);
    }
});

function handleSubmit(e){ //form태그 submit 방지
    e.preventDefault();
}

function checkRegExp(str1){ //정규표현식 비교하기
    // const char = /[A-Z|a-z|0-9|ㄱ-ㅎ|ㅏ-ㅣ-가-힣]/gi;
    const SpcialChar = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi;
    return SpcialChar.test(str1);
}

function handleNickNameKeyDown(){
    nickCheck.classList.remove("greensign");
    nickCheck.classList.remove("redsign");
}

function handleNickNameKeyUp(){ //닉네임 인풋 키보드 이벤트
    const userNickName = joinNickInput.value;
    userNickName !== nameValue && !checkRegExp(userNickName) && userNickName.length > 7 ? nickCheck.classList.add("greensign"): nickCheck.classList.add("redsign");
    // 닉네임 중복 검사         &&  닉네임 특수문자 검사        &&   닉네임 길이검사
    if(nickCheck.classList.value === "join_user-info__id-status greensign"){
        nickCheck.textContent = "사용 가능한 닉네임입니다.";
    }
    if(nickCheck.classList.value === "join_user-info__id-status redsign" && userNickName !== nameValue){
        nickCheck.textContent = "8 ~ 16자 이내의 영문,숫자를 사용해 주세요.";
    }
    if(nickCheck.classList.value === "join_user-info__id-status redsign" && userNickName === nameValue){
        nickCheck.textContent = "중복된 닉네임입니다.";
    }
}

/* 비밀번호 */
function handleFirstPassWordKeyDown(){
    firstPwCheck.classList.remove("greensign");
    firstPwCheck.classList.remove("redsign");
}

function handleFirstPassWordKeyUp(){ //비밀번호가 8글자 이상인지 확인
    userPassWord = joinPwInput.value;
    !checkRegExp(userPassWord) && userPassWord.length > 7 ? firstPwCheck.classList.add("greensign"): firstPwCheck.classList.add("redsign");
    if(firstPwCheck.classList.value === "join_user-info__pw-status greensign"){
        firstPwCheck.textContent = "사용 가능한 비밀번호입니다.";
    }
    if(firstPwCheck.classList.value === "join_user-info__pw-status redsign"){
        firstPwCheck.textContent = "8 ~ 16자 이내의 영문,숫자를 사용해 주세요.";
    }
}

function handleSecondPassWordKeyUp(){ //비밀번호에 적었던것과 일치하는지 확인
    userPassWord === passwordCoincide.value ? console.log("일치합니다.") : console.log("일치하지 않습니다.");
}
/* //비밀번호 */

joinform.addEventListener("submit", handleSubmit);
joinNickInput.addEventListener("keyup",handleNickNameKeyDown); //nickname input keydown
joinNickInput.addEventListener("keyup",handleNickNameKeyUp); //nickname input keyup
joinPwInput.addEventListener("keyup",handleFirstPassWordKeyDown); //password input keydown
joinPwInput.addEventListener("keyup",handleFirstPassWordKeyUp); //password input keyup
passwordCoincide.addEventListener("keyup",handleSecondPassWordKeyUp); //password check input keyup

// const init = async () => {
//     // await joinform.addEventListener("submit", handleSubmit);
//     // await joinNickInput.addEventListener("keyup",handleNickNameKeyUp);
// }

// init()