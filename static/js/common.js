// 顶踩
function updown(postid,type) {
	$.post('user/up', 'type='+type+'&post_id=' + postid,
	function(data) {
		if (data.status == 0) {
			alert('失败！');
		} else if (data.status == 1) {
			var count = $('#score'+type+'-' + postid).text();
			$('#score'+type+'-' + postid).text(count * 1 + 1 * 1);
		} else if (data.status == 2) {
			alert('您踩的太猛了，休息休息稍后再踩！');
		} else {
			alert('未知错误!');
		}
	},'json');
}
//收藏
function fav(postid){
	$.post('user/pfav','post_id='+postid,function(data){
		if(data.status==1){
			alert('收藏成功');
			$("#fav-"+postid).attr('class','box-footer_like_hover');
		}else if(data.status==2){
			alert("亲,未登录用户只能收藏20条笑话，想要收藏更多您喜欢的笑话，请注册登录");
		}else if(data.status==3){
			alert('亲,您已经收藏了');
		}
		
	},'json');
}
//评论
function postComment(postid,pos) {
	var content = $('#comment-' + postid).val();
	content = $.trim(content);
	if (content == '' || content == '吐槽一下！') {
		alert('请填写你的评论！');
		return false;
	}
	$.ajax({
		type: "POST",
		url: "index.php@m=Common&a=publishcomment",
		data : {'post_id':postid,'content':content},
		dataType:'json',
		success: function(data) {
			if(data.status==1){
				var con = data.data;
				console.log(con);
				var html =	'<li class="menu-user">'+
							'<a><i class="menu-user-mask"></i>'+con.nickname+'</a>'+
							con.content+
							'<span class="floor">F</span>'+
							'</li>';
				var num = parseInt($("#comments-nums").html());
				$("#comments-nums").html(num+1);
				$("#comment-box").append(html);
			}else if(data.status=='-1'){
				alert('你评论的太频繁！');
			}else if(data.status=='-2'){
				alert('你的评论有问题，请检查！');
			}else if(data.status=='-3'){
				alert('你的评论有问题，请检查！');
			}else if(data.status=='-4'){
				alert('重复评论！');
			}else if(data.status=='-5'){
				alert('你的评论有问题，请检查！');
			}else if(data.status=='-6'){
				alert("ff");
				alert('评论不能为空！');
			}else {
				if(data.comment_approved==0){
					alert('你的评论有问题需要审核后才能显示!');
				}else{
					alert('评论失败!');
				}
			}
		}
	});
}
//分享
function share(title,url,pic,pid){
	var text = $("#pre-"+pid).html();
	var height='0px';
	height = $("#cproIframe1Wrap_placeholder").css('height');
	$("#share-box").css('display','');
	$(".share").css({'bottom':height});
	$(".share-cancel").css({'bottom':height});
	var picstr = '';
	$("#qzone").click(function(){
		if(pic)picstr = "&pics="+encodeURI('../pic.xxhh.com/cons'+pic);
		window.open('../sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey@url='+url+'&t='+(new Date()).valueOf());
		//window.open('../sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey@url='+encodeURIComponent(url)+'&title='+encodeURIComponent(title)+picstr,'_blank');
		$("#share-box").css('display','none');
		$(".share").css({'bottom':'0px'});
		$(".share-cancel").css({'bottom':'0px'});
		return false;
	});
	$("#weibo").click(function(){
		location.href="javascript:void((function(s,d,e,r,l,p,t,z,c){var%20f='../v.t.sina.com.cn/share/share.php@appkey=3256800942',u=z||d.location,p=['&url=',e(u),'&title=',e(t||d.title),'&source=',e(r),'&sourceUrl=',e(l),'&content=',c||'gb2312','&pic=',e(p||'')].join('');function%20a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(s.width-440)/2,',top=',(s.height-430)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();})(screen,document,encodeURIComponent,'','','"+picstr+"','"+title+'||'+text+"','"+url+"','utf-8'));"
		$("#share-box").css('display','none');
		$(".share").css({'bottom':'0px'});
		$(".share-cancel").css({'bottom':'0px'});
		return false;
	});
	$("#qqweibo").click(function(){
		if(pic)picstr = '../pic.xxhh.com/cons'+pic;
		var _t = encodeURI(title+'||'+text);
		var _url = encodeURI(url); 
		var _appkey = '53bf079477b16b3e096e161e21a0fd00';
		var _site = encodeURI;
		var _pic = picstr;
		var _u = '../v.t.qq.com/share/share.php@title='+_t+'&url='+_url+'&appkey='+_appkey+'&site='+_site+'&pic='+_pic;
		window.open( _u,'转播到腾讯微博', 'width=700, height=580, top=180, left=320, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );	
		$("#share-box").css('display','none');
		$(".share").css({'bottom':'0px'});
		$(".share-cancel").css({'bottom':'0px'});
		return false;
	});
	$("#renren").click(function(){
		if(pic)picstr = "&pic="+encodeURIComponent('../pic.xxhh.com/cons'+pic);
		window.open("../widget.renren.com/dialog/share@resourceUrl="+encodeURI(url)+"&srcUrl="+encodeURI(url)+"&title="+encodeURI(title)+'&description='+encodeURI(text)+picstr+'&time='+(new Date()).valueOf(),'_blank');
		$("#share-box").css('display','none');
		$(".share").css({'bottom':'0px'});
		$(".share-cancel").css({'bottom':'0px'});
		return false;
	});
	$(".share-cancel").click(function(){
		$("#share-box").css('display','none');
		$(".share").css({'bottom':'0px'});
		$(".share-cancel").css({'bottom':'0px'});
	});
}

var Cookie=new Object(); 
Cookie.setCookie=function(name, value, option){ 
    var str=name+'='+escape(value); 
    if(option){ 
        if(option.expireHours){ 
            var d=new Date(); 
            d.setTime(d.getTime()+option.expireHours*3600*1000); 
            str+='; expires='+d.toGMTString(); 
        } 
        if(option.path) str+='; path='+option.path; 
        if(option.domain) str+='; domain='+option.domain; 
        if(option.secure) str+='; true'; 
    } 
    document.cookie=str; 
} 
Cookie.getCookie=function(name){ 
    var arr = document.cookie.split('; '); 2013/10/25
    if(arr.length==0) return ''; 
    for(var i=0; i <arr.length; i++){ 
        tmp = arr[i].split('='); 
        if(tmp[0]==name) return unescape(tmp[1]); 
    } 
    return ''; 
}
Cookie.clean = function(){
	var arr = document.cookie.split('; ');
	for(var i=0; i <arr.length; i++){ 
	    tmp = arr[i].split('=');
	    Cookie.delCookie(tmp[0]);
	}
}
Cookie.delCookie=function(name){ 
    this.setCookie(name,'',{expireHours:-24,domain:'.xxhh.com'}); 
}

$(function($){
	var app_down = Cookie.getCookie('app_down');
	if(app_down == 'close'){
		$("#moblie-box").css('display','none');
	}else{
		$("#moblie-box").css('display','');
	}
	$("#moblie-close").click(function(){
		$("#moblie-box").css('display','none');
		Cookie.setCookie('app_down','close',{expireHours:1,});
	});
})