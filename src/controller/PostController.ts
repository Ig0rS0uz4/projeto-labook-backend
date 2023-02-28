import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"

export class PostController {
    public getPosts = async (req: Request, res: Response) => {
        try {
            const input = {
                q: req.query.q
            }
            
            const output =  await this.postBusiness.getPost(input)
    
            res.status(200).send(output)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }

    public createPost = async (req: Request, res: Response) => {
        try {
    
            const input ={
                id:req.body.id,
                creator_id:req.body.creator_id,
                created_at:req.body.created_at
            }

            const postBusiness = new PostBusiness
            const output = await postBusiness.createPost(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)
    
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}