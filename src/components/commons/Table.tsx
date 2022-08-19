import { colors } from '$styles/colors'
import { typos } from '$styles/typos'
import { extractProp } from '$util/common'
import { Children, cloneElement, createContext, ReactNode, isValidElement, useContext } from 'react'
import styled, { CSSProperties } from 'styled-components'
import Flex from './Flex'

type TableContextProps = {
    columnSizeList: number[]
    gap: number
    width: CSSProperties['width']
    paddingTop: number
}

const TableContext = createContext<TableContextProps>({
    columnSizeList: [],
    gap: 20,
    width: '100%',
    paddingTop: 0,
})

export const useTableContext = () => {
    return useContext(TableContext)
}

type TableProps = {
    children: ReactNode
    columnSizeList: number[]
    gap?: number
    width?: CSSProperties['width']
    paddingTop?: number
}
export const Table = ({ children, columnSizeList, gap = 20, width = '100%', paddingTop = 0 }: TableProps) => {
    const context: TableContextProps = {
        columnSizeList,
        gap,
        width,
        paddingTop,
    }

    return (
        <TableContext.Provider value={context}>
            <TableContainer>{children}</TableContainer>
        </TableContext.Provider>
    )
}

const TableContainer = styled(Flex).attrs({
    direction: 'column'
})`
    gap: 2px;
`

type TableHeadersProps = {
    children: ReactNode
}
export const TableHeaders = ({ children }: TableHeadersProps) => {
    const { gap, width } = useContext(TableContext)

    return (
        <TableHeadersContainer direction="row" gap={gap} width={width}>
            {Children.map(children, (child, order) => {
                if (isValidElement(child)) {
                    return cloneElement(child, { order })
                }

                return child
            })}
        </TableHeadersContainer>
    )
}

const TableHeadersContainer = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center',
})<{ gap: number; width: CSSProperties['width'] }>`
    width: ${extractProp('width')};
    gap: ${extractProp('gap')}px;
    border-bottom: 1px solid rgba(255, 255, 255, .15);
    margin-bottom: 16px;
`

type TableRowProps = {
    children: ReactNode
}
export const TableRow = ({ children }: TableRowProps) => {
    const { gap, width } = useContext(TableContext)

    return (
        <TableRowContainer gap={gap} width={width}>

            {Children.map(children, (child, order) => {
                if (isValidElement(child)) {
                    return cloneElement(child, { order })
                }

                return child
            })}
        </TableRowContainer>
    )
}

const TableRowContainer = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center',
})<{ gap: number; width: CSSProperties['width'] }>`
    width: ${extractProp('width')};
    min-height: 52px;
    border-radius: 50px;
    background: transparent;
    gap: ${extractProp('gap')}px;
    flex-shrink: 0;
    color: ${colors.white};
    ${typos.pretendard['14.26.500']};
`

type TableHeaderProps = {
    align?: CSSProperties['textAlign']
    order?: number
    width?: number
    paddingLeft?: number
    children?: ReactNode
    alignItems?: CSSProperties['alignItems']
}

export const TableHeader = ({ children, align, order, paddingLeft, alignItems }: TableHeaderProps) => {
    const { columnSizeList, paddingTop } = useContext(TableContext)

    return (
        <TableHeaderContainer
            align={align}
            width={columnSizeList[order || 0] || 0}
            paddingLeft={paddingLeft}
            alignItems={alignItems}
            paddingTop={paddingTop}
        >
            {children}
        </TableHeaderContainer>
    )
}
const TableHeaderContainer = styled(Flex).attrs({
    direction: 'row',
    justifyContent: 'center',
})<TableHeaderProps & { paddingTop: number }>`
    text-align: ${extractProp('align')};
    width: ${({ paddingLeft = 0, width }) => (width === undefined ? undefined : width - paddingLeft)}px;
    padding-top: ${extractProp('paddingTop')}px;
    padding-bottom: 16px;
    padding-left: ${extractProp('paddingLeft')}px;
    color: ${colors.white};
    flex-shrink: 0;
    align-items: ${extractProp('alignItems')};
    ${typos.pretendard['14.26.700']};
`

type TableCellProps = {
    order?: number
    align?: CSSProperties['textAlign']
    children?: ReactNode
    color?: string
}
export const TableCell = ({ children, align, order, color }: TableCellProps) => {
    const { columnSizeList } = useContext(TableContext)

    return (
        <TableCellContainer width={columnSizeList[order || 0] || 0}>
            <TableCellSpan color={color} align={align}>
                {children}
            </TableCellSpan>
        </TableCellContainer>
    )
}

const TableCellContainer = styled(Flex).attrs({
    direction: 'column',
    justifyContent: 'center',
})<{width: number}>`
    width: ${extractProp('width')}px;
    flex-shrink: 0;
`

const TableCellSpan = styled.span<TableCellProps>`
    text-align: ${extractProp('align')};
    color: ${extractProp('color')};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`
