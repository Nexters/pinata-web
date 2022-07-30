import {Axios} from 'axios'

const client = new Axios({
    baseURL: process.env.REACT_APP_API_URL,
})

export default client
