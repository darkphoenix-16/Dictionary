import { createContext, useState } from 'react'

export const AppContext = createContext()

export function AppProvider({ children }) {

    const [preloader, setPreloader] = useState(false);


    return (
        <AppContext.Provider
            value={{
                preloader, setPreloader,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}