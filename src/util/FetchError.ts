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

export class AlreadyJoinedError extends FetchError {
    constructor() {
        super('User is already joined this event.')
    }
}

export class NonTargetError extends FetchError {
    constructor() {
        super('This User is non-target.')
    }
}

export class NotFoundError extends FetchError {
    constructor() {
        super('Event or User is not found.')
    }
}
