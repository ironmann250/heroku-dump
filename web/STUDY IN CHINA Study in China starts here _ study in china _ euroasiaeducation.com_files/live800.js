
function openChat(){
    var url="http://chat56.live800.com/live800/chatClient/chatbox.jsp?";
        url +="companyID=159544&configID=39651&lan=zh&jid=6725068117";
        url +="&skillId=2507";
        url += '&enterurl='+encodeURIComponent(document.URL||window.location);
        //url +="&enterurl=http%3A%2F%2Fwww%2Eadmissions%2Ecn%2FSchoolshow%2Ftop%2Ftopmenu%2Ehtml";
        url+="&timestamp="+new Date().getTime();
        url +='&pagetitle=Stuy In China';
    //http://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=159544&configID=39651&lan=zh&jid=6725068117&enterurl=http%3A%2F%2Fwww%2Eadmissions%2Ecn%2FSchoolshow%2Ftop%2Ftopmenu%2Ehtml&timestamp=1420686554864&pagetitle=Stuy%20In%20China&skillId=2507&pagereferrer=http%3A%2F%2Fwww%2Eadmissions%2Ecn%2F&firstEnterUrl=http%3A%2F%2Fwww%2Eadmissions%2Ecn%2FSchoolshow%2Ftop%2Ftopmenu%2Ehtml
    window.open(url,"chatbox159544","toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=920,height=620");
    //return live800.navigateToUrl(url+'&skillId=2507&pagereferrer=http%3A%2F%2Fwww%2Eadmissions%2Ecn%2F&firstEnterUrl=http%3A%2F%2Fwww%2Eadmissions%2Ecn%2FSchoolshow%2Ftop%2Ftopmenu%2Ehtml', 'chatbox159544', globalWindowAttribute,this);
}


/*(function() {
	
	//document.write('<scr'+'ipt src="js/artDialog.js?skin=' + (_skin || 'default') +'"></sc'+'ript>');
	document.write('<scr'+'ipt src="http://chat56.live800.com/live800/chatClient/staticButton.js?jid=6725068117&amp;companyID=159544&amp;configID=39651&amp;codeType=steady">');
   	
   	try{document.open();}catch(e){;}
    var live800_companyID="159544";
    var jsessionId = ";jsessionid=914C80D0C2A09FC8599FDD1C7906B65A";
    try{
        if(navigator.cookieEnabled){jsessionId = "";}
    }catch(e){}

    var enterurl = null;
    enterurl="http://www.admissions.cn/Schoolshow/top/topmenu.html";
    var isOldSkin=false;
    var server_prefix_list=['http://st.live800.com/live800','http://st8.live800.com/live800','http://st10.live800.com/live800','http://st16.live800.com/live800'];
    var isNeedCheckDomainBinding=false;
    var globalWindowAttribute='toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=570,height=424';
    live800_chatVersion="0";
    jid="6725068117";
    var live800_baseUrl="chat56.live800.com";
    var live800_baseHtmlUrl="chat56.live800.com";
    var live800_baseWebApp="/live800";
    var live800_baseChatHtmlDir="/chatClient";
    live800_Language="zh";
    live800_configID="39651";
    live800_codeType="steady";
    live800_configContent="live800_float=1&amp;live800_online=http%3A%2F%2Fchat56.live800.com%2Flive800%2FchatClient%2Ficons%2F2002_online.gif&amp;live800_offline=http%3A%2F%2Fchat56.live800.com%2Flive800%2FchatClient%2Ficons%2F2002_offline.gif&amp;live800_switch=1&amp;live800_skill=2507";
    var skill={id:2507,isOnline:true};
    document.write("&lt;scr"+"ipt language=\"javascript\" src=\"http://st.live800.com/live800/chatClient/staticButtonStatic.js\"&gt;&lt;/scr"+"ipt&gt;");
	document.write('</sc'+'ript>');
})();*/

//