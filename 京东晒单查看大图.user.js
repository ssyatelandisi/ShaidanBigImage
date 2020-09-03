// ==UserScript==
// @name         京东晒单查看大图
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  给京东评晒单及评价中的图片添加一个“查看大图”的按钮
// @author       ssyatelandisi
// @match        https://*.jd.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //查看晒单大图
    $("body").delegate(".photo-wrap", "mouseenter", function () {
        var that = this;
        $(".photo-wrap").prepend('<button id="openNewImg" style="color:#288CF0;border:2px #288CF0 solid;background-color:rgba(255, 255, 255, .75);border-radius:5px;padding:5px;position:absolute;top:0;right:0;z-index:999"><b>查看大图</b></button>');
        $("button#openNewImg").hover(function () {
            $(this).css({
                "color": "#FFFFFF",
                "border-color": "#288CF0",
                "background-color": "#288CF0",
                "font-weight": "bolder"
            });
        }, function () {
            $(this).css({
                "color": "#288CF0",
                "border-color": "#288CF0",
                "background-color": "rgba(255, 255, 255, .75)",
                "font-weight": "normal"
            });
        });
        $("button#openNewImg").click(function () {
            var regex1 = /n\d{1,2}/;
            var regex2 = /s\d+x\d+_/;
            var imgLink = $(that).find(".J-photo-img")[0].src;
            var newImgLink = imgLink.replace(regex1, "shaidan");
            newImgLink = newImgLink.replace(regex2, "");
            window.open(newImgLink);
        })
    });
    $("body").delegate(".photo-wrap", "mouseleave", function () {
        $("button#openNewImg").remove();
    });
    //查看评论大图
    $("body").delegate(".pic-view.J-pic-view", "mouseenter", function () {
        var that = this;
        $(".pic-view.J-pic-view").prepend('<button id="openNewImg2" style="color:#288CF0;border:2px #288CF0 solid;background-color:rgba(255, 255, 255, .75);border-radius:5px;padding:5px;position:absolute;top:0;right:0;z-index:999"><b>查看大图</b></button>');
        $("button#openNewImg2").hover(function () {
            $(this).css({
                "color": "#FFFFFF",
                "border-color": "#288CF0",
                "background-color": "#288CF0",
                "font-weight": "bolder"
            });
        }, function () {
            $(this).css({
                "color": "#288CF0",
                "border-color": "#288CF0",
                "background-color": "rgba(255, 255, 255, .75)",
                "font-weight": "normal"
            });
        });
        $("button#openNewImg2").click(function () {
            var regex2 = /s\d+x\d+_/;
            var imgLink = $(that).find("img")[0].src;
            var newImgLink = imgLink.replace(regex2, "");
            window.open(newImgLink);
        });
    })
    $("body").delegate(".pic-view.J-pic-view", "mouseleave", function () {
        $("button#openNewImg2").remove();
    });
})();