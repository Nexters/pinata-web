import {Icon} from '$assets/icons'
import CircleFilledRadioIcon from '$assets/icons/CircleFilledRadioIcon'
import CircleRadioIcon from '$assets/icons/CircleRadioIcon'
import Flex from '$components/commons/Flex'
import {colors} from '$styles/colors'
import {EventForm} from '$types/Event'
import {extractProp} from '$util/common'
import {PropsWithChildren, ReactNode, useEffect, useState} from 'react'
import {useFormContext} from 'react-hook-form'
import styled, {css, CSSProperties, FlattenSimpleInterpolation} from 'styled-components'

type RadioProps = {
    children: ReactNode
    align?: 'row' | 'vertical'
}

const RadioForm = ({children, align = 'row'}: RadioProps) => {
    return <Wrapper align={align}>{children}</Wrapper>
}

type RadioItemProps = PropsWithChildren<{
    name: keyof EventForm
    value: string
    selectedStyle: FlattenSimpleInterpolation
    unselectedStyle: FlattenSimpleInterpolation
    style?: FlattenSimpleInterpolation
    width: CSSProperties['width']
    height: CSSProperties['height']
    selectIcon?: Icon
    withRadioButton?: boolean
    forceSelectIfEmpty?: boolean
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
    selectIcon,
    withRadioButton = false,
    forceSelectIfEmpty = false,
}: RadioItemProps) => {
    const [selected, setSelected] = useState(false)
    const {register, setValue, watch, clearErrors, setError} = useFormContext()

    const currentValue = watch(name)

    const SelectIcon = selectIcon

    useEffect(() => {
        const nextSeleted = !currentValue && forceSelectIfEmpty
        setSelected(currentValue === value || nextSeleted)
    }, [currentValue, value, forceSelectIfEmpty])

    useEffect(() => {
        if (currentValue) {
            clearErrors(name)
        } else {
            setError(name, {type: 'required'})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue])

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
                    <Flex direction="row" justifyContent={'flex-start'}>
                        {withRadioButton && (
                            <RadioButton>
                                {selected ? (
                                    <CircleFilledRadioIcon size={30} color={colors.blue[100]} />
                                ) : (
                                    <CircleRadioIcon size={30} color={colors.white} />
                                )}
                            </RadioButton>
                        )}
                        {children}
                    </Flex>
                    {SelectIcon && selected && (
                        <IconBox>
                            <SelectIcon size={20} />
                        </IconBox>
                    )}
                </ItemBox>
            </label>
            <HiddenRadioInput
                {...register(name, {required: true, validate: (vallue) => !!value})}
                name={name}
                value={value}
                id={`${name}-${value}`}
            />
        </>
    )
}

const RadioButton = styled.span`
    margin-right: 5px;
    height: 30px;
    width: 30px;
`

const IconBox = styled.span`
    position: absolute;
    bottom: 12px;
    right: 12px;
`

const HiddenRadioInput = styled.input.attrs({
    type: 'radio',
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
    position: relative;
    ${extractProp('defaultStyle')};
    ${({isSelected, selectedStyle, unselectedStyle}) => (isSelected ? selectedStyle : unselectedStyle)};
`

const Wrapper = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'space-around',
})<{align: 'row' | 'vertical'}>`
    position: relative;
    ${({align}) =>
        align === 'vertical' &&
        css`
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
        `}
`

RadioForm.Item = RadioItem

export default RadioForm
