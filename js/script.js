$(document).ready(function(ev){
    $('body').addClass('preloader-active');
    var emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var nameValidate = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-z-_\.\s]*$/;
    var phoneValidate= /^((059([0-9]{7}))|(٠٥٩([٠-٩]{7})))$/;
    var hourValidate= /^(([01]\d|2[0-3]):?([0-5]\d)|([٠١][٠-٩]|٢[٠-٣]):?([٠-٥][٠-٩]))$/;



    function nameValidation() {
        var txt= $('#userName').val();
        if(txt==''){
            $("#name-wrong-alert").text('الرجاء كتابة الاسم');
            return false;
        }else if(txt.length > 50 || txt.length < 2) {
            $("#name-wrong-alert").text('يجب كتابة اسم مكون من حرفين على الأقل ولا يتجاوز 30 حرف');
            return false;
        }else if( nameValidate.test(txt) == false){
            $("#name-wrong-alert").text('الرجاء كتابة الاسم بحيث يحتوي على حروف أو مسافات فقط');
            return false;
        }else{
            $("#name-wrong-alert").text('');
            return true;
        }
    }
    function phoneValidation() {
        var txt= $('#phone').val();
        if(txt==''){
            $("#phone-wrong-alert").text('الرجاء كتابة رقم الجوال');
            return false;
        }else if( phoneValidate.test(txt) == false){
            $("#phone-wrong-alert").text('الرجاء ادخال رقم الجوال بشكل صحيح مكون من 10 أرقام ومبدوء ب 059');
            return false;
        }else{
            $("#phone-wrong-alert").text('');
            return true;
        }
    }


    function dateValidation() {
        var txt= $('#datetimepicker4').val();
        if(txt==''){
            $("#date-wrong-alert").text('الرجاء كتابة التاريخ المراد حجزه');
            return false;
        }else{
            $("#date-wrong-alert").text('');
            return true;
        }
    }

    function timeValidation() {
        var txt= $('#datetimepicker3').val();
        if(txt==''){
            $("#hour-wrong-alert").text('الرجاء كتابة  ساعة الحجز');
            return false;
        }else{
            $("#hour-wrong-alert").text('');
            return true;
        }
    }

    function emailValidation() {
        var txt= $('#email').val();
        if(txt==''){
            $("#email-wrong-alert").text('الرجاء كتابة البريد الإلكتروني الخاص بك');
            return false;
        }else if( emailValidate.test(txt) == false){
            $("#email-wrong-alert").text('الرجاء ادخال بريد إلكتروني صحيح');
            return false;
        }else{
            $("#email-wrong-alert").text('');
            return true;
        }
    }

    function msgValidation() {
        var txt= $('#Comments').val();
        if(txt==''){
            $("#msg-wrong-alert").text('الرجاء كتابة نص الرسالة في الأسفل');
            return false;
        }else{
            $("#msg-wrong-alert").text('');
            return true;
        }
    }

    $('#userName').on("blur", function (e) {
        nameValidation();
    });

    $('#phone').on("blur", function (e) {
        phoneValidation();
    });

    $('#resdate').on("change", function (e) {
       dateValidation();
    });

    $('#reshour').on("change", function (e) {
        timeValidation();
    });

    $('#email').on("blur", function (e) {
        emailValidation();
    });

    $('#Comments').on("blur", function (e) {
        msgValidation();
    });

    $('#res-now').on("click", function (e) {
        var nameflag=nameValidation();

       var phoneflag= phoneValidation();

        var dateflag= dateValidation();
        var timeflag=timeValidation();


        if(nameflag && phoneflag && dateflag && timeflag){
            var res_date =$('#datetimepicker4').val();
            var res_time =$('#datetimepicker3').val();
            var name=$('#userName').val();
            var res_form= "السيد / ة : "+ name + '\n' +"هل ترغب في تأكيد الحجز"+'\n'+"بتاريخ: "+ res_date +'\n' +" في الوقت:" + res_time;

            swal({
                    title: "هل ترغب في تأكيد الحجز؟",
                    text: res_form,
                    type: "info",
                    showCancelButton: true,
                    confirmButtonClass: "btn-primary",
                    confirmButtonText: "تأكيد الحجز",
                    cancelButtonText: "إلغاء الحجز",
                    closeOnConfirm: false,
                    closeOnCancel: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        swal("تم حجز طاولة!", "لقد تم حجز الطاولة بالتاريخ والوقت الذي تم اختياره من قبلكم .. نسعد بزيارتكم لنا", "success");
                    } else {
                        swal("لم يتم الحجز", "برجاء اختيار الأوقات التي تناسبكم ومن ثم تأكيد الحجز ليتم حجز طاولة لكم :)", "error");
                    }
                });
        }

    });


    $('#contact_form').on("click", function (e) {
        var nameflag=nameValidation();
        var phoneflag= phoneValidation();
        var dateflag= dateValidation();
        var mailflag=emailValidation();
        var msgflag= msgValidation();


        if(nameflag && phoneflag && dateflag && mailflag && msgflag){

            swal({
                    title: "لقد تم ارسال رسالتك .. شكرًا لتواصلك معنا",
                    type: "success",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer:1500

                });

        }

    });


    $('#comment_btn').on("click", function (e) {
        var nameflag=nameValidation();
        var mailflag=emailValidation();
        var msgflag= msgValidation();


        if(nameflag  && mailflag && msgflag){

            swal({
                title: "لقد تم اضافة التعليق بنجاح ..",
                type: "success",
                showCancelButton: false,
                showConfirmButton: false,
                timer:1500

            });

        }

    });

  $('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
	
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);


    $('.p-menu-icon').click(function () {
        $(".p-menu-row").slideToggle("slow", function() {
            // Animation complete.
        });
    });


    // End sweet alert
    $('#datetimepicker4').datetimepicker({
        locale: 'ar-sa',
        format: 'L'

    });

    $('#datetimepicker3').datetimepicker({
        format: 'LT',
        locale: 'ar-sa',
    });

    $('#btnPicker').on('click',function () {
        //alert('clicked');
        $('#datetimepicker4').focus()
    });


    $('#timebtnPicker').on('click',function () {
        //alert('clicked');
        $('#datetimepicker3').focus()
    });


});


$(window).on('load', function () {
    $('.preloader').delay(2000).fadeOut();
    $('.spinner-preloader').delay(2000).fadeOut();
    $('body').removeClass('preloader-active');

})
