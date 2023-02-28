import { BadRequestError } from "../errors/BadRequestError"
import { Post } from "../models/Post"


export interface CreatePostInputDTO {
    id: string,
    creator_id: string,
    content: string
}

export interface CreatePostOutputDTO {
    message: string,
    post: {
        id: string,
        creator_id: string,
        content: string
    }
}

export class PostDTO {
    public createPostInput(
        id: unknown,
        creator_id: unknown,
        content: unknown
    ) {
        if (typeof id !== "string") {
            throw new BadRequestError("id deve ser string")
        }

        if (typeof creator_id !== "string") {
            throw new BadRequestError("creator_id deve ser string")
        }

        if (typeof content !== "string") {
            throw new BadRequestError("content deve ser string")
        }

        const dto: CreatePostInputDTO = {
            id,
            creator_id,
            content
        }

        return dto
    }

    public createPostOutput(post: Post) {
        const dto: CreatePostOutputDTO = {
            message: "post realizado com sucesso!",
            post: {
                id: post.getId(),
                creator_id: post.getCreatorId(),
                content: post.getContent()
            }
        }
    }
}