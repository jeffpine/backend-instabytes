// Importa o framework Express e o controlador de posts
import express from "express";
import { listarPosts } from "../controllers/postsController.js";

// Define uma função de rotas para configurar as rotas da aplicação
const routes = (app) => {
  // Habilita o parsing de JSON no corpo das requisições
  app.use(express.json());

  // Define a rota GET para "/posts", que será tratada pela função `listarPosts`
  app.get("/posts", listarPosts);
}

// Exporta a função de rotas para ser usada em outros módulos
export default routes;