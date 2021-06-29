// ==UserScript==
// @name         京东晒单查看大图
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  给京东评晒单及评价中的图片添加一个“查看大图”的按钮
// @author       ssyatelandisi
// @match        https://*.jd.com/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @grant        GM_addStyle
/* global        $ */
// ==/UserScript==
(function () {
    "use strict";
    // @ts-ignore
    GM_addStyle(`#openNewImg,#openNewImg2{color:#288cf0;border:2px #288cf0 solid;background-color:rgba(255,255,255,0.75);border-radius:5px;padding:5px;cursor:pointer;position:absolute;top:0;right:0;bottom:auto;left:auto;z-index:999;font-weight:normal}#openNewImg:hover,#openNewImg2:hover{color:#ffffff;border-color:#288cf0;background-color:#288cf0;font-weight:bolder}`);
    //查看晒单大图
    $("body").on("mouseenter", ".photo-wrap", function () {
        const that = this;
        $(".photo-wrap").prepend('<button id="openNewImg"><b>查看大图</b></button>');
        $("button#openNewImg").on("click", function () {
            const regex1 = /n\d{1,2}/;
            const regex2 = /s\d+x\d+_/;
            const imgLink = $(that).find(".J-photo-img")[0].src;
            let newImgLink = imgLink.replace(regex1, "shaidan");
            newImgLink = newImgLink.replace(regex2, "");
            window.open(newImgLink);
            return false;
        });
        return false;
    });
    $("body").on("mouseleave", ".photo-wrap", function () {
        $("button#openNewImg").remove();
        return false;
    });
    //查看评论大图
    $("body").on("mouseenter", ".pic-view.J-pic-view", function () {
        const that = this;
        $(".pic-view.J-pic-view").prepend('<button id="openNewImg2"><b>查看大图</b></button>');
        $("button#openNewImg2").on("click", function () {
            const regex2 = /s\d+x\d+_/;
            const imgLink = $(that).find("img")[0].src;
            const newImgLink = imgLink.replace(regex2, "");
            window.open(newImgLink);
            return false;
        });
    });
    $("body").on("mouseleave", ".pic-view.J-pic-view", function () {
        $("button#openNewImg2").remove();
        return false;
    });
})();
