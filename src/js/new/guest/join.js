const joinform = document.querySelector(".join_user-info");
const joinNickInput = document.querySelector(".join_user-info__input-user-name");
const nickCheck = document.querySelector(".join_user-info__id-status");
// nodelist vs htmlcollection 차이점 알기 (동적,정적)

let nameValue = [];
let emailValue = [];
let phoneValue = [];
let userNick = '';

const nickExp = /[^A-Za-z0-9]/gi;

const url = `https://d0ab52b3-193e-4494-a62f-48f4a76231e4.mock.pstmn.io/`
fetch(url).then((response) => response.json()).then((data) => {
    for(const element of data){
        nameValue.push(element.nickname);
        emailValue.push(element.email);
        phoneValue.push(element.phone);
    }
});

function handleNickNameKeyUp(){
    // input으로 바뀌는 값
    userNick = joinNickInput.value; //현재 적은 닉네임 인풋값 받아오기
    nickCheck.textContent = '8 ~ 16자 이내의 한글,영문,숫자를 사용해 주세요.'
    IsSpcialChar = nickExp.test(userNick);

    /* remove1 : 중복닉네임과 특수문자로 인해 클래스명이 추가된걸 지우기 위한 부분 */
    const toggleColor = nickCheck.className;
    if(toggleColor === "join_user-info__id-status redsign"){
        nickCheck.classList.remove("redsign");
    }
    /* //remove1 */

    /* remove2 : 닉네임 사용이 가능한 경우의 클래스명이 추가돤걸 지우기 위한 부분 */
    if(toggleColor === "join_user-info__id-status greensign"){
        nickCheck.classList.remove("greensign");
    }
    /* //remove2 */

    const IsIncludeCheck = nameValue.includes(userNick);
    if(IsIncludeCheck){ // 중복된 닉네임 검사
        nickCheck.classList.add("redsign");
        nickCheck.textContent = "중복된 닉네임 입니다.";
    }
    
    if(IsSpcialChar){ // 특수문자 검사
        nickCheck.classList.add("redsign");
        nickCheck.textContent = "8 ~ 16자 이내의 한글,영문,숫자를 사용해 주세요."
    }
    if(userNick.length >=8 && !IsSpcialChar){
        nickCheck.classList.add("greensign");
        nickCheck.textContent = "사용 가능한 닉네임 입니다."
    }
}

joinNickInput.addEventListener("keyup",handleNickNameKeyUp);
/* 아이디 중복검사를 위해 해야 할 일
목표 : 닉네임을 joinNickInput에 한글자 씩 적을때마다 이벤트리스너로 값불러와서 비교후 중복인지 아닌지 확인하기
1. 닉네임을 받기
2. api로 데이타 받아오기
3. 값 비교하기
4. submit은 막고
5. keybord event만들기
6. 정규표현식까지 공부해서 적용하기 */

function handleSubmit(e){
    e.preventDefault();
}

joinform.addEventListener("submit", handleSubmit);


// 연락처를 위한 정규 표현식
const phoneExp = /^\d{3}-\d{4}-\d{4}$/;