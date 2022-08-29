import React from 'react';
import './Auth.scss';
import LoginForm from '../../modules/LoginForm/components/LoginForm';
import RegisterForm from '../../modules/RegisterForm/components/RegisterForm';
// import { Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Routes>
                <Route>
                    <Route path={"/"} element={<LoginForm/>} />
                    <Route path={"login"} element={<LoginForm/>} />
                    <Route path={"register"} element={<RegisterForm/>} />
                </Route>
            </Routes>
            {/*<Route exact path={"/"} component={LoginForm} />*/}
            {/*<Route exact path={"/register"} render={() => <h1>hiputin</h1>} />*/}
        </div>
    </section>
);

export default Auth;