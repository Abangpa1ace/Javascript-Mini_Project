'use strict';

//Selectors
let postIndex = 1;
let postList = [];
const input = document.querySelector('.input-bar')
const postArea = document.querySelector('.post-area')
const post = document.querySelectorAll('.post')
const postTitle = document.querySelectorAll('.post-title')
const loader = document.querySelector('.loader')


addPosts();
window.onscroll = checkScroll;

//Functions
async function addPosts() {
    for (let i=0 ; i<5 ; i++) {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postIndex}`)
        const res = await data.json();
        postList.push(res)
        postIndex++;
    }
    loadPosts(postList)
    loader.classList.remove('loading')
}

function loadPosts(list) {
    postArea.innerHTML = '';
    for (let i=0 ; i<list.length ; i++) {
        const newpost = document.createElement('div')
        newpost.className = `post post${list[i].id}`
        newpost.innerHTML = `
            <div class="post-num">${list[i].id}</div>
            <h2 class="post-title">${list[i].title}</h2>
            <p class="post-letter">${list[i].body}</p>`
        postArea.appendChild(newpost);
    }
}

function checkScroll() {
    if ((document.documentElement.scrollHeight-document.documentElement.scrollTop) === document.documentElement.clientHeight) {
        loader.classList.add('loading')
        addPosts()
    }
}
