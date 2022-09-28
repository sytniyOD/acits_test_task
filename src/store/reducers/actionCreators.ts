import { AnimalsActionCreator } from "./animals/animalsActionCreator";
import { AuthActionCreator } from "./auth/actionCreator";
import { TodayActionCreator } from "./today/todayActionCreator";

export const allActionsCreators = {
	...AuthActionCreator,
	...TodayActionCreator,
	...AnimalsActionCreator
}