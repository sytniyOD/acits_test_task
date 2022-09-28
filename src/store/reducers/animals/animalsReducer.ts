import { AnimalsAction, AnimalsActionsEnum, IAnimalsState } from "./animalsTypes";

const initialState: IAnimalsState = {
	animals: [],
	isLoading: false,
	error: '',
	count: 0,
}

export function animalsReducer(state = initialState, action: AnimalsAction) {
	switch (action.type) {
		case AnimalsActionsEnum.SET_ANIMALS:
			return { ...state, animals: action.payload, isLoading: false }
		case AnimalsActionsEnum.SET_ANIMALS_ERROR:
			return { ...state, error: action.payload, isLoading: false }
		case AnimalsActionsEnum.SET_ANIMALS_LOADING:
			return { ...state, isLoading: action.payload }
		case AnimalsActionsEnum.SET_ANIMALS_COUNT:
			return { ...state, count: action.payload }
		default:
			return state;
	}
}