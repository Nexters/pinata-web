export class FetchError extends Error {
    constructor(message?: string) {
        super(message || 'Service Fail')
    }
}

export class AuthorizationError extends FetchError {
    constructor() {
        super('Login Expired.')
    }
}

export class OutofPeriodError extends FetchError {
    constructor() {
        super('Out of Event Period.')
    }
}
