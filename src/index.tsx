import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/store'
import {Router} from './router'

import {MobileWrapper} from './layout/MobileWrapper'

import './common.css'
import {CookiesProvider} from 'react-cookie'

function setupLoginConfig() {
    if (process.env.REACT_APP_KAKAO_APP_KEY && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
        console.log('init')
    }
}

function main() {
    const container = document.getElementById('root')!
    const root = createRoot(container)

    setupLoginConfig()

    root.render(
        <React.StrictMode>
            <CookiesProvider>
                <Provider store={store}>
                    <MobileWrapper>
                        <Router />
                    </MobileWrapper>
                </Provider>
            </CookiesProvider>
        </React.StrictMode>,
    )
}

main()
