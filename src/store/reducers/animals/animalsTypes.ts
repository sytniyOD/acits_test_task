import { IAnimal, TAnimals } from "../../../models/today";

export interface IAnimalsState {
	animals: TAnimals;
	isLoading: boolean;
	error: string;
	count: number;
}

export enum AnimalsActionsEnum {
	SET_ANIMALS = "SET_ANIMALS",
	SET_ANIMALS_ERROR = "SET_ANIMALS_ERROR",
	SET_ANIMALS_LOADING = "SET_ANIMALS_LOADING",
	SET_ANIMALS_COUNT = "SET_ANIMALS_COUNT"
}

export interface SetAnimalsAction {
	type: AnimalsActionsEnum.SET_ANIMALS,
	payload: TAnimals,
}

export interface SetAnimalsLoadingAction {
	type: AnimalsActionsEnum.SET_ANIMALS_LOADING,
	payload: boolean,
}

export interface SetAnimalsErrorAction {
	type: AnimalsActionsEnum.SET_ANIMALS_ERROR,
	payload: string,
}

export interface SetAnimalsCountAction {
	type: AnimalsActionsEnum.SET_ANIMALS_COUNT,
	payload: number,
}

export type AnimalsAction =
	SetAnimalsAction
	| SetAnimalsErrorAction
	| SetAnimalsLoadingAction
	| SetAnimalsCountAction;