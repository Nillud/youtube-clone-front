import { instance } from '@/api/axios'

class FileService {
	async upload(data: FormData, folder?: string) {
		return instance.post<{ url: string; name: string }[]>(`/upload-file`, data, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-dat' }
		})
	}
}

export const fileService = new FileService()
