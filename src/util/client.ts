import {ApiResponse} from '$types/ApiResponse'
import axios, {AxiosError, AxiosRequestHeaders, AxiosResponse} from 'axios'
import {AuthorizationError, FetchError, OutofPeriodError} from './FetchError'

export const RESULT_CODE = {
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
    EVENT_EXPIRED: 'ERR1004',
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

const rejectInterceptor = (error: AxiosError<ApiResponse<ErrorData>>) => {
    if (error.response?.status === 400) {
        const {data} = error.response.data
        if (data.code === USER_ERROR_CODE.EVENT_EXPIRED) {
            return Promise.reject(new OutofPeriodError())
        }

        if (data.code === USER_ERROR_CODE.USER_AUTH_FAIL) {
            return Promise.reject(new AuthorizationError())
        }

        return Promise.reject(new FetchError())
    }
    return Promise.reject(error)
}

const client = axios.create({
    baseURL: process.env.REACT_APP_ENV === 'production' ? process.env.REACT_APP_API_URL : '',
})

client.interceptors.response.use(responseInterceptor, rejectInterceptor)

export const postAuthorized = <T, U>(url: string, req: T, token?: string, headers?: AxiosRequestHeaders) =>
    client.post<U>(url, req, {
        headers: {
            Authorization: `Bearer ${token}`,
            ...headers,
        },
    })

export const deleteAuthorized = <T, U>(url: string, data: T, token?: string) =>
    axios.delete<ApiResponse<U>>(url, {
        data,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

export default client
