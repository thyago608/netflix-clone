import React from 'react';
import { Movie } from '../../pages/Dashboard';
import { Container } from './styles';


//Dar commit ao finalizar o componente!!!

interface Props {
    title: string;
    movies: Array<Movie>;

}

export function ListMovie({title, movies}:Props){

   const url = 'https://image.tmdb.org/t/p/w300';

   return(
       <Container>
           <h2>{title}</h2>
                {movies.length > 0 ?? movies.map((movie)=>(
                    <div className="" key={movie.id}>
                        <img src={`${url}${movie.poster_path}`} alt="banner" />
                    </div>
                ))}
       </Container>
   ); 
}