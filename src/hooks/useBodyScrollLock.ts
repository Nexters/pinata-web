import {useEffect} from 'react'
import { CSSProperties } from 'styled-components'

interface State {
    scrollTop: number
    style: CSSProperties
}

type ValueMap = {
    [key: string]: any
}

const bodyScrollLockStates: Array<State> = []

const lockBodyScroll = () => {
    const body = document.body
    const {top, overflow, width, position} = body.style as ValueMap
    const scrollTop = window.scrollY || document.documentElement?.scrollTop || body.scrollTop || 0

    const state: State = {
        scrollTop,
        style: {top, overflow, width, position},
    }

    bodyScrollLockStates.push(state)

    window.scrollTo(0, 0)

    body.style.top = `-${scrollTop}px`
    body.style.overflow = 'hidden'
    body.style.width = '100%'
    body.style.position = 'fixed'
}

const initBodyScroll = () => {
    const state = bodyScrollLockStates.pop()

    if (state && bodyScrollLockStates.length === 0) {
        const {scrollTop, style = {}} = state

        for (const [key, value] of Object.entries(style)) {
            const body = document.body.style as ValueMap
            body[key] = value ?? ''
        }

        window.scrollTo(0, scrollTop || 0)
    }
}

const useBodyScrollLock = (shouldScrollLock: boolean) => {
    useEffect(() => {
        if (shouldScrollLock) {
            lockBodyScroll()
        }
        return () => {
            if (shouldScrollLock) {
                initBodyScroll()
            }
        }
    }, [shouldScrollLock])
}

export default useBodyScrollLock