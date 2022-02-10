const API_URL = `https://d0ab52b3-193e-4494-a62f-48f4a76231e4.mock.pstmn.io/`;
const _get = (target) => {
  return document.querySelector(target);
}
const _formBox = _get('.login__form');

// 변수설정


const _login = (e) => {
  e.preventDefault();

  const _idInput = _get('.login__id');
  const _idInputValue = _idInput.value;
  const _pwInput = _get('.login__pw');
  const _pwInputValue = _pwInput.value;

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((userInfo) => {
        if(_idInputValue === userInfo.email && _pwInputValue === userInfo.password){
          console.log('로그인에 성공하였습니다.')
          sessionStorage.setItem("currentUser",JSON.stringify(userInfo))
          location.assign('/index.html')
          return
        }
        // else {
        //   console.log('로그인에 실패하였습니다.')
        //   alert('아이디 및 비밀번호를 확인해주세요.')
        //   return
        // }
        // if(_idInputValue !== userInfo.email && _pwInputValue !== userInfo.password){
        // }
      })
    })
    .catch((err) => console.error(err))
}

const _bindLoginBtn = () => {
  _formBox.addEventListener('submit', _login)
}

const main = () => {
  // 버튼연결
  _bindLoginBtn()
}

const init = () => {
  window.addEventListener('DOMContentLoaded', main);
}

init();
