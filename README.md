# 📚 API de Livraria com JavaScript

API REST para gerir uma **livraria**, construída com **Node.js**, **Express** e **MongoDB (Mongoose)**. O projeto nasceu como a **primeira API em JavaScript** de um curso em vídeo-aulas e serve de base de estudo para quem quer aprender, na prática, como funciona um back-end com rotas, controladores, modelos e base de dados.

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose%207-47A248?logo=mongodb&logoColor=white)
![Licença](https://img.shields.io/badge/licença-ISC-blue)

---

## 📑 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Como executar](#-como-executar)
- [Variáveis de ambiente](#-variáveis-de-ambiente)
- [Endpoints da API](#-endpoints-da-api)
- [Modelos de dados](#-modelos-de-dados)
- [Exemplos de utilização](#-exemplos-de-utilização)
- [O que se aprende neste projeto](#-o-que-se-aprende-neste-projeto)
- [Melhorias futuras](#-melhorias-futuras)
- [Licença](#-licença)

---

## 📖 Sobre o projeto

Esta API permite **cadastrar, consultar, atualizar e remover livros e autores**. Cada livro guarda os dados completos do seu autor, e é possível pesquisar livros por editora.

O código segue uma arquitetura em camadas simples e organizada (**rotas → controladores → modelos**), ideal para quem está a dar os primeiros passos em Node.js.

## ✨ Funcionalidades

- CRUD completo de **livros** (criar, listar, buscar por ID, atualizar, apagar)
- CRUD completo de **autores**
- Associação entre livro e autor (o autor é incorporado no livro ao cadastrar)
- Pesquisa de livros por **editora**
- Ligação a MongoDB através de **Mongoose**
- Configuração segura por **variáveis de ambiente** (`dotenv`)
- Recarregamento automático em desenvolvimento com **nodemon**

## 🛠 Tecnologias

| Tecnologia | Função |
| --- | --- |
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript (ES Modules) |
| [Express](https://expressjs.com/) | Framework web e gestão de rotas |
| [MongoDB](https://www.mongodb.com/) | Base de dados NoSQL |
| [Mongoose](https://mongoosejs.com/) | Modelação de dados (ODM) |
| [dotenv](https://github.com/motdotla/dotenv) | Carregamento de variáveis de ambiente |
| [nodemon](https://nodemon.io/) | Reinício automático do servidor em desenvolvimento |

## 🗂 Estrutura de pastas

```
api-javascript/
├── server.js                  # Ponto de entrada: arranca o servidor
├── package.json
├── .gitignore
└── src/
    ├── app.js                 # Configuração do Express e ligação à base de dados
    ├── config/
    │   └── dbConnect.js       # Ligação ao MongoDB com Mongoose
    ├── models/
    │   ├── Autor.js           # Schema/modelo de autores
    │   └── Livro.js           # Schema/modelo de livros
    ├── controllers/
    │   ├── autorController.js # Lógica de negócio dos autores
    │   └── livroController.js # Lógica de negócio dos livros
    └── routes/
        ├── index.js           # Agrega todas as rotas
        ├── autoresRouters.js  # Rotas de /autores
        └── livrosRoutes.js    # Rotas de /livros
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- Uma base de dados MongoDB: local ou na nuvem com o [MongoDB Atlas](https://www.mongodb.com/atlas) (plano gratuito)
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clonar o repositório
git clone https://github.com/azevaldo/api-javascript.git

# 2. Entrar na pasta do projeto
cd api-javascript

# 3. Instalar as dependências
npm install

# 4. Criar o ficheiro .env (ver secção seguinte)

# 5. Iniciar o servidor em modo de desenvolvimento
npm run dev
```

Se tudo correr bem, vai ver no terminal:

```
Servidor escutando!!
conecção feita com o banco com sucesso
```

O servidor fica disponível em **http://localhost:3000**.

## 🔐 Variáveis de ambiente

Crie um ficheiro `.env` na raiz do projeto com a string de ligação à sua base de dados:

```env
DB_CONNECTION_STRING=mongodb+srv://<utilizador>:<palavra-passe>@<cluster>.mongodb.net/livraria?retryWrites=true&w=majority
```

> ⚠️ O `.env` já está no `.gitignore`. **Nunca** publique as suas credenciais no GitHub.

## 🔗 Endpoints da API

URL base: `http://localhost:3000`

### Raiz

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/` | Mensagem de teste ("Curso de node.js") |

### Livros

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/livros` | Lista todos os livros |
| `GET` | `/livros/:id` | Devolve um livro pelo ID |
| `GET` | `/livros/busca?editora=Nome` | Lista os livros de uma editora |
| `POST` | `/livros` | Cadastra um novo livro |
| `PUT` | `/livros/:id` | Atualiza um livro |
| `DELETE` | `/livros/:id` | Remove um livro |

### Autores

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/autores` | Lista todos os autores |
| `GET` | `/autores/:id` | Devolve um autor pelo ID |
| `POST` | `/autores` | Cadastra um novo autor |
| `PUT` | `/autores/:id` | Atualiza um autor |
| `DELETE` | `/autores/:id` | Remove um autor |

## 🧩 Modelos de dados

### Autor

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| `nome` | String | ✅ |
| `nacionalidade` | String | ❌ |

### Livro

| Campo | Tipo | Obrigatório |
| --- | --- | --- |
| `titulo` | String | ✅ |
| `editora` | String | ❌ |
| `preco` | Number | ❌ |
| `paginas` | Number | ❌ |
| `autor` | Autor (documento incorporado) | ❌ |

## 🧪 Exemplos de utilização

### 1. Cadastrar um autor

```http
POST /autores
Content-Type: application/json

{
  "nome": "Pepetela",
  "nacionalidade": "Angolana"
}
```

**Resposta (201):**

```json
{ "message": "novo autor criado com sucesso" }
```

### 2. Cadastrar um livro

No campo `autor`, envie o **ID** de um autor já cadastrado (obtenha-o em `GET /autores`). A API vai buscar os dados desse autor e incorporá-los no livro.

```http
POST /livros
Content-Type: application/json

{
  "titulo": "Mayombe",
  "editora": "Editora Exemplo",
  "preco": 5500,
  "paginas": 250,
  "autor": "ID_DO_AUTOR"
}
```

**Resposta (201):**

```json
{ "message": "criado com sucesso", "livro": "novo livro" }
```

### 3. Buscar livros por editora

```http
GET /livros/busca?editora=Editora Exemplo
```

### 4. Testar com cURL

```bash
curl http://localhost:3000/livros

curl -X POST http://localhost:3000/autores \
  -H "Content-Type: application/json" \
  -d '{"nome":"Pepetela","nacionalidade":"Angolana"}'
```

> 💡 Também pode testar tudo com o [Postman](https://www.postman.com/), o [Insomnia](https://insomnia.rest/) ou a extensão **Thunder Client** do VS Code.

## 🎓 O que se aprende neste projeto

- Criar um servidor HTTP com **Express**
- Organizar o código em **rotas, controladores e modelos** (padrão semelhante ao MVC)
- Usar **ES Modules** (`import`/`export`) em Node.js
- Ligar a aplicação a **MongoDB** com Mongoose
- Definir **schemas** e validações (`required`)
- Trabalhar com documentos **incorporados** (autor dentro do livro)
- Construir um **CRUD** completo com os métodos `GET`, `POST`, `PUT` e `DELETE`
- Usar **query strings** para filtros (`?editora=...`)
- Tratar erros com `try/catch` e devolver códigos HTTP adequados (`200`, `201`, `500`)
- Proteger dados sensíveis com **variáveis de ambiente**

## 🔭 Melhorias futuras

Sugestões de evolução para quem quiser ir além do curso:

- [ ] Adicionar `await` nas operações de remoção (`deletarLivro` e `deletarAutor`), para que os erros sejam realmente capturados pelo `try/catch`
- [ ] Devolver `404` quando o livro ou o autor não é encontrado (em vez de `200` com resultado vazio ou `500`)
- [ ] Validar o ID recebido e responder com `400` para pedidos inválidos
- [ ] Criar um *middleware* centralizado de tratamento de erros
- [ ] Permitir configurar a porta através de `process.env.PORT`
- [ ] Remover a dependência `mongodb`, que não é usada diretamente, e mover o `nodemon` para `devDependencies`
- [ ] Adicionar paginação e mais filtros (título, autor, intervalo de preço)
- [ ] Escrever testes automatizados (Jest + Supertest)
- [ ] Documentar a API com Swagger/OpenAPI
- [ ] Implementar autenticação com JWT
- [ ] Criar um `.env.example` e fazer o deploy (Render, Railway, etc.)

## 📄 Licença

Distribuído sob a licença **ISC**.

---

<p align="center">Feito com 💻 e muito café durante o curso de API com JavaScript.</p>
