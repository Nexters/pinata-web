import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import { EventForm } from '$types/Event'
import {extractProp} from '$util/common'
import {PropsWithChildren, ReactNode, useEffect, useState} from 'react'
import { useFormContext } from 'react-hook-form'
import styled, {css, CSSProperties, FlattenSimpleInterpolation} from 'styled-components'

type RadioProps = {
    children: ReactNode
}

const RadioForm = ({children}: RadioProps) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

type RadioItemProps = PropsWithChildren<{
    name: keyof EventForm
    value: string
    selectedStyle: FlattenSimpleInterpolation
    unselectedStyle: FlattenSimpleInterpolation
    style?: FlattenSimpleInterpolation
    width: CSSProperties['width']
    height: CSSProperties['height']
}>

const RadioItem = ({
    name, 
    value, 
    selectedStyle, 
    unselectedStyle,
    style = css``,
    children,
    width,
    height,
    }: RadioItemProps) => {
    const [selected, setSelected] = useState(false)
    const {register, setValue, watch} = useFormContext()

    const currentValue = watch(name)

    useEffect(() => {
        setSelected(currentValue === value)
    }, [currentValue, value])
    
    return (
        <>
        <label htmlFor={`${name}-${value}`}>
            <ItemBox
                isSelected={selected}
                selectedStyle={selectedStyle}
                unselectedStyle={unselectedStyle}
                width={width}
                height={height}
                onClick={() => {
                    setValue(name, value)
                }}
                defaultStyle={style}>
                <Box>{children}</Box>
            </ItemBox>
        </label>
            <HiddenRadioInput {...register(name, {required: true})} name={name} value={value} id={`${name}-${value}`} />
        </>
    )
}

const HiddenRadioInput = styled.input.attrs({
    type: 'radio'
})`
    width: 0;
    height: 0;
    position: absolute;
    visibility: hidden;
    margin: 0;
    padding: 0;
`

const ItemBox = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'center',
    alignItems: 'center',
})<{
    defaultStyle: FlattenSimpleInterpolation
    isSelected: boolean
    selectedStyle: FlattenSimpleInterpolation
    unselectedStyle: FlattenSimpleInterpolation
}>`
    ${extractProp('defaultStyle')};
    ${({isSelected, selectedStyle, unselectedStyle}) => (isSelected ? selectedStyle : unselectedStyle)};
`

const Wrapper = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-around',
})`
    position: relative;
`

RadioForm.Item = RadioItem

export default RadioForm
