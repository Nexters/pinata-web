declare namespace NodeJS {
    export interface ProcessEnv {
        [key: string]: string | undefined
        REACT_APP_KAKAO_APP_KEY: string
    }
}