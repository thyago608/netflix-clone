import React from 'react';
import { Movie } from '../../pages/Dashboard';
import { Container, MovieInfo } from './styles';

type Props = {
    movie: Movie;
};

export function FeaturedMovie({movie}:Props){
    const image = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

    return(
        <Container style={{backgroundImage:`url(${image})`}}>
            <div className="verticalTransparency">
                <div className="horizontalTransparency">
                    <MovieInfo>

                    </MovieInfo>

                </div>
            </div>
        </Container>
    );
}
