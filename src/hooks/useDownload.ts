import { useCallback } from 'react';

const useDownload = () => {
    function getDataUrl(img: any) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx && ctx.drawImage(img, 0, 0);
        return canvas.toDataURL('image/jpeg');
     }

    const downloadFromUrl = useCallback((source: string) => {
        const img = document.createElement('img')

        img.src = source
        img.crossOrigin = 'Anonymous'
        img.style.visibility = 'hidden'
        img.onload = (e) => {
            const target = e.currentTarget
            const dataUrl = target ? getDataUrl(target) : null
            
            console.log(dataUrl)
        }

        document.body.appendChild(img)

        // fetch로 받은 바이너리 파일로 다운로드하는 코드
        /**
         * 
            const response = await request(
                `/request/img`,
                { data },
                { responseType: 'blob, timeout: 30000 },
            )

            const name = `proposed_blocks_${address}_${date}.csv`
            const url = URL.createObjectURL(response.data)

            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', name)
            link.style.cssText = 'display:none'
            document.body.appendChild(link)
            link.click()
            link.remove()
         */

        // const fileName = source.split('/').pop()
        // if (fileName) {
        //     const anchor = document.createElement('a')
        //     anchor.href = source
        //     anchor.setAttribute('download', fileName)
        //     document.body.appendChild(anchor)
        //     anchor.click()
        //     anchor.remove()
        // }
    }, [])

    return downloadFromUrl
}

export default useDownload