import { Card, Layout, Row } from "antd";
import React from "react";
import { LoginForm } from "../../components/LoginForm";
import styles from './login.module.css'

export function Login() {
	localStorage.setItem('auth', 'false');
	return (
		<Layout>
			<Row justify="center" align="middle" className={styles.h100}>
				<Card>
					<LoginForm />
				</Card>
			</Row>
		</Layout>
	)
}