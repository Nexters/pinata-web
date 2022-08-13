export const sleep = <T>(res: T, delay: number = 1000) =>
    new Promise<T>((resolve) => setTimeout(() => resolve(res), delay))

export const extractProp =
    <Props, Key extends keyof Props>(key: Key) =>
    (props: Props) =>
        props[key]

export const detectIsMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
