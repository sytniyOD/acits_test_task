import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

export function AppRouter() {
	const { isAuth } = useTypedSelector(state => state.authReducer)
	return (
		isAuth
			? <Switch>
				{privateRoutes.map(route =>
					<Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
				)}
				<Redirect to={RouteNames.TODAY} />
			</Switch>
			: <Switch>
				{publicRoutes.map(route =>
					<Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
				)}
				<Redirect to={RouteNames.LOGIN} />
			</Switch>

	)
}