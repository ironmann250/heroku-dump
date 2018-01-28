//top & search & favorite
function favorite (relid,type) {
  $.ajax(  
    {  
      type:'POST',  
      url : '/user/favorite',  
      dataType : 'JSON',
      data:'relid='+relid+'&type='+type,
      success  : function(data) { 
          if(data.ret == "0"){
            $('#relid').val(relid);
            $('#type').val(type);
            $('#login-modal').modal('toggle');
          }else if(data.ret == "-1"){
            //alert('you have favoriteed');
            toastr.warning("This have favorited",'Notice');  
          }else{
            toastr.success("Favorite success",'Notice');  
            //alert('favorite success');
          }  
      },  
      error : function() {
        toastr.error("system error",'Notice');  
        //alert('system error');
    }
  });
}
$(function(){
jQuery.getScript("/resources/js/bootstrap-toastr/toastr.min.js", function(data, status, jqxhr) {
   /* 
    做一些加载完成后需要执行的事情
   */ 
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "positionClass": "toast-top-center",
      "onclick": null,
      "showDuration": "1000",
      "hideDuration": "1000",
      "timeOut": "3000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  });

    $("#totop").hide();
    $(window).scroll(function(){
      if ($(window).scrollTop()>100){
          $("#totop").fadeIn();
      }else{
          $("#totop").fadeOut();
      }
    });
    $("#totop").click(function(){
      $('body,html').animate({scrollTop:0},500);
      return false;
    });

    $("#searchSelected").click(function(){
        $("#searchTab").show();
        $(this).addClass("searchOpen");
    });

    $("#searchTab li").hover(function(){
        $(this).addClass("selected");
        },function(){
            $(this).removeClass("selected");
    });

    $("#searchTab li").click(function(){
        $("#searchSelected").html($(this).html());
        $("#searchTab").hide();
        $("#searchSelected").removeClass("searchOpen");
    });
    //top menu
    $("#jq_topmenu li").hover(function(){
        $(this).addClass("hover").find("div.jq_hidebox").show();
    },function(){
        $(this).removeClass("hover").find("div.jq_hidebox").hide();
    });
    $('#face1').pinwheel({content:'<img src="/theme/img/ewm.png">'});
    
    $('.advert').imgtransition({
        speed:4000,  //img切换时间
        animate:2000 //img切换过渡时间
    });
    $('#ajaxlogin').click(function () {
        var username = $('#username').val();
        var password = $('#password').val();
        var relid = $('#relid').val();
        var type = $('#type').val();
        if (username=='' || password=='') {
            toastr.error("Please input username and password",'Notice');
          //alert('Please input username and password');
        }else{
          $.ajax( 
            {  
              type:'POST',  
              url : '/user/ajaxlogin',  
              dataType : 'JSON',
              data:'username='+username+'&password='+password,
              success  : function(data) { 
                  if(data.ret == "1" ){
                    $('#login-modal').modal('hide');
                    favorite (relid,type);
                  }else{
                    //alert('Login fail');
                    toastr.error("Login fail",'Notice');  
                  } 
              },  
              error : function() {
                  toastr.error("system error",'Notice');  
            }
          });
        }
        
    });
    $('#joinfree').click(function () {
        window.location.href="http://www.admissions.cn/user/register";
    });
});
//多图翻滚
$.fn.imgtransition = function(o){
    var defaults = {
        speed : 5000,
        animate : 1000
    };
    o = $.extend(defaults, o);

    return this.each(function(){
        var arr_e = $("li", this);
        arr_e.css({position: "absolute"});
        arr_e.parent().css({margin: "0", padding: "0", "list-style": "none", overflow: "hidden"});

        function shownext(){
            var active = arr_e.filter(".active").length ? arr_e.filter(".active") : arr_e.first();
            var next =  active.next().length ? active.next() : arr_e.first();
            active.css({"z-index": 9});
            next.css({opacity: 0, "z-index": 10}).addClass('active').animate({opacity: 3.0}, o.animate, function(){
                active.removeClass('active').css({"z-index": 8});
            });
        }
        arr_e.first().css({"z-index": 9});
        setInterval(function(){
            shownext();
        },o.speed);

    });
};
