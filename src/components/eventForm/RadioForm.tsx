import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import RadioContextProvider, {useRadioContext} from '$contexts/RadioContext'
import {ValueList} from '$types/common'
import {extractProp} from '$util/common'
import {forwardRef, ReactNode, useEffect} from 'react'
import styled, {css, CSSProperties, FlattenSimpleInterpolation} from 'styled-components'

type RadioProps = {
    children: ReactNode
    values: ValueList<unknown>
    defaultValue?: unknown
}

const RadioForm = ({children, values, defaultValue}: RadioProps) => {
    return (
        <RadioContextProvider values={values} defaultSelected={defaultValue}>
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

    useEffect(() => {
        onSelectInProps(selected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

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
    justifyContent: 'space-around',
})``

RadioForm.Item = RadioItem

export default RadioForm
