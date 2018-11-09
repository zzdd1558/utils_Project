$(function(){

  $("#type").on("change",function(){
    var SelectedValue = $("#type").prop("option","selected").val();

    switch (SelectedValue) {
      case '회원가입':
          $("div[name^=Exdiv]").hide();
          $("#MemberValidation").show();
        break;
      case '카카오':
          $("div[name^=Exdiv]").hide();
          $("#KakaoShare").show();
        break;
      // default: $("#MemberValidation").show();
      //   break;

    }

  });



  $('#MemberChkBtn').on("click",function(){               // "가입" 버튼 클릭시 이벤트 발생
    var $chk= new CheckedValidation();

    if(!$chk.idValidation($("input[name='id']").val())){
      alert("아이디를 다시 입력해주세요.\n *아이디는 영문대소문자,숫자 포함 4~12자리로입력");
      $("input[name='id']").val("");        // 초기화
      $("input[name='id']").focus();
      return false;
    }


    if(!$chk.passwordValidation($("input[name='pwd']").val())){
      alert("비밀번호를 다시 입력해주세요.\n *비밀번호는 영문,숫자,특수문자 포함 6~15자리로입력");
      $("input[name='pwd']").val("");       // 초기화
      $("input[name='pwd']").focus();
      return false;
    }

    alert("유효성 검사 통과!");

  });

})
