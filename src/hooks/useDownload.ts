import {getImageFileName} from './../util/imageHelper'
import client from '$util/client'
import {useCallback} from 'react'
import useAuthToken from './useAuthToken'
import useAsyncError from './useAsyncError'
import toast from '$components/toast/Toast'

const useDownload = () => {
    const accessToken = useAuthToken()
    const throwError = useAsyncError()

    const downloadFromUrl = useCallback(async (source: string) => {
        try {
            const fileName = getImageFileName(source)

            const response = await client.get<Blob, Blob>(`/api/v1/images/download/${fileName}`, {
                responseType: 'blob',
                timeout: 30000,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })

            const name = `${fileName}`
            const url = window.URL.createObjectURL(response)

            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', name)
            link.style.cssText = 'display:none'
            document.body.appendChild(link)
            link.click()
            link.remove()
            toast('이미지가 저장되었습니다.', 1000)
        } catch (e) {
            throwError(e)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return downloadFromUrl
}

export default useDownload
