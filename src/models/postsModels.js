import conectarAoBanco from "../config/dbConfig.js"; // Importa a função `conectarAoBanco` do arquivo `dbConfig.js`

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão armazenada na variável de ambiente `STRING_CONEXAO`

// Define uma função assíncrona para buscar todos os posts
export async function getTodosPosts(){
      // Seleciona o banco de dados "imersao-db"
    const db = conexao.db("imersao-db");
      // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
      // Busca todos os documentos da coleção "posts" e retorna como um array
    return colecao.find().toArray();
}