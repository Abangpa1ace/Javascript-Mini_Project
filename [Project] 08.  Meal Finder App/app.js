'use strict';

//Selectors
const search = document.querySelector('.search')
const schBtn = document.querySelector('.search-btn')
const rdmBtn = document.querySelector('.random-btn')
const schWord = document.querySelector('.search-word')
const result = document.querySelector('.result-zone')

//Event Listeners

schBtn.addEventListener('click', showMeals)

//Functions
async function showMeals() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`);
    const data = await res.json();
    const meals = data.meals;
    console.log(meals)

    schWord.innerText = `Search results for '${search.value}':`
    for (let i=0 ; i<meals.length ; i++) {
        const meal = document.createElement('div')
        meal.className = 'meal'
        meal.innerHTML = `<span>${meals[i].strMeal}</span>`
        meal.style.backgroundImage = `url('${meals[i].strMealThumb}')`
        meal.style.backgroundSize = '100%'
        meal.style.backgroundRepeat = 'no-repeat'
        result.appendChild(meal)
    }
}
