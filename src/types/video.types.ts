import type { IChannel } from "./channel.types"
import type { IComment } from "./comment.types"
import type { ILike } from "./like.types"
import type { ITag } from "./tag.types"

export interface IVideo {
    channel: IChannel
    channelId: string
    comments: IComment[]
    createdAt: string
    description: string
    engagementScore: number
    id: string
    isPublic: boolean
    likes: ILike[]
    maxResolution: string
    publicId: string
    tags: ITag[]
    thumbnailUrl: string
    title: string
    updatedAt: string
    videoFileName: string
    viewsCount: number
}