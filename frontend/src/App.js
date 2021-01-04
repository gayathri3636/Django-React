import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';
// import ArticleListView from './containers/ArticleListView';

class App extends React.Component {
  componentDidMount(){
    this.props.onTryAutoSignUp()
  }
  render(){
  return (
    <div>
      <Router>
        <CustomLayout {...this.props}>
          <BaseRouter/>
        </CustomLayout>
      </Router>
    </div>
  );
  }
}

const mapStatetoProps = state => {
  return{
    isAuthenticated:state.token!==null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect (mapStatetoProps, mapDispatchToProps)(App);
