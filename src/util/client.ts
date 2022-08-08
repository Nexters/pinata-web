import {ApiResponse} from '$types/ApiResponse'
import axios, {AxiosResponse} from 'axios'
import {AuthorizationError, FetchError} from './FetchError'

const RESULT_CODE = {
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
}

type ErrorData = {
    code: string
    message: string
}

const USER_ERROR_CODE = {
    USER_NOTFOUND: 'ERR0001',
    USER_AUTH_FAIL: 'ERR0002',
}

const responseInterceptor = <T extends unknown>(res: AxiosResponse<ApiResponse<T>>) => {
    if (res.data.result === RESULT_CODE.FAIL) {
        const errorData = res.data.data as ErrorData
        if (errorData.code === USER_ERROR_CODE.USER_AUTH_FAIL) {
            throw new AuthorizationError()
        }
        throw new FetchError()
    }
    return res.data
}

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

client.interceptors.response.use(responseInterceptor)

export default client
