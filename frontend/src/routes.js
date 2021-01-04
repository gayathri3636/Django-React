import React from 'react';
import {Route} from 'react-router-dom';

import ArticleListView from './containers/ArticleListView';
import ArticleDetailView from './containers/ArticleDetailView';
import Login from './containers/Login';
import SignUp from './containers/SignUp';

const BaseRouter=()=>(
    <div>
        <Route exact path="/" component={ArticleListView} />
        <Route exact path='/articles/:articleId' component={ArticleDetailView} />
        <Route exact path="/login" component={Login} />
        <Route exact path = "/signup" component = {SignUp} />
    </div>
)
export default BaseRouter;