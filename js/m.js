﻿var livePage = {
    
    setTimer1: null,setTimer2: null,setTimer3: null,
    iosOffLine:true,qd:'',m:"",ios:"",data:"",appKey: "jndr89",
    init: function() {
        FastClick.attach(document.body);var _this = this;
        _this.getDownUrl();
        _this.setWindow();
        _this.resize();
        _this.getData();
      
        
        $(document).on('click', '.js_down', function () {
            _this.down();
        });
        $('#js_closeBtn2').click(function () {
            $("#js_box2").hide();
            $(".now-download").html('“直播”安装中...');
            $(".top-bar").css("width", "0.1%");
            $('.alert-btn').show();
            clearTimeout(timer);
            loading = false;
        });
    },
    getDownUrl: function() {
        var _this = this;
        
        if(_this.sysTemInfo() == 'ios') {
            _this.appKey = 'diulrg', _this.qd = 'ios' + _this.qd;
            $('footer a').addClass('ios');
            $('title').html('直播-性感美女直播间');
            $('.appLogo').attr('src','images/logo2.png');
        }
        _this.m=new OpenInstall({
            appKey: this.appKey
        }, {"channel":_this.qd});
    },
    setWindow: function () {
        var winH = $(window).height(),
            winW = $(window).width();
        $('body').height(winH).width(winW);
    },
    resize: function () {
        var that = this;
        $(window).on('resize', function () {
            that.setWindow();
        });
    },
     lazyLoad: function () {
        $("img.lazy").lazyload({
            placeholder: 'images/place.jpg',
            effect: "fadeIn",
            threshold : 500  
        });
    },
    getData: function() {
        var hList='',vList='';

        $.each(data.hot,function(i,o) {
            if(o.isPlay) {
                hList += '<li>'+
            '    <a href="javascript:;">'+
            '        <img class="lazy" data-original="'+o.cover+'">'+
            '    </a>'+
            '</li>';
            }else {
                hList += '<li>'+
                '    <a href="javascript:;">'+
                '        <img class="lazy" data-original="'+o.cover+'">'+
                '        <span class="state">直播中</span>'+
                '        <div class="des">'+
                '            <p class="name">'+o.name+'</p>'+
                '            <p><span>'+o.view+'</span>人在看</p>'+
                '        </div>'+
                '    </a>'+
                '</li>';
            }
        })
        $('.hot ul').html(hList);
        $.each(data.video,function(i,o) {
            vList += '<li>'+
            '    <a href="javascript:;">'+
            '        <span class="pic">'+
            '            <img class="lazy" data-original="'+o.cover+'">'+
            '            <span class="state">空闲</span>'+
            '            <p class="name">'+o.name+'</p>'+
            '        </span>'+
            '        <p class="des">视频看她</p>'+
            '    </a>'+
            '</li>';
        })
        $('.video ul').html(vList);   
        this.lazyLoad();

        $(document).on('click','.js_pop',function() {
            $('.cover,.layer').show();
        }).on('click','.cover',function() {
            $('.cover,.layer').hide();
        })
    },
   
    down: function () {
     
                window.location.href ="/down.html";
           
    },
    weChatRes: function (n) {
        $('.wechat').length&&$('.wechat').remove();
        var html = '<div class="wechat"><img src="' + n + '" alt="点击右上角，然后选择浏览器打开！"/></div>';
        $('body').append(html);
    },
    isWeChat: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    sysTemInfo: function () {
        var us = navigator.userAgent.toLowerCase();
        if ((us.indexOf('android') > -1 || us.indexOf('linux') > -1) || navigator.platform.toLowerCase().indexOf('linux') != -1) {
            return 'android';
        } else if (us.indexOf('iphone') > -1 || us.indexOf('ipad') > -1) {
            return 'ios';
        }
    },
    getQueryString: function (t) {
        var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            e = window.location.search.substr(1).match(n);
        return null != e ? decodeURI(e[2]) : null
    },
    getURLParameter:function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;             
    },
   

}

$(function(){
    livePage.init();
})