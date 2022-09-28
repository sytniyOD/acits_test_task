import { ITodayState, TodayAction, TodayActionsEnum } from "./todayTypes";

const initialState: ITodayState = {
	today: [],
	isLoading: false,
	error: ''
}

export function todayReducer(state = initialState, action: TodayAction) {
	switch (action.type) {
		case TodayActionsEnum.SET_TODAY:
			return { ...state, today: action.payload, isLoading: false }
		case TodayActionsEnum.SET_TODAY_ERROR:
			return { ...state, error: action.payload, isLoading: false }
		case TodayActionsEnum.SET_TODAY_LOADING:
			return { ...state, isLoading: action.payload }
		default:
			return state;
	}
}