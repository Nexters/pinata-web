import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import RadioContextProvider, {useRadioContext} from '$contexts/RadioContext'
import {ValueList} from '$types/common'
import {extractProp} from '$util/common'
import {forwardRef, ReactNode} from 'react'
import styled, {css, CSSProperties, FlattenSimpleInterpolation} from 'styled-components'

type RadioProps = {children: ReactNode; values: ValueList<unknown>}

const RadioForm = ({children, values}: RadioProps) => {
    return (
        <RadioContextProvider values={values}>
            <Wrapper>{children}</Wrapper>
        </RadioContextProvider>
    )
}

type RadioItemProps = {
    value: unknown
    children: ReactNode
    width: CSSProperties['width']
    height: CSSProperties['height']
    selectedStyle: FlattenSimpleInterpolation
    unselectedStyle: FlattenSimpleInterpolation
    style?: FlattenSimpleInterpolation
    onSelect(value: unknown): void
}

const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(({onSelect: onSelectInProps,  value, children, width, height, selectedStyle, unselectedStyle, style = css``}, ref) => {
    const {onSelect, selected} = useRadioContext()

    const isSelected = selected === value

    return (
        <ItemBox
            isSelected={isSelected}
            selectedStyle={selectedStyle}
            unselectedStyle={unselectedStyle}
            width={width}
            height={height}
            onClick={() => {
                onSelect(value)
                onSelectInProps(value)
            }}
            defaultStyle={style}>
            <Box>{children}</Box>
        </ItemBox>
    )
})

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
    justifyContent: 'space-between',
})``

RadioForm.Item = RadioItem

export default RadioForm
