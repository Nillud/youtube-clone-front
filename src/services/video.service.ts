import { axiosClassic } from '../api/axios'
import type { IVideo } from '../types/video.types'

interface IExporeVideos {
	limit: number
	page: number
	totalCount: number
	totalPages: number
	videos: IVideo[]
}

class VideoService {
	private _VIDEOS = '/videos'

	getAll(searchTerm?: string | null) {
		return axiosClassic.get<IExporeVideos>(this._VIDEOS, {
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})
	}

	getVideoGames() {
		return axiosClassic.get<IExporeVideos>(`${this._VIDEOS}/games`)
	}

	getTrendingVideos() {
		return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
	}

	getExploreVideos() {
		return axiosClassic.get<IExporeVideos>(`${this._VIDEOS}/explore`)
	}
}

export const videoService = new VideoService()
