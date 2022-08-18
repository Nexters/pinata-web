import { originUrl } from '$config/index'

export const getImageSource = (imageName: string) => {
    const srcWithPrefix = `/images/${imageName}`
    return `${originUrl}${srcWithPrefix}`
}

export const getImageFileName = (imageUrl: string) => imageUrl.split('/').pop()