import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "../..";
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetTokenAction } from "./authTypes";

export const AuthActionCreator = {
	setToken: (token: string): SetTokenAction => ({ type: AuthActionsEnum.SET_TOKEN, payload: token }),
	setAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
	setLoading: (isLoading: boolean): SetLoadingAction => ({ type: AuthActionsEnum.SET_LOADING, payload: isLoading }),
	setError: (error: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: error }),
	login: (login: string, password: string): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreator.setLoading(true));
			const promise = await axios.post(
				'https://acits-test-back.herokuapp.com/api/login',
				{
					login, password
				}
			)
			const data = promise.data.accessToken;
			if (data) {
				localStorage.setItem('token', data);
				localStorage.setItem('auth', 'true');
				dispatch(AuthActionCreator.setAuth(true));
				dispatch(AuthActionCreator.setToken(data));
			}
			dispatch(AuthActionCreator.setLoading(true));
		} catch (e) {
			dispatch(AuthActionCreator.setError('Имя пользователя или пароль введены не верно'))
		}
	},
	logout: () => async (dispatch: AppDispatch) => {
		localStorage.removeItem('token');
		localStorage.setItem('auth', 'false');
		dispatch(AuthActionCreator.setAuth(false));
		dispatch(AuthActionCreator.setToken(''));
	}
}