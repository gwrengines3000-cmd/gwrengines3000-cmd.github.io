import { useContext } from 'react'
import { SectionContext } from './ReducerProvider.jsx'

const ReducerToggle = () => {
    const { dispatch } = useContext(SectionContext)

    const buttons = [
        { type: 'TOGGLE_ABOUT', label: 'Toggle About' },
        { type: 'TOGGLE_FAVORITES', label: 'Toggle Favorites' },
        { type: 'TOGGLE_CONTACT', label: 'Toggle Contact' },
        { type: 'RESET', label: 'Reset' }
    ]

    return (
        <div>
            {buttons.map((button, index) => (
                <button key={index} onClick={() => dispatch({ type: button.type })}>
                    {button.label}
                </button>
            ))}
        </div>
    )
}

export default ReducerToggle