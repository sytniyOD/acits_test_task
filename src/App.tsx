import { Layout } from 'antd';
import React, { useEffect } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';
import './App.css';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';


export function App() {

  const { setToken, setAuth, logout } = useActions();
  const auth = localStorage.getItem('auth');
  const error = useTypedSelector(state => state.todayReducer.error);

  useEffect(() => {
    if (auth === 'true') {
      const token = localStorage.getItem('token') || '';
      setToken(token);
      setAuth(true);
    }
    if (error) {
      logout()
    }
  }, [error]);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

