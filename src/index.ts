import express, { Request, Response} from 'express';
import cors from 'cors';
import { UserController } from './controller/UserController';
import { PostController } from './controller/PostController';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

const userController = new UserController()
const postController = new PostController()

app.get("/users", userController.getUsers)
app.post("/users", userController.createUser)

 app.get("/posts", postController.getPosts)
// app.get("/posts/:id/", postController.getPost)
 app.post("/posts", postController.createPost)
// app.put("/posts/:id/balance", postController.editPost)