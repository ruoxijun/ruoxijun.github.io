// 崩溃欺骗
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/ku.png");
        document.title = '╭(°A°`)╮ 别走呀亲~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
        document.title = '(ฅ>ω<*ฅ) 欢迎回来亲~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});