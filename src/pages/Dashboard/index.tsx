import React from 'react';
import { useEffect, useState } from 'react';
import tmdb from '../../services/tmdb';
import { ListMovie } from '../../components/ListMovie';
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
  
    useEffect(()=>{
        const loadMovies = async() =>{
            const data = await tmdb.getHomeList();

            setMoviesCategories(data);
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