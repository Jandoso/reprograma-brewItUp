const app = require('./src/app');
const port = 8080 || process.env.PORT;

app.listen(port , (err) => {
    if(err){
        console.log("Houve um erro ao iniciar o servidor");
    } else{
        console.log(`O servidor está rodando na porta ${port}`);
    };
});