import type { IChannel } from './channel.types'
import type { IWatchHistory } from './history.types'
import type { ILike } from './like.types'
import type { IVideo } from './video.types'

export interface IUser {
	createdAt: string
	email: string
	id: string
	likes: ILike[]
	name: string
	password: string
	updatedAt: string
	verificationToken: string
}

export interface IFullUser extends IUser {
	channel?: IChannel
    subscriptions: IChannel[]
    watchHistory: IWatchHistory[]
}

export interface IProfileResponse extends IFullUser {
	subscribedVideos?: IVideo[]
}