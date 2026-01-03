import axios from 'axios'

import type { IVideo } from '../types/video.types'

interface IExporeVideos {
	limit: number
	page: number
	totalCount: number
	totalPages: number
	videos: IVideo[]
}

class VideoService {
	getAll(searchTerm?: string | null) {
		return axios.get<IExporeVideos>('/api/videos', {
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})
	}

	getTrendingVideos(fromServer: boolean = false) {
		return axios.get<IVideo[]>(
			fromServer ? `${process.env.SERVER_URL}/api/videos/trending` : '/api/videos/trending'
		)
	}

	getExploreVideos() {
		return axios.get<IExporeVideos>('/api/videos/explore')
	}
}

export const videoService = new VideoService()
