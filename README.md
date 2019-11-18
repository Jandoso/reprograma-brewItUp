Projeto Final | Backend | {reprograma} + Mercado Livre 

### Introdução
A Brew It Up é uma plataforma que integra pequenas cervejarias e distribuidoras.O objetivo é permitir a distribuição de pequenas produções em regiões não antes atendidas, além de prover maior diversidade, disponibilidade e qualidade de produtos para os distribuidores.

### Cenário
Em 2019, atingimos a marca de mais de 800 cervejarias inscritas no MAPA - Ministério da Agricultura e Produção Agropecuária. Grande parte destas cervejarias não possuem estrutura de logística e atendimento, dificultando a expansão de suas vendas. Outra questão importante que preocupa os pequenos produtores é com a qualidade com que seus produtos irão chegar até os pontos de vendas, afinal há uma grande tendência de produção de cervejas não pasteurizadas, necessitando de cadeia refrigerada. </br>
Por outro lado, diversas distribuidoras apresentam capacidade ociosa em sua estrutura logística e de atendimento ao cliente. Algumas destas distribuidoras também enfrantam a falta de produtos no mercado, prejudicando o atendimento aos pontos de vendas. 

### Rotas/EndPoints
GET /cervejarias Rota que retorna uma lista com todas as cervejarias cadastradas. HTTP 200 

GET /cervejarias/:id/produtos Rota que retorna uma lista de produtos disponíveis de determinada cervejaria. HTTP 200 

GET /distribuidores Rota que retorna uma lista com todas as distribuidoras cadastradas. HTTP 200 

POST /cervejaria Rota que recebe uma nova cervejaria, adiciona ela a lista e retorna o item criado. HTTP 201 CREATED

PUT /cervejarias/:id/produtos Rota que atualiza a quantidade de um certo item de determinada cervejaria retorna o item atualizado. HTTP 200 

DELETE /:id Rota que deleta um item baseado em seu id. HTTP 204

### Techs e conceitos aplicados: 
- SCRUM
- UX - Protótipo com Marvel
- HTML + CSS
- React
- NodeJS
- API REST
- MongoDB
- Heroku

### Sobre mim
Caroline Jandoso, Piracicabana de 27 anos, apaixonada por tecnologia, fermentação e viagens. Bióloga de formação, Beer Sommelière por paixão e Web Developer Full Stack por vocação. 

Contato: carol.jandoso@gmail.com
