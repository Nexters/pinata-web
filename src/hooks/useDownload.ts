import client from '$util/client';
import { useCallback } from 'react';
import useAuthToken from './useAuthToken';

const useDownload = () => {
    const accessToken = useAuthToken()

    const downloadFromUrl = useCallback(async (source: string) => {
        const fileName = source.split('/').pop()

        const response = await client.get<Blob, Blob>(
            `/api/v1/images/download/${fileName}`,
            { 
                responseType: 'blob', 
                timeout: 30000, 
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                } 
            },
        )

        const name = `${fileName}`
        const url = window.URL.createObjectURL(response);

        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', name)
        link.style.cssText = 'display:none'
        document.body.appendChild(link)
        link.click()
        link.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return downloadFromUrl
}

export default useDownload