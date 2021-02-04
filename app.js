'use strict';
const moviesList = document.querySelector('#movies');
const inputInfo = document.querySelector('#inputInfo');
const bnt = document.querySelector('#btn');

bnt.addEventListener('click', function(event){
event.preventDefault();
moviesList.innerHTML = '';
    
    let url = `http://www.omdbapi.com/?s=${inputInfo.value}&apikey=438c427a`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        if (data.Response){
            data.Search.forEach(movie => {
                moviesList.insertAdjacentHTML('beforeend', `
                <li>
                <img src="${movie.Poster}"/> 
                <h4>${movie.Title}</h4>
                </li>
                `);
            });
        }
    })
    .catch((err) => {
        console.log('mon erreur est:' + err);
    });

});