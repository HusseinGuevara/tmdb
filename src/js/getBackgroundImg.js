'use strict';

// HTML Elements
const backgroundImg = document.querySelector('.top_content_wrapper');

// Get background images behind the scenes while HTML continues to load

const API_KEY = 'af9ee41cb42070ee6be415fb1d2ff113';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key='
const getBackgroundImg = async function() {
   
    const resMovies = await fetch(`${url + API_KEY}`);
    const resMoviesObj = await resMovies.json();  

    const backdropPaths = resMoviesObj.results.map((movie) => {
        return movie.backdrop_path
    })
    console.log(backdropPaths[2])
    document.addEventListener('load', loadBackgroundImg(backdropPaths))
}
getBackgroundImg();

// Load a random image into container after page has loaded
const loadBackgroundImg = async function(array) {

    // Randomize index from array
    function random(arr) {
        return arr[Math.floor(Math.random()*arr.length)]
    }
    backgroundImg.style.background = `linear-gradient(to right, rgba(3, 37, 65, .6) 0%, rgba(3, 37, 65, .7) 100%), url('${IMG_API + random(array)}')`
    
}