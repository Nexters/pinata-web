import { forwardRef, SyntheticEvent } from 'react'
import styled from 'styled-components'

type ImageUploaderProps = {
    multiple?: boolean
}

const ImageUploader = forwardRef<HTMLInputElement, ImageUploaderProps>(({multiple = false}, ref) => {
    const getFile = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {

            const MAX_FILE_SIZE = 5 * 1024 * 1024;

            Array.from(target.files).every((file) => {
                const fileSize = file.size
                const fileName = file.name
    
                if(fileSize > MAX_FILE_SIZE){
                    window.alert(`[${fileName}] 첨부파일 사이즈는 5MB 이내로 등록 가능합니다.`);
                    return false;
                }
                return true
            })
        }
    }
    return <HiddenInput ref={ref} type="file" accept="image/*" capture onChange={getFile} multiple={multiple} />
})

const HiddenInput = styled.input`
    width: 0;
    height: 0;
    position: absolute;
`

export default ImageUploader