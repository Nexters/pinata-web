export const sleep = <T>(res: T, delay: number = 1000) =>
    new Promise<T>((resolve) => setTimeout(() => resolve(res), delay))
