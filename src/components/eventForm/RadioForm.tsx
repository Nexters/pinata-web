import {Box} from '$components/commons/Box'
import Flex from '$components/commons/Flex'
import RadioContextProvider, {useRadioContext} from '$contexts/RadioContext'
import {ValueList} from '$types/common'
import {ReactNode} from 'react'
import styled, {CSSProperties} from 'styled-components'

const RadioForm = ({children, values}: {children: ReactNode; values: ValueList<unknown>}) => {
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
    selectedStyle: CSSProperties
    defaultStyle: CSSProperties
}

const RadioItem = ({value, children, width, height, selectedStyle, defaultStyle}: RadioItemProps) => {
    const {onSelect, selected} = useRadioContext()

    const isSelected = selected === value

    return (
        <Flex
            direction="column"
            justifyContent={'center'}
            alignItems={'center'}
            style={isSelected ? selectedStyle : defaultStyle}
            width={width}
            height={height}
            onClick={() => {
                onSelect(value)
            }}>
            <Box>{children}</Box>
        </Flex>
    )
}

const Wrapper = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-between',
})``

RadioForm.Item = RadioItem

export default RadioForm
