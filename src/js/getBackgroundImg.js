'use strict';

// Get background images behind the scenes while HTML continues to load

const getBackgroundImg = async function() {
    const API_KEY = 'af9ee41cb42070ee6be415fb1d2ff113';
    const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key='
    const resMovies = await fetch(`${url + API_KEY}`);
    const resMoviesObj = await resMovies.json();  

    const backdropPaths = resMoviesObj.results.map((movie) => {
        console.log(movie.backdrop_path)
    })
    console.log(backdropPaths)
}
getBackgroundImg();
