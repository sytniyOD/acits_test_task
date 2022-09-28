
export interface ITodayState {
	today: TToday;
	isLoading: boolean;
	error: string;
}

export interface ITodayAppointment {
	animal: IAnimal;
	id: string;
	time: string;
	type: string;
}

export interface IAnimal {
	age: number;
	height: number | null;
	heightUnit: string;
	id: string;
	name: String;
	spec: ISpec;
	weight: number | null;
	weightUnit: string;
}

export interface ISpec {
	id: string;
	name: string;
	type: string
}

export type TToday = Array<ITodayAppointment>
export type TAnimals = Array<IAnimal>
