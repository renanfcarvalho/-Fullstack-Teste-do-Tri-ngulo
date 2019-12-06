# Fullstack Teste do Triangulo
Dado um triângulo de números, encontre o total máximo de cima para baixo.
# Projeto
Primeiramente será configurado o banco não-relacional MongoDB, com a utilização do Node.js e com o framework express, para assim aceitar os 
o dados que serão salvos, criando dois documentos, um denominado triângulo, que contará com o ID e a lista com os valores referentes aos nós do Triângulo.
Outro documento será criado para armazenar as etapas do processamento com o tempo de execução e o método utilizado para resolução da etapa.

No ambiente foi configurando um campo para que o usuário digite os valores, ao clicar no botão, as informações são inseridas no banco, ele é redirecionado para uma página, que consulta o array , retorna o array , uma tabela com o dados desejados e a soma do melhor caminho.

## Desenvolvimento Full-stack

Para a resolução do problema, a primeira ideia que vem a mente é utilização de força bruta, mas nos teste realizados, mostrou-se um código eficiente para triângulos de altura pequena, porém sua complexibilidade aumenta muito de acordo com que a sua altura for aumentando.
Por isto tornou-se mais viável a utilização da programação dinâmica para assim fazer uma aplicação que responda de uma forma mais rápida.

## Front-end
Para facilitar para o usuário possibilitou-se que ele digite apenas os valores, e a aplicação que se precupe em montar o array. Foi criado um input de números, onde o usuário vai digitar os valores, depois os dados são tratados, para que seja enviados em forma de array multi- dimensional para o banco. Toda parte CSS tbm foi desenvolvida.

## Back-end
O arquivo db.js foi criado para manipulação do banco com suas devidas funções, as rotas foram estabelecidas para a funções Get e Post ocorram.

## Teste

As funções foram testadas com Arrays de diferentes tamanhos e com o valores variados, assim dentro das funções obtevesse o retorno esperado.




