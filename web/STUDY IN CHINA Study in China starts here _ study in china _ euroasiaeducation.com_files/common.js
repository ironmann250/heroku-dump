﻿// search
//获得Cookie解码后的值
function GetCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
//设定Cookie值-将值保存在Cookie中
function SetCookie(name, value) {
    var expdate = new Date(); //获取当前日期
    var argv = SetCookie.arguments; //获取cookie的参数
    var argc = SetCookie.arguments.length; //cookie的长度
    var expires = (argc > 2) ? argv[2] : null; //cookie有效期
    var path = (argc > 3) ? argv[3] : null; //cookie路径
    var domain = (argc > 4) ? argv[4] : null; //cookie所在的应用程序域
    var secure = (argc > 5) ? argv[5] : false; //cookie的加密安全设置
    if (expires != null) expdate.setTime(expdate.getTime() + (expires * 1000));
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "": ("; expires=" + expdate.toGMTString())) + ((path == null) ? "": ("; path=" + path)) + ((domain == null) ? "": ("; domain=" + domain)) + ((secure == true) ? "; secure": "");
}
//删除指定的Cookie
function DelCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = GetCookie(name); //获取当前cookie的值
    document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString(); //将日期设置为过期时间
}
//获得Cookie的值-name用来搜索Cookie的名字
function GetCookie(name) {
    var arg = name + "=";
    var argLen = arg.length; //指定Cookie名的长度
    var cookieLen = document.cookie.length; //获取cookie的长度
    var i = 0;
    while (i < cookieLen) {
        var j = i + argLen;
        if (document.cookie.substring(i, j) == arg) //依次查找对应cookie名的值
        return GetCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

 (function() {
    types = [];
    types = {
            1 : ["Courses", "Courses"],
            2 : ["Schools", "Schools"]
    };
    var url_course='http://www.admissions.cn/courses/search';
    var url_school='http://www.admissions.cn/school/search';
    
    $("#pt1").mouseover(function() {
        $("#pt2").css('display','');
        $("#pt1").attr('className',"select1 select_hover");
    });
    $("#pt1").mouseout(function() {
        $("#pt2").css('display','none');
        $("#pt1").attr('className',"select1");
    });
    $("#s1").click(function() {
        selSubSearch(1);
        search_form.action = url_course
        $("#q").focus()
    });
    $("#s2").click(function() {
        selSubSearch(2);
        search_form.action = url_school
        $("#q").focus()
    });
   
    function selSubSearch(iType) {
        $("#s0").html(types[iType][0]);
        $("#pt2").css('display','none');
        SetCookie('admissions_so', iType);
    };
    if (GetCookie('admissions_so')) {
        var type = GetCookie('admissions_so');
        if (type==1) {search_form.action = url_course}else{search_form.action = url_school};
        $("#s0").html(types[type][0]);
    }
})();


