import { SyntheticEvent } from 'react'

const ImageUploader = () => {
    const getFile = (e: SyntheticEvent<HTMLInputElement>) => {
        console.log(e)
    }
    return <input type="file" accept="image/*" capture onChange={getFile} />
}

export default ImageUploader