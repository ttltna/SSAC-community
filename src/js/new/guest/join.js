window.onload = function(){
    joinform.addEventListener("submit", handleSubmit);
    joinNickInput.addEventListener("keyup",handleNickNameKeyUp);
}

const joinform = document.querySelector(".join_user-info");
const joinNickInput = document.querySelector(".join_user-info__input-user-name");
const nickCheck = document.querySelector(".join_user-info__id-status");

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

function expTest(exp,str2){
    return exp.test(str2);
}

function checkRegExp(str1){
    const SpcialChar = /[A-Z|a-z|0-9|ㄱ-ㅎ|ㅏ-ㅣ-가-힣]/g;
    console.log(`spcialChar = ${expTest(SpcialChar,str1)}`);
}


function handleNickNameKeyUp(){
    checkRegExp(joinNickInput.value);
}

function handleSubmit(e){
    e.preventDefault();
}
