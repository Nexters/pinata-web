import { useRequest } from '$hooks/useRequest';
import { deleteAuthorized, postAuthorized, RESULT_CODE } from '$util/client'
import { FetchError } from '$util/FetchError';

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
    const {data} = await postAuthorized<FormData, ImageResponse>('/api/v1/images', getFormData(req), token, {
        'Content-Type': 'multipart/form-data',
    })

    return data
}

export const useUploadImage = () => {
    const {mutateAsync, data, error} = useRequest<ImageRequest, ImageResponse>(uploadImage)
    return {uploadImage: mutateAsync, data, error} 
}

type DeleteImageRequest = {
    imageFileName: string
}

const deleteImage = async (req: DeleteImageRequest, token?: string) => {
    const res = await deleteAuthorized<DeleteImageRequest, null>('/api/v1/images', req, token)

    if (res.data.result === RESULT_CODE.FAIL) {
        throw new FetchError()
    }
}

export const useDeleteImage = () => {
    const {mutateAsync, data, error} = useRequest<DeleteImageRequest, unknown>(deleteImage)
    return {deleteImage: mutateAsync, data, error} 
}