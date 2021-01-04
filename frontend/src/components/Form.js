import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
// const FormItem = Form.Item;

class CustomForm extends React.Component {
    state={
        title:'',
        content:''
    }
handleSubmit=(event, requestType, articleId)=>{
        const {title,content} = this.state;

        switch(requestType){
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',{
                    title: title,
                    content:content
                })
                .then(res=>console.log(res))
                .catch((err)=>console.log(err));

            case 'put':
                 axios.put(`http://127.0.0.1:8000/api/${articleId}/`,{
                    title:title,
                    content:content
                })
                .then(res=>{
                    this.props.Details(res.data.title, res.data.content)}
                    )
                .catch(err=>console.log(err));
                break;
            }

    }

    handleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
render(){
  return (
      <div>
        <Form>
      <Form.Item label="Title" >
        <Input name="title" onChange={this.handleChange} placeholder="input title" />
      </Form.Item>
      <Form.Item
        label="Content"
      >
        <Input name="content" onChange={this.handleChange} placeholder="input content" />
      </Form.Item>
      <Form.Item>
  <Button onClick={(event)=>this.handleSubmit(event,this.props.requestType, this.props.articleId)}  type="primary">{this.props.btnText}</Button>
      </Form.Item>
        </Form>
    </div>
  );
}
};

export default CustomForm;