import React from "react";
import { Layout, Menu, MenuProps, Row } from 'antd'
import { useHistory } from "react-router-dom";
import { RouteNames } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export function Navbar() {
	const router = useHistory();
	const { isAuth } = useTypedSelector(state => state.authReducer);
	const { logout } = useActions();

	const items: MenuProps['items'] = [
		{
			label: 'Сегодня', key: 'today', onClick: () => { if (isAuth) router.push(RouteNames.TODAY) }
		},
		{
			label: 'Зверюшки', key: 'animals', onClick: () => { if (isAuth) router.push(RouteNames.ANIMALS) }
		},
		{
			label: 'Выйти', key: 'logout', disabled: !isAuth, onClick: () => { if (isAuth) logout() }
		}
	];

	return (
		<Layout.Header>
			<Row justify="end">
				<Menu
					theme="dark"
					mode="horizontal"
					selectable={false}
					items={items}
				/>
			</Row>
		</Layout.Header>
	)
}