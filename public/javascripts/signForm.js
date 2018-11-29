import CheckedValidation from "../../utils/CheckedValidation";
import DateFormat from "../../utils/DateFormat";

window.onload = () => {

    /** Date , valid 관련 class Object 생성 */
    const checkedValidation = new CheckedValidation();
    const dateFormat = new DateFormat();

    /** 회원가입 관련 관련 elements */
    let id = document.getElementById("id");
    let passwd = document.getElementById("passwd");
    let passwdConfirm = document.getElementById("passwd-confirm");
    let email = document.getElementById("email");
    let birthYear = document.getElementById("user-year");
    let birthMonth = document.getElementById("user-month");
    let birthDay = document.getElementById("user-day");
    let submitBtn = document.getElementById("signup");
    let cancelBtn = document.getElementById("cancel");

    let initDate = () => {
        /** 현재 년도부터 - 120년까지 년도 option dynamic settings  */
        for (let i = dateFormat.getCurrYear(); i > dateFormat.getMaxBirth(); i--) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;

            if (dateFormat.getCurrYear() == i) {
                option.selected = true;
            }

            birthYear.append(option);
        }

        birthMonth.selectedIndex = dateFormat.getCurrMonth() - 1

        for (let i = 1; i <= dateFormat.getFullDays(dateFormat.getCurrMonth()); i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;

            birthDay.append(option);
        }

        birthDay.selectedIndex = dateFormat.getCurrDays() - 1
    };

    /** 비밀번호가 같은지 regex에 맞는지 확인. */
    let passwordComparison = (password, confirmPassword) => {

        return (checkedValidation.passwordValidation(password)
            && checkedValidation.passwordValidation(confirmPassword) )
            && (password == confirmPassword) ? true : false;
    };

    let yearMonthChangeEvent = () => {
        /** 자식 option 초기화 */
        while (birthDay.firstChild) {
            birthDay.removeChild(birthDay.firstChild)
        }

        /** 선택된 month select box  */
        let selectedYear = birthYear.options[birthYear.selectedIndex].value;

        /** 선택된 month select box  */
        let selectedMonth = birthMonth.options[birthMonth.selectedIndex].value;

        /** 선택된 month에 다른 days */
        let days = dateFormat.getFullDays(selectedYear, selectedMonth);

        for (let i = 1; i <= days; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;

            birthDay.append(option);
        }
    }

    /** Year , Month 가 변경되면 윤년에 따라 Days 변경 */
    birthYear.addEventListener("change" , yearMonthChangeEvent );
    birthMonth.addEventListener("change", yearMonthChangeEvent );


    /** 가입 관련 버튼 */
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
    });

    /** 취소 관련 버튼 */
    cancelBtn.addEventListener("click", (event) => {
        event.preventDefault();
    });

    initDate();
};


