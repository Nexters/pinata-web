export const isLocal = process.env.REACT_APP_ENV === 'local'
export const isProduction = process.env.REACT_APP_ENV === 'production'

export const originUrl = isLocal ? 'http://localhost:3000' : 'https://pinata-gift.com'