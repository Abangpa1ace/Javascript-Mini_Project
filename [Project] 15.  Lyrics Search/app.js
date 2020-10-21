'use strict';

//Selectors
const search = document.getElementById('search')
const input = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')
const result = document.getElementById('container')

//Event Listeners
search.addEventListener('submit', searchMusic)
searchBtn.addEventListener('click', () => {
    searchBtn.style.transform = 'scale(0.9)'
    setTimeout(() => {searchBtn.style.transform = 'scale(1)'}, 1000)
})

//Functions
async function searchMusic() {
    event.preventDefault();

    const val = input.value;
    const res = await fetch(`http://api.deezer.com/search?limit=15&q=${val}`)
    const list = await res.json();
    console.log(val, list)
}