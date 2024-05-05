// ==UserScript==
// @name         b站增加1.1倍速
// @namespace    https://github.com/Penguin-Killer
// @version      0.3.1
// @description  将0.75倍速修改为1.1倍速
// @author       Penguin-Killer
// @match        *://*.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @license      MIT

// ==/UserScript==
(function() {
    'use strict';

    function modifyPlaybackSpeedOption() {
        //var element = document.querySelector("#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-control-wrap > div.bpx-player-control-entity > div.bpx-player-control-bottom > div.bpx-player-control-bottom-right > div.bpx-player-ctrl-btn.bpx-player-ctrl-playbackrate > ul > li:nth-child(5)");
        var element = document.querySelector('.bpx-player-ctrl-playbackrate-menu-item[data-value="0.75"]');
        if (element) {
            element.textContent = '1.1x';
            element.setAttribute('data-value', '1.1');
            console.log('1.1倍速修改成功！');
            // 触发点击事件
            element.click();
        } else {
            console.log('未找到要修改的元素。');
        }
    }

    // 在页面加载完成后再运行脚本
    window.addEventListener('load', function() {
        // 添加延迟以确保页面完全加载
        setTimeout(modifyPlaybackSpeedOption, 2000); // 这里设置了2秒延迟，你可以根据需要调整
    });
})();
