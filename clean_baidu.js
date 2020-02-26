// ==UserScript==
// @name         Clean_Baidu
// @namespace    None
// @version      0.0.7
// @description  干掉百度个人认为多余的内容，让百度看起来像一个搜索引擎该有的样子。
// @author       XenoAmess
// @match        http://www.baidu.com/*
// @match        https://www.baidu.com/*
// @match        http://m.baidu.com/*
// @match        https://m.baidu.com/*
// @match        http://wap.baidu.com/*
// @match        https://wap.baidu.com/*
// @run-at       document-start
// @grant        none
// @supportURL   https://github.com/XenoAmess/EnablePIP.git
// ==/UserScript==

var REFRESH_TIME = 500;
var STRING_SELECTORS = [];
STRING_SELECTORS[0] = "div#s_wrap > div#s_main > div#s_mancard_main";
STRING_SELECTORS[1] = "div.blank-frame > div.center-content";
STRING_SELECTORS[2] = "div.ad-block";
STRING_SELECTORS[3] = "div.cr-content > div.FYB_RD";
STRING_SELECTORS[4] = "div#content_right > div.bdvideo-entry";
STRING_SELECTORS[5] = "a.index-banner.square-banner-bgicon";

function preProcess() {
    var cssString = "";
    for (var i = 0; i < STRING_SELECTORS.length; i++) {
        cssString += STRING_SELECTORS[i] + ' {display: none !important}\n';
    }
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.rel = 'stylesheet';
    styleSheet.innerText = cssString
    document.head.appendChild(styleSheet)
}

function doIt() {
    try {
        for (var i = 0; i < STRING_SELECTORS.length; i++) {
            $(STRING_SELECTORS[i]).remove();
        }
    } catch (err) {
    }
}

(function () {
    'use strict';
    if (!window.jQuery) {
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//s1.hdslb.com/bfs/static/jinkela/long/js/jquery/jquery1.7.2.min.js";
        document.head.appendChild(oScript);
    }
    preProcess();
    window.onload = window.setInterval(doIt, REFRESH_TIME);
})();