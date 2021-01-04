import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  Form,
  Input,
  Button,
} from 'antd';
import {connect} from 'react-redux'
import * as actions from '../store/actions/auth';
// import { QuestionCircleOutlined } from '@ant-design/icons';
// const { Option } = Select;
// const AutoCompleteOption = AutoComplete.Option;
  

class RegistrationForm extends React.Component{
    render(){

  const onFinish = (values) => {
    this.props.onAuth(values.username,values.email, values.password1, values.confirm)
    this.props.history.push('/')
  };


  return (
    <Form
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
        <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input name="username" />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        or
        <NavLink to="/login/" style={{marginRight:'10px'}}> 
            Login
        </NavLink>
      </Form.Item>
    </Form>
  );
};
}


const mapStateToProps = (state)=>{
    return{
      loading:state.loading,
      error:state.error
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email,  password1, password2) => dispatch(actions.authSignUp(username, email, password1, password2)) 
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);