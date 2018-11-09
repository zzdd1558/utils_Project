$(function(){
  $('#MemberChkBtn').on("click",function(){
    var $chk= new CheckedValidation();

    if(!$chk.idValidation($("input[name='id']").val())){
      alert("아이디를 다시 입력해주세요.\n *아이디는 영문대소문자,숫자 포함 4~12자리로입력");
      $("input[name='id']").focus();
      return false;
    }


    if(!$chk.passwordValidation($("input[name='pwd']").val())){
      alert("비밀번호를 다시 입력해주세요.\n *비밀번호는 영문,숫자,특수문자 포함 6~15자리로입력");
      $("input[name='pwd']").focus();
      return false;
    }

    alert("유효성 검사 통과!");

  });
})
