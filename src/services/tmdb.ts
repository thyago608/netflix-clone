/*
    - Originais da Netflix
    - Recomendados ( Trending )
    - Em Alta (Top Rated)
    - Ação
    - Comédia
    - Terror
    - Romance
    - Documentários

*/

const baseURL = 'https://api.themoviedb.org/3';
const key = 'ac5bf2b6c32a9e4481e64e6e2077f3c5';

async function loadMovies(endpoint:string){
    const req = await fetch(`${baseURL}${endpoint}`);
    const data = await req.json();

    return data;
}

const tmdb = {
    //213: Netflix
    getHomeList: async()=>{
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await loadMovies(`/discover/tv/?with_network=213&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await loadMovies(`/trending/all/week?language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await loadMovies(`/movie/top_rated?language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await loadMovies(`/discover/movie?with_genres=28&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items:await loadMovies(`/discover/movie?with_genres=35&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items:await loadMovies(`/discover/movie?with_genres=27&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items:await loadMovies(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${key}`)
            },
            {
                slug: 'documentaries',
                title: 'Documentários',
                items:await loadMovies(`/discover/movie?with_genres=99&language=pt-BR&api_key=${key}`)
            }
        ]
    },
    getMovieInfo: async(id:string, type:'tv'|'movie')=>{
        let info = null;

        if(id){
            switch(type){
                case 'movie':
                    info = await loadMovies(`/movie/${id}?language=pt-BR&api_key=${key}`);
                break;

                case 'tv':
                    info = await loadMovies(`/tv/${id}?language=pt-BR&api_key=${key}`);
                break;
            }
        }


    }
}

export default tmdb;