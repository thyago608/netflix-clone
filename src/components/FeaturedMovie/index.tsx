import React from 'react';
import { Movie } from '../../pages/Dashboard';
import { FiPlus, FiPlay } from "react-icons/fi";
import { Container, MovieInfo, Button } from './styles';

type Props = {
    movie: Movie;
};

export function FeaturedMovie({movie}:Props){
    const image = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
    const date = new Date(movie.first_air_date);
    let genres = [];

    for(let i in movie.genres){
        genres.push(movie.genres[i].name);
    }



    return(
        <Container style={{backgroundImage:`url(${image ? image: ''})`}}>
            <div className="verticalTransparency">
                <div className="horizontalTransparency">
                    <MovieInfo>
                        <header>
                            <h1 className="original-name">{movie.original_name}</h1>
                        </header>
                        <div className="description">
                            <strong className="average">{movie.vote_average} pontos</strong>
                            <strong className="year">{date.getFullYear()}</strong>
                            <span className="number-of-seasons">{movie.number_of_seasons} temporada{
                                movie.number_of_seasons !== 1 ? 's':''}
                            </span>
                            <p>{movie.overview}</p>

                            <div className="container-buttons">
                                <Button>Assistir</Button>
                                <Button>Minha Lista</Button>
                            </div>

                            <div className="filmGenre">
                                <strong>Gêneros: </strong>
                                {genres.join(', ')}
                            </div> 
                        </div>
                    </MovieInfo>
                </div>
            </div>
        </Container>
    );
}
