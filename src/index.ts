import express, { Request, Response} from 'express';
import cors from 'cors';
import { UserController } from './controller/UserController';
import { PostController } from './controller/PostController';
import { userRouter } from './router/userRouter';
import { postRouter } from './router/postRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});



app.use("/users", userRouter)
app.use("/posts", postRouter)
