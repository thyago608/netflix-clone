Componente de Filme em Destaque

O mesmo possui uma única propriedade, que é o filme (objeto) que vem de seu elemento superior.

Para definir a imagem do filme em destaque foi utilizado o background-image.
A variável `image` apenas concatena o servidor de onde vem a imagem + a propriedade que guarda o resto do endereço da imagem no servidor.

No arquivo de estilização foi definido posição do background, repetição e o seu tamanho.



# Gradiente

Para fazer o efeito de gradiente na horizontal e vertical, foi utilizado duas divs, que ambas estão ocupando o tamanho de 100% horizontal e 100vh.

A div que faz o gradient na vertical, está utilizando o linear-gradient(to top, #111 10%, transparent 90%)

O preto irá ocupar o tamanho de 10% da vertical, enquanto a transparência irá ocupar 90%.

OBS: O padrão é 50% para cada cor.


A div que faz o gradient na horizontal, se encontra dentro da div que faz o gradiente na vertical.

Foi utilizado a mesma idéia e as mesmas cores, com a diferença na porcentagem que cada cor irá ocupar.


# Metodo Join

Esse método junta todos os elementos de um array em uma string, e retorna essa string.
O mesmo recebe como argumento um 'separador' de elementos'

array.join(', ')



