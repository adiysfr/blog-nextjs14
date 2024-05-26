'use client'
import React from 'react';
import type { FormProps } from 'antd';
import { useRouter } from 'next/navigation'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import serviceMethod from '../../../api/service/serviceMethod';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const FormLogin = () => {
  const router = useRouter();
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const body ={
      name : values.username,
      password : values.password    
    }
    // serviceMethod.postDataLogin(body);
    try {
      const res = await axios.post('http://localhost:4000/users/login', body,  {
        headers: {
          'api-key': '05f0b227-d216-4ba9-8c98-8be9b5e5c48b',
          'Content-Type': 'application/json'
        }
      });
      const expireToken = jwtDecode(res.data.data.access_token)
      // const currentDate = new Date().getTime()
      document.cookie = `tokenAuth=${JSON.stringify({...res.data.data, expireToken: expireToken.exp})}; path=/; max-age=${60 * 60 * 24 * 7}; samesite=strict`;

      localStorage.setItem("tokenAuth", JSON.stringify({...res.data.data, expireToken: expireToken.exp}));
      // router.push('/')
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      style={{ maxWidth: 500 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      className='mx-auto'
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}
;

export default FormLogin;