import express from "express"
import LivroController from "../controllers/livroController.js"
const routes=express.Router();

routes.get("/livros",LivroController.listarLivros)
routes.get("/livros/:id",LivroController.listarLivroPorId)
routes.post("/livros",LivroController.cadastrarLivros)
routes.put("/livros",LivroController.atualizarLivro)



export default routes