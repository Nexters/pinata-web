import {createContext, PropsWithChildren, useContext, useState} from 'react'

type DialogContextState = {
    isOpen: boolean
    toggle(): void
}

const dialogContext = createContext<DialogContextState>({
    isOpen: false,
    toggle: () => {},
})

export const DialogProvider = ({children}: PropsWithChildren<{}>) => {
    const [isOpen, setOpen] = useState(false)

    const toggle = () => setOpen((prev) => !prev)

    return <dialogContext.Provider value={{isOpen, toggle}}>{children}</dialogContext.Provider>
}

export const useDialogContext = () => {
    const context = useContext(dialogContext)

    if (!context) {
        throw new Error(
            'Can not found dialogContext. You must first enclose the component with dialogContext.provider.',
        )
    }

    return context
}
