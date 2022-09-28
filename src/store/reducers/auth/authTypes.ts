
export interface IAuthState {
	isAuth: boolean;
	token: string;
	isLoading: boolean;
	error: string;

}

export enum AuthActionsEnum {
	SET_AUTH = "SET_AUTH",
	SET_TOKEN = "SET_TOKEN",
	SET_ERROR = "SET_ERROR",
	SET_LOADING = "SET_LOADING",
}

export interface SetAuthAction {
	type: AuthActionsEnum.SET_AUTH;
	payload: boolean;
}

export interface SetErrorAction {
	type: AuthActionsEnum.SET_ERROR;
	payload: string;
}

export interface SetTokenAction {
	type: AuthActionsEnum.SET_TOKEN;
	payload: string;
}

export interface SetLoadingAction {
	type: AuthActionsEnum.SET_LOADING;
	payload: boolean;
}

export type AuthAction =
	SetAuthAction
	| SetErrorAction
	| SetLoadingAction
	| SetTokenAction;