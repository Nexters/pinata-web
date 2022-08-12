import Flex from '$components/commons/Flex'
import {typos} from '$styles/typos'
import {ChangeEvent, forwardRef, InputHTMLAttributes} from 'react'
import styled, {css} from 'styled-components'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
    onChange(e: ChangeEvent<HTMLInputElement>): void
    variant?: 'default' | 'fill'
    label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({onChange, variant = 'default', label, ...inputProps}, ref) => {
    return (
        <Flex direction="row">
            {label && <Label>{label}</Label>}
            <InputBox ref={ref} onChange={onChange} variant={variant} {...inputProps} />
        </Flex>
    )
})

const Label = styled.span`
    color: #fff;
    display: inline-flex;
    min-width: 25px;
    margin-right: 15px;
    ${typos.pretendard['13.26.500']};
`

const InputBox = styled.input<{
    variant: 'default' | 'fill'
}>`
    display: flex;
    width: 100%;
    border-radius: 15px;
    color: #121212;
    height: 26px;
    padding: 7px 15px;
    outline: none;

    &::placeholder {
        color: #868687;
    }

    ${typos.pretendard['13.26.500']};

    ${({variant}) =>
        variant === 'default'
            ? css`
                  background: #ffffff;
                  border: 1px solid rgba(27, 27, 30, 0.1);
              `
            : css`
                  background: #eeeeee;
                  border: none;
              `}
`

export default Input
