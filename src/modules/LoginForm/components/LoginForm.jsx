import React, {Component} from "react";
import { Form, Input } from "antd";
import { Block, Button } from "../../../components";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';

class LoginForm extends Component {
    render() {
        const onFinish = (values: any) => {
            console.log('Received values of form: ', values);
        };
        return (
            <div>
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйства, войдите в ваш аккаунт</p>
                </div>
                <Block>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Пожалуйста, введите Ваше имя пользователя!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Имя пользователя" size={"large"} style={{borderRadius: 5}}/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Пожалуйста, введите Ваш пароль!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Пароль"
                                size={"large"}
                                style={{borderRadius: 5}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size={"large"} style={{borderRadius: 5}}>
                                Войти в аккаунт
                            </Button>
                        </Form.Item>
                        <Link className={"auth__register-link"} to={"/register"}>Зарегистрироваться</Link>
                    </Form>
                </Block>
            </div>
        )
    }
}
export default LoginForm;