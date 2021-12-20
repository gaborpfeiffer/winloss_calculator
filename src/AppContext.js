import { createContext, useReducer } from 'react'

const initState = () => {
	const savedSelectedStrategy = JSON.parse(localStorage.getItem('selectedStrategy')) || {}
	const savedStrategies = JSON.parse(localStorage.getItem('strategies')) || []
	return {
		selectedStrategy: savedSelectedStrategy,
		strategies: savedStrategies
	}
}

const appReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_STRATEGY': {
			state.strategies.push(action.payload)
			const newStrategies = state.strategies
			localStorage.setItem('strategies', JSON.stringify(newStrategies))
			return {
				...state,
				strategies: newStrategies
			}

		}
		case 'DELETE_STRATEGY': {
			const newStrategies = state.strategies.filter((value, key) => {
				return key !== action.payload

			})
			localStorage.setItem('strategies', JSON.stringify(newStrategies))
			return {
				...state,
				strategies: newStrategies
			}
		}
		case 'SELECT_STRATEGY': {
			localStorage.setItem('selectedStrategy', JSON.stringify(action.payload))
			return {
				...state,
				selectedStrategy: action.payload
			}
		}
		default: {
			return
		}
	}
}

export const AppContext = createContext({})

export const AppState = ({ children }) => {

	const [state, dispatch] = useReducer(appReducer, {}, initState)

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}
