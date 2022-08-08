import {Component, ReactNode} from 'react'
import {AuthorizationError, FetchError} from '$util/FetchError'
import ROUTE from '$constants/route'
import Axios from 'axios'

type ErrorBoundaryProps = {
    children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
    static getDerivedStateFromError(error: Error) {
        if (!Axios.isAxiosError(error)) {
            return {}
        }

        if (error instanceof AuthorizationError) {
            window.location.replace(ROUTE.LOGIN)
            return {}
        }
        if (error instanceof FetchError) {
            window.location.replace(ROUTE.ERROR)
            return {}
        }
    }

    render() {
        return this.props.children
    }
}

export default ErrorBoundary
