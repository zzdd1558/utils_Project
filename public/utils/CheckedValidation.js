// 정규식 사용
/**
 *
 * id : @김윤권 < vusdlq007@naver.com >
 * password : @김윤권 < vusdlq007@naver.com >
 * email : @배준
 * phoneNumber : @최윤진 < zzdd1558@gmail.com>
 *
 * */
class CheckedValidation {

    constructor() {
        this.regExpType = {
            idRegex: /^[a-zA-Z0-9]{4,12}$/,     // 영문 대소문자및 숫자 4~12자리
            passwordRegex: /^[a-zA-Z0-9!@#$%^&*()?_~]{6,15}$/, // 영문 대소문자및 숫자 및 특수기호포함 6~15자리
            emailRegex: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            phoneRegex : /^01[0|1|6|7|8|9]{1}-?\d{3,4}-?\d{4}$/
        }
    }

    idValidation(value){
      return this.validate(value , this.regExpType.idRegex)
    }

    passwordValidation(value){
      return this.validate(value , this.regExpType.passwordRegex)
    }

    phoneValidation(value){
        return this.validate(value , this.regExpType.phoneRegex)
    }

    emailVaildation(value){
      return this.validate(value , this.regExpType.emailRegex)
    }

    validate ( value , regex ) {
        return regex.test(value) && this.isSet(value)
    }

    isSet ( value ) {
        return !this.isUndefined(value) && (value.length > 0 || value > 0);
    }

    isUndefined ( value ) {
        return typeof value === "undefined";
    }

}

let valid = new CheckedValidation()
