import * as SelectPrimitive from '@radix-ui/react-select'
import styled, {css} from 'styled-components'
import {CheckIcon, ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons'
import {ReactNode} from 'react'
import {typos} from '$styles/typos'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger)`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 15px;
    height: 40px;
    background-color: #fff;
    color: #1b1b1e;
    border: 1px solid rgba(27, 27, 30, 0.1);
    border-radius: 15px;
    margin-bottom: 10px;
    width: 100%;
    ${typos.pretendard['14.32.500']}
    outline: none;
`

const StyledIcon = styled(SelectPrimitive.SelectIcon)`
    padding-top: 4px;
    color: #5152524d;
`

const StyledContent = styled(SelectPrimitive.Content)`
    overflow: hidden;
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid rgba(27, 27, 30, 0.1);
    padding: 6px;
`

const StyledViewport = styled(SelectPrimitive.Viewport)`
    padding: 5px;
`

function Content({children, ...props}: {children: ReactNode}) {
    return (
        <SelectPrimitive.Portal>
            <StyledContent {...props}>{children}</StyledContent>
        </SelectPrimitive.Portal>
    )
}

const StyledItem = styled(SelectPrimitive.Item)`
    all: unset;
    font-size: 13px;
    color: #1b1b1e;
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 35px 0 25px;
    position: relative;
    user-select: none;
`

const StyledItemText = styled(SelectPrimitive.ItemText)`
    ${typos.pretendard['14.32.500']}
`

const StyledLabel = styled(SelectPrimitive.Label)`
    padding: 0 25px;
    color: #1b1b1e;
    ${typos.pretendard['16.19.700']}
`

const StyledSeparator = styled(SelectPrimitive.Separator)`
    height: 1px;
    background-color: rgba(27, 27, 30, 0.1);
    margin: 8px 0;
`

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const scrollButtonStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background-color: #fff;
    color: #5152524d;
    cursor: default;
`

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
    ${scrollButtonStyles}
`

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
    ${scrollButtonStyles}
`

// Exports
export const Select = SelectPrimitive.Root
export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = StyledIcon
export const SelectContent = Content
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton
export const SelectItemText = StyledItemText

// Your app...
const Box = styled.div``

export const SelectBox = ({label}: {label: string}) => (
    <Box>
        <Select>
            <SelectTrigger aria-label={label}>
                <SelectValue placeholder="직접 입력" />
                <SelectIcon>
                    <ChevronDownIcon />
                </SelectIcon>
            </SelectTrigger>
            <SelectContent>
                <SelectScrollUpButton>
                    <ChevronUpIcon />
                </SelectScrollUpButton>
                <SelectViewport>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">
                            <SelectItemText>Apple</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="banana">
                            <SelectItemText>Banana</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="blueberry">
                            <SelectItemText>Blueberry</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="grapes">
                            <SelectItemText>Grapes</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="pineapple">
                            <SelectItemText>Pineapple</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                    </SelectGroup>

                    <SelectSeparator />

                    <SelectGroup>
                        <SelectLabel>Vegetables</SelectLabel>
                        <SelectItem value="aubergine">
                            <SelectItemText>Aubergine</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="broccoli">
                            <SelectItemText>Broccoli</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="carrot" disabled>
                            <SelectItemText>Carrot</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="courgette">
                            <SelectItemText>Courgette</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="leek">
                            <SelectItemText>leek</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                    </SelectGroup>

                    <SelectSeparator />

                    <SelectGroup>
                        <SelectLabel>Meat</SelectLabel>
                        <SelectItem value="beef">
                            <SelectItemText>Beef</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="chicken">
                            <SelectItemText>Chicken</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="lamb">
                            <SelectItemText>Lamb</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                        <SelectItem value="pork">
                            <SelectItemText>Pork</SelectItemText>
                            <SelectItemIndicator>
                                <CheckIcon />
                            </SelectItemIndicator>
                        </SelectItem>
                    </SelectGroup>
                </SelectViewport>
                <SelectScrollDownButton>
                    <ChevronDownIcon />
                </SelectScrollDownButton>
            </SelectContent>
        </Select>
    </Box>
)

export default SelectBox
