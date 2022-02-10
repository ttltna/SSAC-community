// helper함수
const _get = (target) => {
  return document.querySelector(target)
}

// ID 찾기 form DOM 들고오기
const findIdForm = _get('.find-id')
const findIdFormInput = _get('.find_user_find-id__id-phone-input')
const findIdFormBtn = _get('.find_user_find-id__id-phone-btn')

// password 찾기 form DOM 들고오기
const findPwForm = _get('.find-pw')

const findPwFormPhoneInput = _get('.find_user_find-pw__pw-phone-input')
const findPwFormPhoneBtn = _get('.find_user_find-pw__pw-phone-btn')

const findPwFormCodeInput = _get('.find_user_find-pw__pw-code-input')
const findPwFormCodeBtn = _get('.find_user_find-pw__pw-code-btn')

const findPwFormResetInput = _get('.find_user_find-pw__pw-reset-input')
const findPwFormResetBtn = _get('.find_user_find-pw__pw-reset-btn')







const AllFindUser = () => {

}

const _init = () => {
  window.addEventListener('DOMContentLoaded', AllFindUser)
}

_init();