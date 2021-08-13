Componente de listagem de filmes [horizontal]

O mesmo possui duas propriedades:  
title = Título da lista de filmes
movies = Filmes


# Capa do filme

Na const url, foi atribuído de maneira fixa o servidor de onde virá a imagem de capa do filme, concatenando com um endereço individual de cada filme.

const url = 'https://image.tmdb.org/t/p/w300';

w300 = É o tamanho da imagem, nesse caso 300px

Caso fosse utilizado o valor 'original', a imagem iria vir de acordo 