// ==UserScript==
// @name        kakaku.com
// @namespace   https://github.com/PRiMENON/
// @description
// @version     0.1
// @match       https://kakaku.com/*/*/itemlist.aspx*
// @icon        https://img1.kakaku.k-img.com/images/kakaku_logo.ico
// @author      PRiMENON
// @grant       none
// ==/UserScript==

(function () {
    'use strict';
    document.querySelectorAll('#compTblList a').forEach(e => {
        e.setAttribute('target', '_blank');
    });
})();
