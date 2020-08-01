function checkForm(o) {
    _guid = guid();
    var btn = $(o);
    var main = btn.parent().parent().parent();
    var name = main.find("#iname").val().trim();
    var phone = main.find("#imob").val().trim();

    var modal = document.getElementById('checkFormPop');
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var err = "";
    //validate
    if (name == "") {
        err += "<li>Tên không được bỏ trống</li>";
        modal.style.display = "block";
        // checkErr.innerHTML = "=> Bạn chưa nhập tên";
        $('#username_error').html('=> Bạn chưa nhập tên');
        main.find("#iname").attr("style", "border:1px solid red;");
    } else {
        main.find("#iname").removeAttr("style");
        $('#username_error').html('');
    }
    if (phone == "") {
        modal.style.display = "block";
        main.find("#imob").attr("style", "border:1px solid red;");
        err += "<li>Điện thoại không được bỏ trống</li>";
        $('#phone_error').html('=> Bạn chưa nhập <b>số điện thoại</b>');
    }
    else if(isNaN(phone)){
        modal.style.display = "block";
    	err +="<li>Điện thoại không đúng</li>";
        main.find("#imob").attr("style","border:1px solid red;");
        $('#phone_error').html('=> Bạn nhập <b>số điện thoại</b> không đúng <i>(Có chứa kí tự lạ: khoảng trắng, dấu () )</i>');
    }
    else if(phone.length < 10){
        modal.style.display = "block";
        err +="<li>Điện thoại không đúng</li>";
        main.find("#imob").attr("style","border:1px solid red;");
        $('#phone_error').html('=> Bạn nhập <b>số điện thoại</b>  <i>(chưa đủ 10 số)</i>');
    }
    else if(phone.length > 10){
        modal.style.display = "block";
        err +="<li>Điện thoại không đúng</li>";
        main.find("#imob").attr("style","border:1px solid red;");
        $('#phone_error').html('=> Bạn nhập <b>số điện thoại</b>  <i>(quá 10 số');
    }
    else if(phone.startsWith("00") || phone.startsWith("01") ){
        modal.style.display = "block";
        err +="<li>Điện thoại không đúng</li>";
        main.find("#imob").attr("style","border:1px solid red;");
        $('#phone_error').html('=> Bạn nhập <b>số điện thoại</b>  <i>(chứa 1 trong 2 đầu số ko đúng: 00, 01');
    }
   
    else {
        main.find("#imob").removeAttr("style");
    }

    if (err != "") {
        main.find("input").prop('disabled', false);
        main.find("textarea").prop('disabled', false);
        return false;
    }

    // btn.val("Đang xử lý ...");
    // btn.css("background", "#ccc");


    

   
   

    // setTimeout(function () {
    //     window.top.location.href = "/dang-ky-thanh-cong?guid=" + _guid;
    // }, 3000);

 



}