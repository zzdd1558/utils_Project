
/**
 *
 * 날짜 관련 util추가 , 회원 가입및 윤년 윤월 계산적용
 *
 * @author 최윤진 < zzdd1558@gmail.com >
 * */

class DateFormat {

    constructor() {

        this._isThirtyMonth  = [4 , 6 , 9 , 11]
        this._date = new Date()
        // 년
        this._year = this._date.getFullYear();
        // 월 ( 0 ~ 11 까지이기때문에 +1 추가. )
        this._month = this._date.getMonth() + 1 ;
        // 일
        this._days = this._date.getDate();

        this._maxBirth = 120;
    }

    // 날째 직접 세팅.
    setDate(year = this._year , month = this._month , days = this._days) {

        this._year = year;
        this._month = month;
        this._days = days;
    }

    // 오늘
    getToday() {

        return `${this.getCurrYear()}/${this.getCurrMonth()}/${this.getCurrDays()}`;
    }

    // 설정된 현재 년도.
    getCurrYear(){

        return this._year;
    }

    // 설정된 현재 월.
    getCurrMonth(){

        return this._month.length < 2 ? `0${this._month}` : this._month
    }


    // 설정된 현재 일
    getCurrDays(){

        return this._days.length < 2 ? `0${this._days}` : this._days
    }

    // 시간
    getCurrHours(){
        return this._date.getHours()
    }

    // 시간
    getCurrMinutes(){
        return this._date.getMinutes()
    }

    // 시간
    getCurrSeconds(){
        return this._date.getSeconds()
    }

    // 윤년 계산 .
    isLeapYear(year) {

        return year % 4 === 0 &&  year % 100 !== 0  ||  year % 400 === 0
    }

    // 윤년 윤월을 계산한 요일 반환.
    getFullDays (year = this._year , month = this._month){

        month = Number(month)
        // 2월이면서 윤년일 경우 28일을 반환 . 아니면 29일.
        if (month == 2) {
            if (this.isLeapYear(year) ) {
                return 29
            } else{
                return 28
            }
        }

        // 4 , 6 , 9 ,11 달은 30일 , 2월을 제외한 나머지 달은 31일
        return this._isThirtyMonth.includes(month) ? 30 : 31
    }


    getMaxBirth (){
        return this._year - this._maxBirth;
    }
}
module.exports = DateFormat