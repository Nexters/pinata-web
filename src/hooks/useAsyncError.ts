import { useCallback, useState } from 'react'

const useAsyncError = () => {
    const [, setError] = useState()

    return useCallback(
        (e: unknown) => {
            setError(() => {
                throw e
            })
        },
        [setError],
    )
}

export default useAsyncError
