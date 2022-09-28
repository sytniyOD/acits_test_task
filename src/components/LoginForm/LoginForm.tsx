import { Alert, Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { rules } from '../../utils/rules';

export function LoginForm() {
  const { error, isLoading } = useTypedSelector(state => state.authReducer)
  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useActions()

  const submit = () => {
    login(username, password);
  }
  return (
    <Form
      onFinish={submit}
    >

      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
      >
        <Input value={username} onChange={e => setLogin(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста, введите пароль!')]}
      >
        <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Item>
      {error &&
        <Form.Item>
          <Alert message={error} type="error" />
        </Form.Item>
      }
      <Form.Item wrapperCol={{ offset: 9, span: 16 }} >
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}
