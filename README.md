Projeto Final | Backend | {reprograma} + Mercado Livre 

### Introdução
A Brew It Up é uma plataforma que integra pequenas cervejarias e distribuidoras.O objetivo é permitir a distribuição de pequenas produções em regiões não antes atendidas, além de prover maior diversidade, disponibilidade e qualidade de produtos para os distribuidores.

### Cenário
Em 2019, atingimos a marca de mais de 800 cervejarias inscritas no MAPA - Ministério da Agricultura e Produção Agropecuária. Grande parte destas cervejarias não possuem estrutura de logística e atendimento, dificultando a expansão de suas vendas. Outra questão importante que preocupa os pequenos produtores é com a qualidade com que seus produtos irão chegar até os pontos de vendas, afinal há uma grande tendência de produção de cervejas não pasteurizadas, necessitando de cadeia refrigerada. </br>
Por outro lado, diversas distribuidoras apresentam capacidade ociosa em sua estrutura logística e de atendimento ao cliente. Algumas destas distribuidoras também enfrantam a falta de produtos no mercado, prejudicando o atendimento aos pontos de vendas. 

### Rotas/EndPoints

#### Cervejarias

GET /api/cervejarias Rota que retorna uma lista com todas as cervejarias cadastradas. HTTP 200 OK 

POST /api/cervejarias/registro Rota para registro de login e senha de cervejarias. HTTP 201 CREATED 

POST /api/cervejarias Rota para cadastro completo de cervejarias HTTP 201 CREATED

POST /api/cervejarias/login Rota para login de cervejarias HTTP 200 OK

GET /api/cervejarias/logout Rota para logout de cervejarias HTTP 200 0K

PUT

DELETE

### Distribuidores

GET /api/distribuidores Rota que retorna uma lista com todas as distribuidores cadastradas. HTTP 200 OK 

POST /api/distribuidores/registro Rota para registro de login e senha de distribuidores. HTTP 201 CREATED 

POST /api/distribuidores Rota para cadastro completo de distribuidores HTTP 201 CREATED

POST /api/distribuidores/login Rota para login de distribuidores HTTP 200 OK

GET /api/distribuidores/logout Rota para logout de distribuidores HTTP 200 0K

PUT

DELETE

### Cervejas

POST /api/cervejas/create Rota de criação de novas cervejas. Excluiva para cervejarias HTTP 201 CREATED

GET /api/cervejas/:cervejariaId Rota que retorna uma lista de produtos disponíveis de determinada cervejaria. HTTP 200 OK

PUT api/cervejas/:cervejaId Rota que atualiza um certo item de de acordo com seu ID HTTP 200 OK

DELETE api/cervejas/:cervejaId Rota que deleta um item baseado em seu id. HTTP 200 OK

### Techs e conceitos aplicados: 
- Bootstrap
- EJS
- NodeJS
- API REST
- MongoDB - Atlas
- Heroku

### Sobre mim
Caroline Jandoso, Piracicabana de 27 anos, apaixonada por tecnologia, fermentação e viagens. Bióloga de formação, Beer Sommelière por paixão e Web Developer Full Stack por vocação. 

Contato: carol.jandoso@gmail.com
