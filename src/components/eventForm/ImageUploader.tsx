import { useUploadImage } from '$api/image'
import { forwardRef, SyntheticEvent, useEffect } from 'react'
import styled from 'styled-components'

type ImageUploaderProps = {
    multiple?: boolean
    cameraMode?: boolean
    onUpload(imageUrls: string[]): void
}

const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(({multiple = false, cameraMode = false, onUpload}, ref) => {
    const {uploadImage, data} = useUploadImage()

    useEffect(() => {
        if (data?.imageUrls) {
            console.log(data.imageUrls)
            onUpload(data.imageUrls)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const triggerUpload = async (files: FileList) => {
        await uploadImage({files})
    }

    const getFile = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {

            const MAX_FILE_SIZE = 1 * 1024 * 1024;

            const checkImageSizes = Array.from(target.files).every((file) => {
                const fileSize = file.size
                const fileName = file.name
    
                if(fileSize > MAX_FILE_SIZE){
                    window.alert(`[${fileName}] 첨부파일 사이즈는 5MB 이내로 등록 가능합니다.`);
                    return false;
                }
                return true
            })

            if (checkImageSizes) {
                triggerUpload(target.files)
            }
        }
    }
    return <HiddenInput ref={ref} type="file" accept="image/*" capture={cameraMode} onChange={getFile} multiple={multiple} />
})

const HiddenInput = styled.input`
    width: 0;
    height: 0;
    position: absolute;
`

export default ImageUploader