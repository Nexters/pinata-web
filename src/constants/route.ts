const ROUTE = {
    MAIN: '/',
    LOGIN: '/login',
    GIFTS: '/gifts',
    EVENT: {
        CREATE: '/event/create',
        CREATE_COMPLETE: '/event/create/complete',
        LIST: '/events',
        DETAIL: '/event/:event_code',
        RESULT: '/event/result',
        OVER: '/event/over',
    },
    ERROR: '/error',
}

export default ROUTE
