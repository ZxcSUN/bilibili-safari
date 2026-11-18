
// ==UserScript==
// @name         B站网页播放优先
// @namespace    bilibili-safari
// @version      1.0.0
// @description  尝试阻止B站视频链接唤起App
// @match        https://www.bilibili.com/*
// @match        https://m.bilibili.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href]');
    if (!a) return;

    const u = new URL(a.href, location.href);

    if (
      /(^|\.)bilibili\.com$/i.test(u.hostname) &&
      u.pathname.startsWith('/video/')
    ) {
      a.removeAttribute('target');
    }
  }, true);
})();
