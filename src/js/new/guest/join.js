const joinform = document.querySelector(".join_user-info");
const joinNickInput = document.querySelector(".join_user-info__input-user-name");
const nickCheck = document.querySelector(".join_user-info__id-status");
// nodelist vs htmlcollection 차이점 알기 (동적,정적)

let nameValue = [];
let emailValue = [];
let phoneValue = [];
let userNick = '';

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

    const toggleColor = nickCheck.className;
    console.log(toggleColor);
    if(toggleColor == "join_user-info__id-status redsign"){
        nickCheck.classList.remove("redsign");
    }
    
    const IsIncludeCheck = nameValue.includes(userNick);
    if(IsIncludeCheck){
        nickCheck.classList.add("redsign");
        nickCheck.textContent = "중복된 닉네임 입니다.";
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