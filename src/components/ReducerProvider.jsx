import { createContext, useReducer } from 'react'

const initialState = {
    showAbout: true,
    showFavorites: true,
    showContact: true
}

const sectionReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_ABOUT':
            return { ...state, showAbout: !state.showAbout }
        case 'TOGGLE_FAVORITES':
            return { ...state, showFavorites: !state.showFavorites }
        case 'TOGGLE_CONTACT':
            return { ...state, showContact: !state.showContact }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const SectionContext = createContext()

const ReducerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sectionReducer, initialState)
    return (
        <SectionContext.Provider value={{ state, dispatch }}>
            {children}
        </SectionContext.Provider>
    )
}

export { SectionContext, ReducerProvider, initialState, sectionReducer }