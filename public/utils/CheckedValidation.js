// 정규식 사용
/**
 * @author 배준 < joon7897@naver.com >
 * @author 김윤권 < vusdlq007@naver.com >
 * @author 최윤진 < zzdd1558@gmail.com >
 *
 * id : @김윤권   영문 대소문자및 숫자 4~12자리
 * password : @김윤권 영문 대소문자및 숫자 및 특수기호포함 6~15자리
 * email : @배준 이메일
 * phoneNumber : @최윤진 010 , 1 , 6 , 7 , 8 , 9를 포함한 하이픈을 포함하거나 포함하지 않는 휴대폰번호.
 * userUniqueNumber : @최윤진주민등록번호 (-) 하이픈 포함.
 *
 * */
class CheckedValidation {

    constructor() {
        this.regExpType = {
            idRegex: /^[a-zA-Z0-9]{4,12}$/,
            passwordRegex: /^[a-zA-Z0-9!@#$%^&*()?_~]{6,15}$/,
            emailRegex: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            phoneRegex : /^01[0|1|6|7|8|9]{1}\-?\d{3,4}\-?\d{4}$/ ,
            userUniqueNumber : /^\d{6}\-[1-4]\d{6}$/
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

    emailValidation(value){
      return this.validate(value , this.regExpType.emailRegex)
    }

    userUniqueNumber(value){
        return this.validate(value , this.regExpType.userUniqueNumber)
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
console.log(valid.userUniqueNumber("930925-5207036"));