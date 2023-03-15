import { CommentsDB, CommentsModel } from "../types2"

export class Comments {
    constructor(
        private id: string,
        private postId: string,
        private userId: string,
        private comments: string,
        private likes: number,
        private dislikes: number,
        private createdAt: string
    ) { }

    public getId(): string {
        return this.id
    }

    public setId(value: string): void {
        this.id = value
    }

    public getPostId(): string {
        return this.postId
    }

    public setPostId(value: string): void {
        this.postId = value
    }

    public getComments(): string {
        return this.comments
    }

    public setComments(value: string): void {
        this.comments = value
    }

    public getUserId(): string {
        return this.userId
    }

    public setUserId(value: string): void {
        this.userId = value
    }

    public getLikes(): number {
        return this.likes
    }

    public setLikes(value: number): void {
        this.likes = value
    }

    public addLike() {
        this.likes += 1
    }

    public removeLike() {
        this.likes -= 1
    }

    public addDislike() {
        this.dislikes += 1
    }

    public removeDislike() {
        this.dislikes -= 1
    }

    public getDislikes(): number {
        return this.dislikes
    }

    public setDislikes(value: number): void {
        this.dislikes = value
    }


    public getCreatedAt(): string {
        return this.createdAt
    }

    public setCreatedAt(value: string): void {
        this.createdAt = value
    }

    public toDBModel(): CommentsDB {
        return {
            id: this.id,
            post_id: this.postId,
            user_id: this.userId,
            comments: this.comments,
            likes: this.likes,
            dislikes: this.dislikes,
            created_at: this.createdAt,
        }
    }

    public toBusinessModel(): CommentsModel {
        return {
            id: this.id,
            postId: this.postId,
            userId: this.userId,
            comments: this.comments,
            likes: this.likes,
            dislikes: this.dislikes,
            createdAt: this.createdAt,
        }
    }
}