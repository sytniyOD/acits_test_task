import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "../..";
import { TToday } from "../../../models/today";
import { SetTodayAction, SetTodayErrorAction, SetTodayLoadingAction, TodayActionsEnum } from "./todayTypes";

export const TodayActionCreator = {
	setTodayLoading: (isLoading: boolean): SetTodayLoadingAction => ({ type: TodayActionsEnum.SET_TODAY_LOADING, payload: isLoading }),
	setTodayError: (error: string): SetTodayErrorAction => ({ type: TodayActionsEnum.SET_TODAY_ERROR, payload: error }),
	setToday: (today: TToday): SetTodayAction => ({ type: TodayActionsEnum.SET_TODAY, payload: today }),
	getToday: (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: AppDispatch) => {
		try {
			try {
				dispatch(TodayActionCreator.setTodayLoading(true));
				const promise = await axios.get('https://acits-test-back.herokuapp.com/api/executions/today',
					{
						headers: {
							Authorization: `bearer ${localStorage.getItem('token')}`
						}
					}
				)
				const data = promise.data.results;
				if (data) {
					dispatch(TodayActionCreator.setToday(data));
					dispatch(TodayActionCreator.setTodayLoading(false));
				}
			} catch (e) {
				dispatch(TodayActionCreator.setTodayError(String(e)));
				dispatch(TodayActionCreator.setTodayLoading(false));
			}
		} catch (e) {
			dispatch(TodayActionCreator.setTodayError(String(e)));
			dispatch(TodayActionCreator.setTodayLoading(false));
		}
	}
}