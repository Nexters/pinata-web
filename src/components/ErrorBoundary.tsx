import {Component, ReactNode} from 'react'
import {AuthorizationError, FetchError} from '$util/FetchError'
import ROUTE from '$constants/route'

type ErrorBoundaryProps = {
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
    static getDerivedStateFromError(error: Error) {
        if (error instanceof AuthorizationError) {
            window.location.replace(ROUTE.LOGIN)
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
