Componente de listagem de filmes [horizontal]

O mesmo possui duas propriedades:  
title = Título da lista de filmes
movies = Filmes


# Capa do filme

Na const url, foi atribuído de maneira fixa o servidor de onde virá a imagem de capa do filme, concatenando com um endereço individual de cada filme.

const url = 'https://image.tmdb.org/t/p/w300';

w300 = É o tamanho da imagem, nesse caso 300px

Caso fosse utilizado o valor 'original', a imagem iria vir com o seu tamanho original


# Movimentando a lista de filmes

Para isso foi necessário criar 3 elementos:

`Movies` Componente que irá conter a lista de filmes.

`List` Componente que será a lista de filmes.

`.movie` - Elemento que irá agrupar as informações de cada filme.


Sendo que o `Movies` terá um `overflow-x:hidden`, pois caso o tamanho do seu conteúdo for maior a sua largura o mesmo será cortado.

* DICA:
    Na imagem dentro de `.movie`, foi utilizado um `scale(0.9)`, isso fará a imagem ter 90% do tamanho do seu elemento pai. Mas em seu hover será `scale(1)`, isso fará a imagem voltar a possuir os 100% do seu elemento pai.


Foi dado um margin-top negativo, para que o mesmo suba no componente `FeatureMovie`. Onde no mesmo, foi dado um padding-bottom, para que o conteúdo de `ListMovie` não fique em cima do conteúdo de `FeatureMovie`.