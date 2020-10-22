'use strict';

//Selectors
const apiURL = 'https://api.lyrics.ovh';
let songs = [];
let prevURL, nextURL;

const search = document.getElementById('search')
const input = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')
const result = document.getElementById('container')
const moreBtn = document.getElementById('more-btn')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

//Event Listeners
search.addEventListener('submit', searchSongs)
searchBtn.addEventListener('click', () => {
    searchBtn.style.transform = 'scale(0.9)'
    setTimeout(() => {searchBtn.style.transform = 'scale(1)'}, 1000)
})

//Functions
async function searchSongs() {
    event.preventDefault();
    const bfjson = await fetch(`${apiURL}/suggest/${input.value}`);
    const afjson = await bfjson.json();
    const list = afjson.data;
    songs = list.map(song => {
        return {
            artist: song.artist.name, 
            title: song.title
        }})
    prevURL = afjson.prev;
    nextURL = afjson.next;

    console.log(afjson)
    loadSongs(songs, prevURL, nextURL)
}

function loadSongs(list, prev, next) {
    result.innerHTML = '';
    if (list) {
        list.forEach(song => {
            const a = song.artist;
            const t = song.title;
            const songInfo = document.createElement('div')
            songInfo.className = 'song'
            songInfo.innerHTML = `
                <span><strong>${a}</strong> - ${t}</span>
                <button class="btn lyric-btn">Get Lyrics</button>`
            const lyricBtn = songInfo.querySelector('.lyric-btn')
            lyricBtn.addEventListener('click', (e) => {
                e.target.style.transform = 'scale(0.9)'
                setTimeout(() => {e.target.style.transform = 'scale(1)'}, 1000)
                searchLyrics(`https://api.lyrics.ovh/v1/${a}/${t}`, a, t)
            })
            result.appendChild(songInfo)
        })
    }
    if (prev) {
        prevBtn.style.display = 'block';
        prevBtn.addEventListener('click', getMoreSongs(`${prev}`))
    }
    if (next) {
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', getMoreSongs(`${next}`))
    }
}

async function searchLyrics(ad, artist, title) {
    result.innerHTML = '';
    moreBtn.innerHTML = '';
    const bfjson = await fetch(ad)
    const afjson = await bfjson.json();
    const lyricsBox = document.createElement('div')
    lyricsBox.className = `lyrics-box`
    lyricsBox.innerHTML = `
    <h2><strong>${artist}</strong> - ${title}</h2>
    <br><br>
    <p class = 'lyrics'></p>`
    lyricsBox.querySelector('lyrics').innerText = afjson.lyrics;
    result.appendChild(lyricsBox)
}

function getMoreSongs(ad) {
    console.log(ad);
}
