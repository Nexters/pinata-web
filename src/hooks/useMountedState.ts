import { useEffect, useRef } from 'react'

const useMountedState = () => {
    const mountedStateRef = useRef(false)

    useEffect(() => {
        if (!mountedStateRef.current) {
            mountedStateRef.current = true
        }
    }, [mountedStateRef])

    return mountedStateRef.current
}

export default useMountedState