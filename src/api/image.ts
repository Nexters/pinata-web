import { useRequest } from '$hooks/useRequest';
import client, { postAuthorized } from '$util/client'

export type ImageRequest = {
    files: FileList
}

export type ImageResponse = {
    imageUrls: string[]
}

const getFormData = ({files}: ImageRequest) => {
    const formData = new FormData()

    Array.from(files).forEach((file) => {
        formData.append('files', file)
    })

    return formData
}


export const uploadImage = async (req: ImageRequest, token?: string) => {
    console.log(token)
    const {data} = await postAuthorized<FormData, ImageResponse>('/api/v1/images', getFormData(req), token)

    return data
}

export const useUploadImage = () => {
    const {mutateAsync, data, error} = useRequest<ImageRequest, ImageResponse>(uploadImage)
    return {uploadImage: mutateAsync, data, error} 
}