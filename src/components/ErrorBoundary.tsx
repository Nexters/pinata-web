import {Component, ReactNode} from 'react'
import {AuthorizationError, EventOverError, FetchError} from '$util/FetchError'
import ROUTE from '$constants/route'

type ErrorBoundaryProps = {
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
    static getDerivedStateFromError(error: Error) {
        if (error instanceof AuthorizationError) {
            console.log('에러 바운더리 실행?', error instanceof FetchError)
            window.location.replace(ROUTE.LOGIN)
            return {}
        }
        if (error instanceof EventOverError) {
            window.location.replace(`${ROUTE.EVENT.OVER}`)
            return {}
        }
        if (error instanceof FetchError) {
            window.location.replace(`${ROUTE.ERROR}`)
            return {}
        }
    }

    render() {
        return this.props.children
    }
}

export default ErrorBoundary
