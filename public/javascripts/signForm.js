import CheckedValidation from "../../utils/CheckedValidation";
import DateFormat from "../../utils/DateFormat";
import PageList from "../../utils/PageList";

/** DOM이 다 Loding되면 callback으로 호출. */
window.onload = () => {

    /** Date , valid 관련 class Object 생성 */
    const checkedValidation = new CheckedValidation();
    const dateFormat = new DateFormat();
    const pageList = PageList;

    /** 회원가입 관련 관련 elements */
    let id = document.getElementById("user-id");
    let passwd = document.getElementById("passwd");
    let passwdConfirm = document.getElementById("passwd-confirm");
    let email = document.getElementById("email");
    let birthYear = document.getElementById("user-year");
    let birthMonth = document.getElementById("user-month");
    let birthDay = document.getElementById("user-day");
    let submitBtn = document.getElementById("signup");
    let cancelBtn = document.getElementById("cancel");
    let signupForm = document.getElementById("sign-form");

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
            && checkedValidation.passwordValidation(confirmPassword))
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
    birthYear.addEventListener("change", yearMonthChangeEvent);
    birthMonth.addEventListener("change", yearMonthChangeEvent);

    /** 가입 관련 버튼 */
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        let validFlag = true;
        let msg = "";
        let birthYearVal = birthYear.value;
        let birthMonthVal = birthMonth.value > 9 ? birthMonth.value : `0${birthMonth.value}`;
        let birthDayVal = birthDay.value > 9 ? birthDay.value : `0${birthDay.value}`;
        let birth = `${birthYearVal}${birthMonthVal}${birthDayVal}`;

        if (!checkedValidation.idValidation(id.value)) {
            validFlag = false;
            msg = "아이디 형식이 잘못되었습니다.";

        } else if (!checkedValidation.passwordValidation(passwd.value)
            || !checkedValidation.passwordValidation(passwdConfirm.value)) {
            validFlag = false;
            msg = "비밀번호 형식이 잘못되었습니다.";

        }else if (!passwordComparison(passwd.value , passwdConfirm.value)) {
            validFlag = false;
            msg = "비밀번호가 일치하지 않습니다.";

        }else if (!checkedValidation.emailValidation(email.value)) {
            validFlag = false;
            msg = "이메일 형식이 잘못되었습니다.";
        } else if ( ! checkedValidation.birthdayValidation(birth)){
            validFlag = false;
            msg = "생년월일이 잘못되었습니다.";
        }

        /** validation 전부 통과시 form action submit */
        if (validFlag) {
            signupForm.method = "GET";
            signupForm.action = "https://www.naver.com";
            signupForm.submit();

        }else {
            /** 어느 지점에서 걸렸는지 표기하기 위한 msg 출력 */
            alert(msg);
        }
    });

    /** 취소 관련 버튼 */
    cancelBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if(confirm("회원가입을 취소하시겠습니까.")) {
            location.href = pageList.pageList.MAIN.path;
        }
    });

    initDate();
};


