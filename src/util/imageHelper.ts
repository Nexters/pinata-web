export const getImageSource = (src: string) => {
    const originUrl = window.location.origin

    return originUrl.endsWith('/') ? `${originUrl}${src}` : `${originUrl}/${src}`
}