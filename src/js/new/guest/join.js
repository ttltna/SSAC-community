window.onload = function(){
    joinform.addEventListener("submit", handleSubmit);
    joinNickInput.addEventListener("keyup",handleNickNameKeyUp);
}

const joinform = document.querySelector(".join_user-info");
const joinNickInput = document.querySelector(".join_user-info__input-user-name");
const nickCheck = document.querySelector(".join_user-info__id-status");
// nodelist vs htmlcollection 차이점 알기 (동적,정적)

let nameValue = [];
let emailValue = [];
let phoneValue = [];
let userNick = '';

// const nickExp = /[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi //영어,숫자,한글 정규 표현식
// const phoneExp = /^\d{3}-\d{4}-\d{4}$/; // 연락처를 위한 정규 표현식

const url = `https://d0ab52b3-193e-4494-a62f-48f4a76231e4.mock.pstmn.io/`
fetch(url).then((response) => response.json()).then((data) => {
    for(const element of data){
        nameValue.push(element.nickname);
        emailValue.push(element.email);
        phoneValue.push(element.phone);
    }
});

// function removeClassList(){
//     const removeColor = nickCheck.className; // p태그 클래스명 가져오기 위한 변수

//     /* remove1 : 중복닉네임과 특수문자로 인해 클래스명이 추가된걸 지우기 위한 부분 */
//     if(removeColor === "join_user-info__id-status redsign"){
//         nickCheck.classList.remove("redsign");
//     }
//     /* //remove1 */

//     /* remove2 : 닉네임 사용이 가능한 경우의 클래스명이 추가돤걸 지우기 위한 부분 */
//     if(removeColor === "join_user-info__id-status greensign"){
//         nickCheck.classList.remove("greensign");
//     }
//     /* //remove2 */
// }

// function addClassList(IsIncludeCheck){
//     /* spcial : 특수문자가 들어가거나 8글자 미만일 경우 */
//     if(IsIncludeCheck){ // 중복된 닉네임 검사
//         nickCheck.classList.add("redsign");
//         nickCheck.textContent = "중복된 닉네임 입니다.";
//     }
    
//     if(IsSpcialChar){ // 특수문자 검사
//         nickCheck.classList.add("redsign");
//         nickCheck.textContent = "8 ~ 16자 이내의 한글,영문,숫자를 사용해 주세요."
//     }
//     /* //spcial */

//     /* nomarl */
//     if(userNick.length >=8 && !IsSpcialChar){ //8글자 이상 특수문자 없는경우 (정상적으로 작성한 경우)
//         nickCheck.classList.add("greensign");
//         nickCheck.textContent = "사용 가능한 닉네임 입니다."
//     }
//     /* //nomarl */
// }

function expTest(exp,str2){ //정규 표현식 test 함수
    return exp.test(str2);
}


function checkRegExp(str1){
    const SpcialChar = /[A-Z|a-z|0-9|ㄱ-ㅎ|ㅏ-ㅣ-가-힣]/g;
    console.log(`spcialChar = ${expTest(SpcialChar,str1)}`);
    // if(expTest(SpcialChar,str1)){
    //     userNick = joinNickInput.value;
    // }else{
    //     joinNickInput.value = "";
    // }
}


function handleNickNameKeyUp(){
    /*  닉네임 part를 구현하기 위해서 필요한 것!!

        1. 현재 적은 닉네임 인풋값 가져오기 why? : 인풋값이 무엇인지 알기 위해서 가져온다.
        2. 특수문자가 들어왔는지, 8글자 이상인지 체크할 함수 만들기 why? : 8글자 이상으로 닉네임을 만들어야 하고 특수문자는 못적게끔 하기 위해서
        3. 케이스 별 글자 색상 정하기 why? : 문제가 되는 글자가 들어왔을때 빨갛게 정상적으로 닉네임을 만들 수 있으면 초록색으로 출력 */

    /* 1. 닉네임 input value */
    // userNick = joinNickInput.value;
    /* 2. 특수문자가 들어왔는지, 8글자 이상인지 체크할 함수 만들기 */
    checkRegExp(joinNickInput.value);
    

    // const IsSpcialChar = nickExp.test(userNick);
    // const IsIncludeCheck = nameValue.includes(userNick);
}

function handleSendSmsApi(){
    
}

// joinNickInput.addEventListener("keyup",handleNickNameKeyUp);

function handleSubmit(e){
    e.preventDefault();
}