import { useCallback } from 'react'

const useCopy = () => {
    const copy = useCallback(
        (value: string) => {
            const textarea = document.createElement('textarea')
            textarea.value = value
            textarea.style.top = '0'
            textarea.style.left = '0'
            textarea.style.position = 'fixed'

            document.body.appendChild(textarea)
            textarea.focus()
            textarea.select()
            document.execCommand('copy')
            document.body.removeChild(textarea)
        },
        [],
    )

    const handleCopy = useCallback((value: string) => {
        copy(value)
    }, [copy])

    return handleCopy
}

export default useCopy