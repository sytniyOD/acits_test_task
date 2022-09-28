
import { Animals } from "../pages/Animals/Animals";
import { Login } from "../pages/Login/Login";
import { Today } from "../pages/Today/Today";

export interface IRoute {
	path: string;
	component: React.ComponentType;
	exact?: boolean;
}

export enum RouteNames {
	LOGIN = "/login",
	TODAY = '/today',
	ANIMALS = '/animals'
}

export const publicRoutes: IRoute[] = [
	{
		path: RouteNames.LOGIN, exact: true, component: Login
	}
]

export const privateRoutes: IRoute[] = [
	{
		path: RouteNames.TODAY, exact: true, component: Today
	},
	{
		path: RouteNames.ANIMALS, exact: true, component: Animals
	}
]

