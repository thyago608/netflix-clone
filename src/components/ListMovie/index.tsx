import React,{ useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Movie } from '../../pages/Dashboard';
import { Container, List, Movies} from './styles';


//Dar commit ao finalizar o componente!!!

interface Props {
    title: string;
    movies: Movie[];
}

export function ListMovie({title, movies}:Props){

   const [scrollX, setScrollX] = useState(-400);
   const url = 'https://image.tmdb.org/t/p/w300';

   function handleClickPrevious(){
       //window.innerWidth = Largura de tela do usuário
       //Nesse caso está sendo feito um arredondamento da metade da largura de tela do usuário
        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    /* 
        - 400 + 150 = - 250
        - 250 + 150 = - 100
        - 100 + 150 = + 50
        + 50 + 150 = + 200

    */
    }
   
   function handleClickNext(){
       //Valor que a lista irá se mover
        let x = scrollX - Math.round(window.innerWidth / 2);
        //Largura de lista
        let listWidth = movies.length * 150;
        
        if((innerWidth - listWidth) > x){
            x = (window.innerWidth - listWidth) - 60;
        }

        setScrollX(x);
    }
   
   return(  
       <Container>
                <h2>{title}</h2>
                <Movies>
                    <button 
                        className="previous"
                        onClick={handleClickPrevious}    
                    >
                        <FiChevronLeft/>
                    </button>
                    <button 
                        className="next"
                        onClick={handleClickNext}
                    >
                        <FiChevronRight/>
                    </button>
                    <List style={
                        {
                            width: movies.length * 150,
                            marginLeft:scrollX
                         }}>
                        {movies.length > 0 && movies.map((movie)=>(
                            <div className="movie" key={movie.id}>
                                <img src={`${url + movie.poster_path}`} alt="banner" />
                            </div>
                        ))}
                    </List>
                </Movies>
       </Container>
   ); 
}