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
            id: /^[0-9]/,
            password: "",
            email: "",
        }
    }


    phoneValidationTest(value){

        let phoneRegex = /^01[0|1|6|7|8|9]{1}/

        return this.validate(value , phoneRegex)
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
console.log(valid.phoneValidationTest("010"));