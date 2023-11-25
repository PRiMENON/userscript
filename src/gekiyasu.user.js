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

// styles
function setStyle(){
    let $fontSize = '1rem';
    let $lineHeight = '1.45';
    document.querySelectorAll('a').forEach(e => {
        e.style.color = 'blue';
    });

    document.querySelectorAll('#content .date').forEach(e => {
        e.style.fontSize = '1rem';
        e.style.lineHeight = $lineHeight;
        e.style.color = '#000';
    });

    document.querySelectorAll('.blogbody .title').forEach(e => {
        e.style.fontSize = $fontSize;
        e.style.lineHeight = $lineHeight;
        e.style.color = '#000';
    });

    document.querySelectorAll('.blogbody').forEach(e => {
        e.style.fontSize = $fontSize;
        e.style.lineHeight = $lineHeight;
    });

    document.querySelectorAll('.sidetitle').forEach(e => {
        e.style.fontSize = $fontSize;
        e.style.lineHeight = $lineHeight;
    });

    document.querySelectorAll('.sidewrapper .side').forEach(e => {
        e.style.fontSize = $fontSize;
        e.style.lineHeight = $lineHeight;
    });

    document.querySelectorAll('.blogbody .posted').forEach(e => {
        e.style.fontSize = $fontSize;
        e.style.lineHeight = $lineHeight;
    });

    document.querySelectorAll('.pagetop').forEach(e => {
        e.style.fontSize = $fontSize;
        e.style.lineHeight = $lineHeight;
    });
}

// infinite scroll
let $loopCount = 0;
let $pageNumber = 2;
function loadPage(){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'autoload');
    document.querySelector('.pagetop').before(newDiv);

    (async () => {
        const decodeAsText = (arrayBuffer, encoding = null) => new TextDecoder(encoding).decode(arrayBuffer);
        const parseHTML = html => new DOMParser().parseFromString(html, 'text/html');

        const url = 'http://buy.livedoor.biz/?p=' + $pageNumber;
        console.log('request=>' + url);
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const html = decodeAsText(arrayBuffer, 'euc-jp');
        const dom = parseHTML(html);
        const postElements = dom.querySelectorAll('#content > *');
        const file_area = document.getElementById('autoload');
        for(let post of postElements){
            file_area.appendChild(post);
        }
        setStyle()
        $pageNumber++;
    })();
}

// scroll trigger
window.addEventListener('scroll', function() {
    let pageBottom = document.body.scrollHeight - window.innerHeight;
    let  currentPosition = window.pageYOffset;

    if(pageBottom <= currentPosition){
        loadPage()
    }
})

setStyle()
