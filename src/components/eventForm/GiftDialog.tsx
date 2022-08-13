import PlusIcon from '$assets/icons/PlusIcon'
import {Box} from '$components/commons/Box'
import Dialog from '$components/dialog/Dialog'
import {typos} from '$styles/typos'
import {extractProp} from '$util/common'
import { useForm } from 'react-hook-form'
import styled, {css} from 'styled-components'
import Input from './Input'

interface GiftForm {
    name: string
}

const GiftDialog = () => {
    const {register, handleSubmit} = useForm<GiftForm>()
    const onSubmit = (data: GiftForm) => {
        console.log(data)
    }
    return (
        <Dialog>
            <Dialog.Button width={'100%'}>
                <Button color={'default'} height={52}>
                    <PlusIcon size={19} color={'#1B1B1E'} />
                </Button>
            </Dialog.Button>
            <Dialog.Content width={335}>
                <Dialog.Title>당첨 상품 이미지 및 이름 등록</Dialog.Title>
                <DialogSubTitle>선물하실 상품 이미지를 등록하세요</DialogSubTitle>
                <Button color={'default'} height={90}>
                    <PlusIcon size={19} color={'#1B1B1E'} />
                    <Box
                        typo={typos.pretendard['12.20.500']}
                        style={{
                            marginTop: 5,
                        }}>
                        상품 이미지 등록하기
                    </Box>
                </Button>
                <Divider />
                <DialogSubTitle>선물하실 상품 이름을 적어주세요</DialogSubTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('name', {required: true})}
                    type='text'
                    variant="fill"
                    placeholder="최대 20글자"
                    style={{
                        marginBottom: 36,
                    }}
                />
                <Button type='submit' color="dark" height={52}>
                    등록하기
                </Button>
                </form>
            </Dialog.Content>
        </Dialog>
    )
}

const Divider = styled.hr`
    border: 0.5px solid rgba(27, 27, 30, 0.1);
    margin: 20px 0;
`

const DialogSubTitle = styled.div`
    ${typos.pretendard['14.26.500']};
    color: #121212;
    margin-bottom: 10px;
`
const Button = styled.button<{
    color: 'default' | 'dark'
    height: number
}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    ${({color}) =>
        color === 'default'
            ? css`
                  background: rgba(27, 27, 30, 0.07);
                  color: #848486;
              `
            : css`
                  background: #1b1b1e;
                  color: #fff;
              `}
    border-radius: 15px;
    height: ${extractProp('height')}px;
    width: 100%;
    ${typos.pretendard['14.32.500']}

    &:disabled {
        background: rgba(27, 27, 30, 0.07) !important;
        cursor: default;
    }
`

export default GiftDialog
