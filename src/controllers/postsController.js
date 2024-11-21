import { getTodosPosts } from "../models/postsModels.js"; // Importa a função `getTodosPosts` do modelo de posts

export async function listarPosts (req, res) // Define uma função assíncrona para listar todos os posts
{
    const posts =  await getTodosPosts();   // Busca todos os posts usando a função importada
    res.status(200).json(posts);  // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON

}