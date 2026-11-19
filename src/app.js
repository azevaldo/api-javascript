import express from "express"

const app=express();
app.unsubscribe(express.json())

const livros=[
        {
            id:1,
            titulo:"O Senhor dos Aneis"
        },
        {
            id:2,
            titulo:" O Hobit"
        }
    ]

app.get("/",(req,res)=>{
    res.status(200).send("curso de node.js")
})

app.get("/livros",(req,res)=>{
    res.status(200).json(livros)
})

app.post("/livros",(req,res)=>{
    livros.push(req.body)
    res.status(201).send("Livro cadastradi cin sucesso!")
})

export default app