import React from 'react';
import { useEffect, useState } from 'react';
import tmdb from '../../services/tmdb';
import { ListMovie } from '../../components/ListMovie';
import { FeaturedMovie } from '../../components/FeaturedMovie';
import { Container } from './styles';


export type Movie = {
    id:number; 
    poster_path:string;   //Capa do filme
    original_title:string;  //Título do filme
};

type MovieCategories = {
    slug: string;
    title: string;
    items: {
        results:Movie[];
    };
};

export function Dashboard(){
    const [moviesCategories, setMoviesCategories] = useState<MovieCategories[]>([]);
    const [featuredMovie, setFeaturedMovie] = useState<MovieCategories>({} as MovieCategories);

    useEffect(()=>{
        const loadMovies = async() =>{
            const data = await tmdb.getHomeList();
            setMoviesCategories(data);

            //Filtrando o destaque
            const [filteringHighlighted] = data.filter(category => category.slug === 'originals');

            //Gerando número aleatório de acordo com o tamanho do array de filmes em destaque
            const randomSelection = Math.floor(Math.random() * filteringHighlighted.items.results.length - 1);

            //Verificando se o valor gerado é negativo
            const allowedIndex = randomSelection > 0 ? randomSelection: 0;

            //Filme aletório
            const chosen = filteringHighlighted.items.results[allowedIndex];

        }

        loadMovies();
    },[])


    return(
        <Container>
            {moviesCategories.map((movie)=>(
                <ListMovie key={movie.title} title={movie.title} movies={movie.items.results}/>
            ))}
        </Container>
    );
}