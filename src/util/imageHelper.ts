export const getImageSource = (imageName: string) => {
    const originUrl = window.location.origin

    const srcWithPrefix = `images/${imageName}`

    return originUrl.endsWith('/') ? `${originUrl}${srcWithPrefix}` : `${originUrl}/${srcWithPrefix}`
}