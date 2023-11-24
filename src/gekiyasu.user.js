// ==UserScript==
// @name        gekiyasu
// @namespace
// @description
// @version     0.1
// @match       http://buy.livedoor.biz/*
// @icon        http://buy.livedoor.biz/favicon.ico
// @author      PRiMENON
// @grant       none
// ==/UserScript==

'use strict';

// カラー・文字サイズ・行間調整
document.querySelectorAll('a').forEach(e => {
    e.style.color = 'blue';
});

document.querySelectorAll('#content .date').forEach(e => {
    e.style.fontSize = '1rem';
    e.style.lineHeight = '1.25';
    e.style.color = '#000';
});

document.querySelectorAll('.blogbody .title').forEach(e => {
    e.style.fontSize = '1rem';
    e.style.lineHeight = '1.25';
    e.style.color = '#000';
});

document.querySelectorAll('.blogbody').forEach(e => {
    e.style.fontSize = '1rem';
    e.style.lineHeight = '1.25';
});

document.querySelectorAll('.sidetitle').forEach(e => {
    e.style.fontSize = '1rem';
    e.style.lineHeight = '1.25';
});

document.querySelectorAll('.sidewrapper .side').forEach(e => {
    e.style.fontSize = '1rem';
    e.style.lineHeight = '1.25';
});

document.querySelectorAll('.blogbody .posted').forEach(e => {
    e.style.fontSize = '1rem';
    e.style.lineHeight = '1.25';
});

document.querySelectorAll('.pagetop').forEach(e => {
    e.style.fontSize = '1rem';
    e.style.lineHeight = '1.25';
});

// オートロード
let pageCount = 0;


window.addEventListener('load', function() {
    console.log('hello!');
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'autoload');
    document.querySelector('.pagetop').before(newDiv);

    fetch('http://buy.livedoor.biz/?p=2')
        .then(res => res.text())
        .then(data => {
                const parser = new DOMParser();
                const html = parser.parseFromString(data, "text/html");
                const postElements = html.querySelectorAll('.blogbody');
                const file_area = document.getElementById('autoload');
                for(let post of postElements){
                    file_area.appendChild(post);
                }
            }
        );
})
