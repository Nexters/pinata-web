import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/store'
import {Router} from './router'

import {MobileWrapper} from './layout/MobileWrapper'

import './common.css'
import {CookiesProvider} from 'react-cookie'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import ErrorBoundary from '$components/ErrorBoundary'

function setupLoginConfig() {
    if (process.env.REACT_APP_KAKAO_APP_KEY && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
    }
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
})

function main() {
    const container = document.getElementById('root')!
    const root = createRoot(container)

    setupLoginConfig()

    root.render(
        <React.StrictMode>
            <ErrorBoundary>
                <QueryClientProvider client={queryClient}>
                    <CookiesProvider>
                        <Provider store={store}>
                            <MobileWrapper>
                                <Router />
                            </MobileWrapper>
                        </Provider>
                    </CookiesProvider>
                </QueryClientProvider>
            </ErrorBoundary>
        </React.StrictMode>,
    )
}

main()
