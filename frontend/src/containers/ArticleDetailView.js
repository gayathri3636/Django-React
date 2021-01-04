import React from 'react';
import Articles from '../components/Article';
import CustomForm from '../components/Form';
import axios from 'axios';
import {Button, Card} from 'antd';


class ArticleDetailView extends React.Component{
    state={
        article:{}
    }
    componentDidMount(){
        const articleId = this.props.match.params.articleId;
        axios.get(`http://127.0.0.1:8000/api/${articleId}`)
        .then(res=>{
            this.setState({
                article:res.data
            });
            console.log(res.data);
        })
    }

    handleDelete=(event)=>{
        const articleId = this.props.match.params.articleId;
        axios.delete(`http://127.0.0.1:8000/api/${articleId}`);
        this.props.history.push('/')


    }

    updateState=(title, content)=>{
        this.setState({article: {title: title, content: content}})
    }

    render(){
        return(
            <div>
            <Card title = {this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
            <br/>
            <CustomForm requestType="put" Details= {(title, content)=>this.updateState(title, content)} articleId={this.props.match.params.articleId} btnText="UPDATE" />
            <form onSubmit={this.handleDelete}>
                <Button type="danger" htmlType="submit">Delete</Button>
            </form>
            </div>
        )
    }
}
export default ArticleDetailView;