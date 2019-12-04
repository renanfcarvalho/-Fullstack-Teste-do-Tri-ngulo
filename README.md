# Fullstack Teste do Triangulo
Dado um triângulo de números, encontre o total máximo de cima para baixo.
# Projeto
Primeiramente será configurado o banco não-relacional MongoDB com a utilização do Node.js com o framework express, para assim aceitar os 
o dados que serão salvos criando dois documentos um denominado triângulo que contará com o ID e a lista com os valores referentes aos nós do Triângulo.
Outro documento será criado para armazenar as etapas do processamento com o tempo de execução e o método utilizado para resolução da etapa.

O ambiente foi configurando um campo para que o usuário digite os valores foi criado ao clicar no botão, as informações são inseridas no banco, ele é redirecionado para uma página, que consulta o array , retorna o array e uma tabela com o dados desejados.

## Desenvolvimento Full-stack

Para a resolução do problema a primeira ideia que vem a mente é utilização de força bruta, mas nos teste realizados, mostrou-se um código eficiente para triângulos de altura pequena, porém sua complexibilidade aumenta muito de acordo com que a sua altura for aumentando.
Por isto tornou-se mais viável a utilização da programação dinâmica para assim fazer uma aplicação que responda de uma forma mais rápida.

