
export {}
declare global {
    interface Window {
        Kakao: {
            init(appKey: string): void
            isInitialized(): boolean
            Auth: any
            API: any
        }
    }
}