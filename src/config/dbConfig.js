// Importa o cliente MongoDB para realizar a conexão
import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados
export default async function conectarAoBanco(stringConexao) {
  // Inicializa uma variável para armazenar o cliente MongoDB
  let mongoClient;

  // Bloco try-catch para tratar possíveis erros durante a conexão
  try {
    // Cria uma nova instância do cliente MongoDB com a string de conexão fornecida
    mongoClient = new MongoClient(stringConexao);
    // Exibe uma mensagem no console indicando que a conexão está sendo estabelecida
    console.log('Conectando ao cluster do banco de dados...');
    // Conecta ao banco de dados de forma assíncrona
    await mongoClient.connect();
    // Exibe uma mensagem de sucesso caso a conexão seja estabelecida
    console.log('Conectado ao MongoDB Atlas com sucesso!');
    // Retorna o cliente MongoDB para uso posterior
    return mongoClient;
  } catch (erro) {
    // Exibe uma mensagem de erro no console caso ocorra alguma falha na conexão
    console.error('Falha na conexão com o banco!', erro);
    // Encerra a execução da aplicação
    process.exit();
  }
}