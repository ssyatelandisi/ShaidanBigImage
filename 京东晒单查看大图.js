// ==UserScript==
// @name         京东晒单查看大图
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ssyatelandisi
// @match        https://*.jd.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("body").delegate("#comment-1>.com-table-main>.J-comments-showImgSwitch-wrap.comments-showImgSwitch-wrap>.showContent-viewer.clearfix>.photo-viewer>.photo-wrap", "mouseenter", function () {
        $(".photo-wrap").prepend("<button id='openNewImg' style='padding: 5px;position: absolute;top:0;right:0;z-index: 999'>查看原图</button>");
        $("button#openNewImg").click(function () {
            var regex1 = /n\d{1,2}/;
            var regex2 = /s\d+x\d+_/;
            var imgLink = $("#comment-1>.com-table-main>.J-comments-showImgSwitch-wrap.comments-showImgSwitch-wrap>.showContent-viewer.clearfix>.photo-viewer>.photo-wrap>.J-photo-img")[0].src;
            var newImgLink = imgLink.replace(regex1, "shaidan");
            newImgLink = newImgLink.replace(regex2, "");
            window.open(newImgLink);
        })
    });
    $("body").delegate("#comment-1>.com-table-main>.J-comments-showImgSwitch-wrap.comments-showImgSwitch-wrap>.showContent-viewer.clearfix>.photo-viewer>.photo-wrap", "mouseleave", function () {
        $("button#openNewImg").remove();
    });
})();