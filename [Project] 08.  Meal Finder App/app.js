'use strict';

//Selectors
const search = document.querySelector('.search')
const schBtn = document.querySelector('.search-btn')
const rdmBtn = document.querySelector('.random-btn')
const schWord = document.querySelector('.search-word')
const result = document.querySelector('.result-zone')

//Event Listeners
schBtn.addEventListener('click', showMeals)
rdmBtn.addEventListener('click', randomMeals)

//Functions
async function showMeals() {
    clearResult();
    result.classList.remove('rdm-mode')

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`);
    const data = await res.json();
    const meals = data.meals;
    console.log(meals)

    if (search.value === "") {
        alert('검색어를 입력해주세요!');
        return;
    }
    else {
        schWord.innerText = `Search results for '${search.value}' : `
        for (let i=0 ; i<meals.length ; i++) {
            const meal = document.createElement('div')
            meal.className = 'meal'
            meal.style.background = `url('${meals[i].strMealThumb}')`
            meal.style.backgroundSize = '100%'
            meal.style.backgroundRepeat = 'no-repeat'
            meal.innerHTML = `<a href="${meals[i].strYoutube}"><span>${meals[i].strMeal}</span></a>`
            result.appendChild(meal)
        }
    }
}

async function randomMeals() {
    clearResult();
    result.classList.add('rdm-mode');

    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const data = await res.json()
    const rdmeal = data.meals[0];
    console.log(rdmeal);

    schWord.innerText = `${rdmeal.strMeal}`
    result.innerHTML = `
        <img src= ${rdmeal.strMealThumb} class="rdm-img">
        <div class="rdm-contents">
            <div class="rdm-src">${rdmeal.strCategory}<br><br>${rdmeal.strArea}</div>
            <p class="rdm-inst">${rdmeal.strInstructions}</p>
        </div>
    `

    const ul = document.createElement('ul')
    ul.innerHTML = '<p>Ingredient</p>'
    result.appendChild(ul)
    for (let i=1 ; i<21 ; i++) {
        let ing = rdmeal[`strIngredient${i}`]
        let msr = rdmeal[`strMeasure${i}`]
        if (ing === null || ing === "") {
            break;
        }
        let li = document.createElement('li')
        li.innerText = `${ing} - ${msr}`
        ul.appendChild(li)
    }
}

function clearResult() {
    schWord.innerText = "";
    result.innerHTML = "";
}
