import Flex from '$components/commons/Flex'
import { colors } from '$styles/colors'
import {typos} from '$styles/typos'
import {ChangeEvent, forwardRef, InputHTMLAttributes} from 'react'
import styled from 'styled-components'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
    onChange(e: ChangeEvent<HTMLInputElement>): void
    label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({onChange, label, ...inputProps}, ref) => {
    return (
        <Flex direction="row">
            {label && <Label>{label}</Label>}
            <InputBox ref={ref} onChange={onChange} {...inputProps} />
        </Flex>
    )
})

const Label = styled.span`
    color: ${colors.white};
    display: inline-flex;
    min-width: 25px;
    margin-right: 15px;
    ${typos.pretendard['13.26.500']};
`

const InputBox = styled.input`
    display: flex;
    width: 100%;
    border-radius: 15px;
    color: ${colors.white};
    height: 26px;
    padding: 7px 15px;
    outline: none;

    &::placeholder {
        color: ${colors.white};
    }

    ${typos.pretendard['13.26.500']};

    background: ${colors.black[700]};
    border: 1px solid rgba(255, 255, 255, 0.1);
`

export default Input
