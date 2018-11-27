
const PAGE_LIST = require("../../utils/PageList").pageList;


window.onload = () => {
    let selectType = document.getElementById("type");
    console.log(PAGE_LIST)

    Object.keys(PAGE_LIST).map((v) => {
        let option = document.createElement("option");
        option.text = PAGE_LIST[v].name
        option.dataset.href = PAGE_LIST[v].path
        selectType.append(option)
    });


    selectType.addEventListener("change" , () => {
        let redirectHref = selectType.options[selectType.selectedIndex].dataset.href;
        window.location.href = redirectHref;
    })

}
