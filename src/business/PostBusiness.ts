import { PostDatabase } from "../database/PostDatabase"
import { Post } from "../models/Post"
import { PostDB } from "../types"

export class PostBusiness {
    public getPost = async (q: string | undefined) => {
        const postDatabase = new PostDatabase()
        const postsDB = await postDatabase.findPost(q)

        const posts: Post[] = postsDB.map((postDB) => new Post(
            postDB.id,
            postDB.creator_id,
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

        const postDatabase = new PostDatabase()
        const postDBExists = await postDatabase.findPostById(id)
    
        if(postDBExists) {
            throw new Error("'id' já existe")
        }
    
        const newPost = new Post(
            id,
            creator_id,
            new Date().toISOString()
        ) // yyyy-mm-ddThh:mm:sssZ
    
        const newPostDB: PostDB = {
            id: newPost.getId(),
            creator_id: newPost.getCreatorId(),
            created_at: newPost.getCreatedAt()
        }
    
            await postDatabase.insertPost(newPostDB)
    
    const output = {
        message: "post realizado com sucesso",
        post: newPost
    }
    
    return (output)
        }

    public getPostId = async ()

}