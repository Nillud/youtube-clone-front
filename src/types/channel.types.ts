import type { IUser } from './user.types'
import type { IVideo } from './video.types'

// export interface IChannel {
// 	id: string
// 	name: string
// 	slug: string
// 	description: string
// 	isVerified: boolean
// 	avatarUrl: string
// 	bannerUrl: string
// 	// user:
// 	videos: IVideo[]
// 	subscribers: []
// 	createdAt: string
// }

export interface IChannel {
	avatarUrl: string
	bannerUrl: string
	createdAt: string
	description: string
	id: string
	isVerified: boolean
	slug: string
	updatedAt: string
	user: IUser
	userId: string
	videos: IVideo[]
	subscribers: IUser[]
}
