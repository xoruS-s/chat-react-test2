import React, {Component} from "react";
import { Form, Input } from "antd";
import {Block, Button} from "../../../components";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

// class RegisterForm extends Component {
//
// }
const RegisterForm = (props) => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат необходима регистрация</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}>
                    <Form.Item
                        name="e-mail"
                        rules={[{ required: true, message: 'Пожалуйста, введите Ваш e-mail!' }]}>
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" size={"large"} style={{borderRadius: 5}} type="email"/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Пожалуйста, введите Ваше имя пользователя!' }]}>
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" size={"large"} style={{borderRadius: 5}} type="user"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Пожалуйста, введите Ваш пароль!' }]}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                            size={"large"}
                            style={{borderRadius: 5}}/>
                    </Form.Item>
                    <Form.Item
                        name="repassword"
                        rules={[{ required: true, message: 'Пожалуйста, повторите Ваш пароль!' }]}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Повторите пароль"
                            size={"large"}
                            style={{borderRadius: 5}}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size={"large"} style={{borderRadius: 5}}>
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Link className={"auth__register-link"} to={"/login"}>Авторизироваться</Link>
                </Form>
            </Block>
        </div>
    )
};
export default RegisterForm;