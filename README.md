/Projeto Final | Backend | {reprograma} + Mercado Livre 

### Introdução
A Brew It Up é uma plataforma que integra pequenas cervejarias e distribuidoras, permitindo a distribuição de pequenas produções em regiões não antes atendidas e maior diversidade e qualidade de produtos para os distribuidores.

### Cenário
Atingimos a marca de mais de 800 cervejarias inscritas no MAPA - Ministério da Agricultura e Produção Agropecuária. Grande parte destas cervejarias não possuem estrutura logística e de atendimento para que consigam expandir suas vendas. Por outro lado, diversas distribuidoras apresentam espaço e capacidade ociosa em sua estrutura logística.

### Rotas/EndPoints
GET /cervejarias Rota que retorna uma lista com todas as cervejarias cadastradas. HTTP 200 

GET /:id/produtos Rota que retorna uma lista de produtos disponíveis de determinada cervejaria. HTTP 200 

GET /distribuidores Rota que retorna uma lista com todas as distribuidoras. HTTP 200 

POST /cervejaria Rota que recebe uma nova cervejaria, adiciona ela a lista e retorna o item criado. HTTP 201 CREATED

PUT /:id/produtos Rota que atualiza a quantidade de um certo item de determinada cervejaria retorna o item atualizado. HTTP 200 

DELETE /:id Rota que deleta um item baseado em seu id. HTTP 204

### Techs: 
HTML + CSS
React
NodeJS
API REST
MongoDB
Heroku

### Sobre mim
Caroline Jandoso, Piracicabana de 27 anos, apixonada por tecnologia, fermentação e viagens. Bióloga de formação, Beer Sommelière por paixão e Web Developer Full Stack por vocação. 

Contato: carol.jandoso@gmail.com
