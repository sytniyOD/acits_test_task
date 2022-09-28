import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "../..";
import { TAnimals } from "../../../models/today";
import { AnimalsActionsEnum, SetAnimalsAction, SetAnimalsCountAction, SetAnimalsErrorAction, SetAnimalsLoadingAction } from "./animalsTypes";

export const AnimalsActionCreator = {
	setAnimalsLoading: (isLoading: boolean): SetAnimalsLoadingAction => ({ type: AnimalsActionsEnum.SET_ANIMALS_LOADING, payload: isLoading }),
	setAnimalsError: (error: string): SetAnimalsErrorAction => ({ type: AnimalsActionsEnum.SET_ANIMALS_ERROR, payload: error }),
	setAnimals: (animals: TAnimals): SetAnimalsAction => ({ type: AnimalsActionsEnum.SET_ANIMALS, payload: animals }),
	setAnimalsCount: (count: number): SetAnimalsCountAction => ({ type: AnimalsActionsEnum.SET_ANIMALS_COUNT, payload: count }),
	getAnimals: (offset: number): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: AppDispatch) => {
		try {
			try {
				dispatch(AnimalsActionCreator.setAnimalsLoading(true));
				const promise = await axios.get('https://acits-test-back.herokuapp.com/api/animals',
					{
						headers: {
							Authorization: `bearer ${localStorage.getItem('token')}`
						},
						params: {
							offset: offset,
							limit: 5
						}
					}
				)
				const data = promise.data.results;
				const count = promise.data.count;
				dispatch(AnimalsActionCreator.setAnimalsCount(count))
				if (data) {
					dispatch(AnimalsActionCreator.setAnimals(data));
					dispatch(AnimalsActionCreator.setAnimalsLoading(false));
				}
			} catch (e) {
				dispatch(AnimalsActionCreator.setAnimalsError(String(e)));
				dispatch(AnimalsActionCreator.setAnimalsLoading(false));
			}
		} catch (e) {
			dispatch(AnimalsActionCreator.setAnimalsError(String(e)));
			dispatch(AnimalsActionCreator.setAnimalsLoading(false));
		}
	}
}