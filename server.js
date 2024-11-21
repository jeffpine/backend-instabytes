import express from "express"; // Importa o framework Express, que será utilizado para criar o servidor web.
import routes from "./src/routes/postsRoutes.js"
// Importa o módulo de rotas responsável por definir as rotas para os posts. 
// Este módulo, provavelmente, contém funções que definem como o servidor deve responder a diferentes tipos de requisições (GET, POST, PUT, DELETE) para as URLs relacionadas a posts.

const app = express();
// Cria uma instância do Express, que será o nosso servidor web. 
// Todas as configurações e rotas serão adicionadas a essa instância.
routes(app);
// Chama a função `routes` que foi importada, passando a instância do Express como argumento. 
// Essa função provavelmente irá adicionar todas as rotas definidas no módulo `postsRoutes` à aplicação.

app.listen(3000, () => {
    console.log("Servidor escutando...");
});
// Inicia o servidor, fazendo-o escutar por conexões na porta 3000. 
// A função de callback é executada quando o servidor está pronto para receber requisições.