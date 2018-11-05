// 정규식 사용
/**
 *
 * id : @김윤권
 * password : @김윤권
 * email : @배준
 * phoneNumber : @최윤진
 *
 * */
class CheckedValidation {

    constructor() {
        this.regExpType = {
            idRegex: /^$/,
            passwordRegex: /^$/,
            emailRegex: /^$/,
            phoneRegex : /^01[0|1|6|7|8|9]{1}-?\d{3,4}-?\d{4}$/
        }
    }


    phoneValidation(value){

        return this.validate(value , this.regExpType.phoneRegex)
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
console.log(valid.phoneValidation("010037712345"));