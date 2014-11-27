/*
## 首页 wangxiang <http://m.letv.com>
### 需求点
1. 焦点图轮播
2. 焦点图转屏适应

### 技术点
1. iphone上面通过css的media query控制，固定宽度、高度
2. android需要计算焦点图的尺寸
3. 焦点图轮播使用了iscroll组件<http://cubiq.org/iscroll-5>

TODO 焦点图图片，除首图外，其余的需要lazyload
*/
var home = {
	init: function(){
		this._slider = null;
		this._initDom();
		this._lisSize = this._lis.size();
		this._size();
		//this._sliderWrapper.addClass('in');
		this._initScroll();
		this._initEvent();
	},
	_initDom: function(){
		this._win = $(window);
		this._scroll = $('#j-scroller'); 
		this._lis = $('#j-scroller li');
		// this._lisa = $('#j-scroller li a');
		this._pointers = _.toArray($('#j-pointer li'));
		this._sliderWrapper = $('#j-slide-wrapper');
		//this._main = $('div.j-home-main');
	},
	_initEvent: function(){
		this._win.on('ortchange', _.bind(this._size,this));
		this._slider.on('scrollEnd',_.bind(this._scrollEnd,this));
		this._slider.on('scrollStart',_.bind(this._scrollStart,this));
		//解决手机端点击焦点图进入新页面，再回退到当前页，焦点图不自动播放问题
		//this._lisa.on('click',_.bind(this._autoScroll,this));
		//透明度在手机上表现很迟缓
		//this._sliderWrapper.on($.fx.transitionEnd,_.bind(this._transitionEnd,this));
	},
	/*
	_transitionEnd: function(){
		this._main.addClass('in');
	},*/
	_size: function(){
		var winWidth = this._sliderWrapper.width();
		this._lis.width( winWidth + 'px');
		this._scroll.width(winWidth * this._lisSize + 'px');
	},
	_last: 0,
	_slider: null,
	_initScroll:function(){
		var _this = this;
		this._slider = new IScroll('#j-slide-wrapper', { 
			momentum: false, //一次仅移动一张
			//preventDefault: true,
			eventPassthrough: true,
			//click: true,
			//useTransition: false, 
			scrollX: true, 
			scrollY: false, 
			mouseWheel: true,
			snap: true,
			snapSpeed: 400
		});
		this._autoScroll();
	},
	_scrollStart: function(){
		clearTimeout(this._timer);
		this._timer = null;
	},
	_scrollEnd: function(){
		var index = this._slider.currentPage.pageX;
		$(this._pointers[this._last]).removeClass('active');
		$(this._pointers[index]).addClass('active');
		this._last = index;
		if(!this._timer) {
			this._index = index;
			this._autoScroll();
		}
	},
	_index: 0,
	_timer: null,
	_autoScroll: function(){
		if(this._index > this._lisSize - 1) this._index = 0;
		this._slider.goToPage(this._index++,0);
		this._timer = setTimeout(_.bind(arguments.callee,this),4000);
	}
};