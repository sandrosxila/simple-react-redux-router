import { Route, Routes } from 'react-router';
import './App.css';

import { HomePage } from '/src/pages/Home';
import { AboutPage } from '/src/pages/About';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { UsersPage } from './pages/Users';
import { AuthLayout } from '/src/components/AuthLayout';
import { NavBar } from './components/NavBar';
import { Protected } from './components/Protected'; 

import { ProfilePage } from './pages/Profile';



function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />

        <Route element={ <AuthLayout /> }>
          <Route path="login" element={ <LoginPage /> } />
          <Route path="register" element={ <RegisterPage /> } />
        </Route>

        <Route path="users" element={ <Protected /> }>
          <Route index element={ <UsersPage /> } />
          <Route path=":id" element={ <ProfilePage /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
