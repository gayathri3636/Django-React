import React from 'react';
import { Form, Input, Button, Icon, Spin } from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth'

class LoginForm extends React.Component{

  handleFinish = (values) => {
      this.props.onAuth(values.username, values.password)
      this.props.history.push('/');     
  }
render(){
  let errorMessage = null;
  if(this.props.error){
    errorMessage = (
    <p>{this.props.error.message}</p>
    )
  }
  return (
    <div>
      {errorMessage}
      {
        this.props.loading ? 
        <LoadingOutlined style={{fontSize:24}} /> 
        :
        <Form onFinish={this.handleFinish} >
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
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password name="password" />
      </Form.Item>

      <Form.Item>
        <Button  type="primary" htmlType="submit">
          Login
        </Button>
        or
        <NavLink to="/signup/" style={{marginRight:'10px'}}> 
            Signup
        </NavLink>
      </Form.Item>
    </Form>
      }
    </div>
  );
}
}

const mapStateToProps = (state)=>{
  return{
    loading:state.loading,
    error:state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);