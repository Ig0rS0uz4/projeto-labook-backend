import { PostDatabase } from "../database/PostDatabase"
import { PostDTO } from "../dtos/PostDTO"
import { Post } from "../models/Post"
import { PostDB } from "../types"

export class PostBusiness {
    
    constructor(
        private postDTO: PostDTO,
        private postDatabase: PostDatabase
    ){}
    
    public getPost = async (input: any) => {

        const { q } = input

        const postsDB = await this.postDatabase.findPost(q)

        const posts: Post[] = postsDB.map((postDB) => new Post(
            postDB.id,
            postDB.creator_id,
            postDB.content,
            postDB.created_at
        ))

        return ({ posts: posts })
    }

    public createPost = async (input: any) => {
        const { id, creator_id } = input

        if (typeof id !== "string") {
            throw new Error("'id' deve ser string")
        }

        if (typeof creator_id !== "string") {
            throw new Error("'creator_id' deve ser string")
        }

        const postDBExists = await this.postDatabase.findPostById(id)
    
        if(postDBExists) {
            throw new Error("'id' já existe")
        }
    
        const newPost = new Post(
            id,
            creator_id,
            content,
            new Date().toISOString()
        )
    
        const newPostDB: PostDB = {
            id: newPost.getId(),
            creator_id: newPost.getCreatorId(),
            content: newPost.getContent(),
            created_at: newPost.getCreatedAt()
        }
    
            await this.postDatabase.insertPost(newPostDB)
    
    const output = {
        message: "post realizado com sucesso",
        post: newPost
    }
    
    return (output)
        }

}