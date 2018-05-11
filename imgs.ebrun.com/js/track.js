var _ebrunUbd=document;
var _ebrunUdl=_ebrunUbd.location;
var _ebrunUref=_ebrunUbd.referrer;
var _ebrunUgifpath2="../analy.ebrun.com/track.gif";

var _articleId='0';
var _nodeIdLevel1='2001';
var _nodeIdLevel2='0';
var _nodeIdLevel3='0';
var _nodeIdLevel4='0';

var _ebrunDt=new Date();
var _ebrunTime=_ebrunDt.getTime();
var _ebrunSecond=Math.floor(_ebrunTime / 1000);

var _ebrunUuTime = 10*365*24*60*60;
var _ebrunUvTime = 30*60;
var _ebrunLoginTime = 24*60*60;

var _ebrunUu = "-";
var _ebrunUv = "-";
var _ebrunLogin = "-";
var _ebrunLoginTimes = "-";

if (_ebrunUref.indexOf('www.ebrun.com/manage/sysdata/tmp/effect/index.php')<0) {
	_ebrunUrlTracker();
}

function _ebrunUVoid() { return; }

function _ebrunUrlTracker() {
	if (_ebrunUdl.protocol=="https:") return;
	if (_ebrunUdl.protocol=="file:") return;

	try{
		_ebrunUu=_ebrunGetCookie("_ebrunUu");
	}
	catch (_ebrunError) {}
	if (!_ebrunUu) {
		_ebrunUu = _ebrunTime + "*" + Math.round(Math.random()*2147483647) + "*" + Math.round(Math.random()*2147483647);
		_ebrunSetCookie('_ebrunUu', _ebrunUu, new Date((_ebrunSecond+_ebrunUuTime)*1000), _ebrunGetTopDomain());
	}

	try{
		_ebrunUv=_ebrunGetCookie("_ebrunUv");
	}
	catch (_ebrunError) {}
	if (!_ebrunUv) {
		_ebrunUv = _ebrunTime + "*" + Math.round(Math.random()*2147483647) + "*" + Math.round(Math.random()*2147483647);
		_ebrunSetCookie('_ebrunUv', _ebrunUv, new Date((_ebrunSecond+_ebrunUvTime)*1000), _ebrunGetTopDomain());
	}

	try{
		_ebrunUid=_ebrunGetCookie("trackUid");
		_ebrunUname=_ebrunGetCookie("trackUname");
		_ebrunLogin=_ebrunGetCookie("_ebrunLogin");
	}
	catch (_ebrunError) {}

	if (!_ebrunUid) {
		_ebrunLoginTimes = "-";
		_ebrunUid = "-";
		_ebrunUname = "-";
	} else {
		if (!_ebrunLogin){
			_ebrunLoginTimes = "1";
			_ebrunSetCookie('_ebrunLogin', _ebrunTime, new Date((_ebrunSecond+_ebrunLoginTime)*1000), _ebrunGetTopDomain());
		}
	}
	//alert(_ebrunLoginTimes);

	if (typeof(articleId)!='undefined') _articleId=articleId;
	if (typeof(ebrunLevel2)!='undefined') _nodeIdLevel2=ebrunLevel2;
	if (typeof(ebrunLevel3)!='undefined') _nodeIdLevel3=ebrunLevel3;
	if (typeof(ebrunLevel4)!='undefined') _nodeIdLevel4=ebrunLevel4;


	var i2=new Image(1,1);
	i2.src=_ebrunUgifpath2+"?"+"_uref="+escape(_ebrunGetReferer())+"&_udl="+escape(_ebrunUdl)+"&_uu="+escape(_ebrunUu)+"&_uv="+escape(_ebrunUv)+"&_ulogin="+escape(_ebrunLoginTimes)+"&_uid="+escape(_ebrunUid)+"&_uname="+escape(_ebrunUname)+"&_articleId="+_articleId+"&_nodeIdLevel1="+_nodeIdLevel1+"&_nodeIdLevel2="+_nodeIdLevel2+"&_nodeIdLevel3="+_nodeIdLevel3+"&_nodeIdLevel4="+_nodeIdLevel4;
	i2.onload=function() { _ebrunUVoid();}
}

function _ebrunSetCookie(key, value, time, domain) { //time为cookie保留到的时间 0代表当前Session有效
	if (time && time > 0)
		var cookieString = key + "=" + value + ";expires=" + time.toGMTString() + ";path=/;domain=" + domain;
	else
		var cookieString = key + "=" + value + ";path=/;domain=" + domain;
	_ebrunUbd.cookie = cookieString;
}

function _ebrunGetCookie(key) {
	var cookieString = _ebrunUbd.cookie;
	var start = cookieString.indexOf(key + "=");
	if (start != -1) {
		var start = start + key.length + 1;
		var end = cookieString.indexOf(";", start);
		if (end == -1) {
			end = cookieString.length;
		}
		return cookieString.substring(start, end);
	}
	return null;
}

function _ebrunGetTopDomain() {
	var udomain = _ebrunUbd.domain;
	if (udomain.indexOf(".") > -1) {
		var arrDomain = udomain.split(".");
		udomain = arrDomain[arrDomain.length - 2] + "." + arrDomain[arrDomain.length - 1];
		if (arrDomain.length > 2 && arrDomain[arrDomain.length - 3] != "www") {
			var ii = arrDomain[arrDomain.length - 2];
			if (ii.length <= 2 || (ii == "com" || ii == "edu" || ii == "gov" || ii == "net" || ii == "org" || ii == "mil")) {
				udomain = arrDomain[arrDomain.length - 3] + "." + ii + "." + arrDomain[arrDomain.length - 1];
			}
		}
	}
	return udomain;
}

function _ebrunGetReferer() {
	var referer = "-";
	try {
		try {
			referer = window.top.document.referrer;
		} catch(_ebrunError) {
			referer = _ebrunUbd.referrer;
		}
		if (!referer) {
			try {
				referer = window.top.opener.location.href;
			} catch(_ebrunError) {
				referer = _ebrunUbd.referrer;
			}
		}
	} catch(_ebrunError) {}
	if (!referer) {
		referer = "-";
	}
	return referer;
}
