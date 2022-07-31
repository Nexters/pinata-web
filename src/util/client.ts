import {ApiResponse} from '$types/ApiResponse'
import axios, {AxiosResponse} from 'axios'
import {FetchError} from './FetchError'

const RESULT_CODE = {
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
}

const responseInterceptor = <T>(res: AxiosResponse<ApiResponse<T>>) => {
    if (res.data.result === RESULT_CODE.FAIL) {
        throw new FetchError()
    }
    return res.data.data
}

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

client.interceptors.response.use(responseInterceptor)

export default client
