
(function(window){
	window.console || (console={log:function(){},dir:function(){},error:function(){}});

	var ver = {
		/*<VER>*/
		"base": "201407/22/lejs_1118/|1bb4a10", /*u*/
		"mms_page": "201407/22/lejs_1118/|e2cc7f2", /*u*/
		"vid_play": "201405/23/lejs_1605/|a07e6e2",
		"xsd": "201407/22/lejs_1118/|b600941", /*n*/
		"ylxsd": "201407/22/lejs_1118/|f3613aa", /*n*/
		/*<VER>*/
		"_": "201212/22/lejs_0/"
	};

	window.__loadjs = function(js){
		document.write('<script type="text/javascript" src="http://js.letvcdn.com/js/'+(ver[js]||ver._).split('|')[0]+js+'.js"></script>');
	};

var playAD_Round = true;//Math.round(Math.random());

window._GLOBAL_ = {
	//大富翁首页地址
	//bigrich_index: 'http://my.letv.com/rich/index.html',
	//捡蛋swf
	egg_swf: playAD_Round?'http://player.letvcdn.com/p/201312/23/11/newplayer/1/diamonds.swf' : 'http://player.letvcdn.com/p/201307/30/10/newplayer/1/2/SpongeBob.swf',
	//捡蛋打开窗口
	egg_gourl: playAD_Round?'http://zhifu.letv.com/tobuy/regular?ref=bfyjb' : 'http://comic.letv.com/zt/nicksummer/index.shtml'
};
try{
	document.domain = 'letv.com';
}catch(e){}

})(window);