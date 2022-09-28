import { TToday } from "../../../models/today";

export interface ITodayState {
	today: TToday;
	isLoading: boolean;
	error: string;
}

export enum TodayActionsEnum {
	SET_TODAY = "SET_TODAY",
	SET_TODAY_ERROR = "SET_TODAY_ERROR",
	SET_TODAY_LOADING = "SET_TODAY_LOADING"
}

export interface SetTodayAction {
	type: TodayActionsEnum.SET_TODAY,
	payload: TToday,
}

export interface SetTodayLoadingAction {
	type: TodayActionsEnum.SET_TODAY_LOADING,
	payload: boolean,
}

export interface SetTodayErrorAction {
	type: TodayActionsEnum.SET_TODAY_ERROR,
	payload: string,
}

export type TodayAction =
	SetTodayAction
	| SetTodayErrorAction
	| SetTodayLoadingAction;