import {AuthorizationError} from '$util/FetchError'
import {useCallback, useState} from 'react'
import {useCookies} from 'react-cookie'

const useAsyncError = () => {
    const [, , removeCookie] = useCookies<
        string,
        {
            pln: string
        }
    >(['pln'])
    const [, setError] = useState()

    return useCallback(
        (e: unknown) => {
            if (e instanceof AuthorizationError) {
                removeCookie('pln')
            }
            setError(() => {
                throw e
            })
        },
        [removeCookie],
    )
}

export default useAsyncError
