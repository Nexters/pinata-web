import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Router } from './router';

import { MobileWrapper } from './layout/MobileWrapper';

import './common.css';

function setupLoginConfig() {
    if (process.env.REACT_APP_KAKAO_APP_KEY && !window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY)
    }
}

function main() {
    const container = document.getElementById('root')!;
    const root = createRoot(container);
  
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <MobileWrapper>
                    <Router />
                </MobileWrapper>
            </Provider>
        </React.StrictMode>
    );
    setupLoginConfig()
}

main()
