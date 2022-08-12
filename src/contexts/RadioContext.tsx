import {useState} from 'react'
import {createContext, ReactNode} from 'react'
import {ArrayElement, ValueList} from '$types/common'
import {useContext} from 'react'

type RadioContextState = {
    values: ValueList<unknown>
    selected: ArrayElement<ValueList<unknown>> | null
    onSelect(value: ArrayElement<ValueList<unknown>>): void
}

const radioContext = createContext<RadioContextState>({
    values: [],
    selected: null,
    onSelect: () => {},
})

const RadioContextProvider = ({
    values,
    defaultSelected = null,
    children,
}: {
    values: ValueList<unknown>
    defaultSelected?: ArrayElement<ValueList<unknown>>
    children: ReactNode
}) => {
    const [selected, setSelected] = useState<unknown>(defaultSelected)

    const onSelect = (value: ArrayElement<ValueList<unknown>>) => {
        setSelected(value)
    }

    return (
        <radioContext.Provider
            value={{
                values,
                selected,
                onSelect,
            }}>
            {children}
        </radioContext.Provider>
    )
}

export const useRadioContext = () => {
    const context = useContext(radioContext)

    if (!context) {
        throw new Error('Can not found radioContext. You must first enclose the component with radioContext.provider.')
    }

    return context
}

export default RadioContextProvider
