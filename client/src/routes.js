import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/layout'
import Categories from './components/Category/category';
import Dashboard from './components/Dashboard/dashboard';
import Join from './components/Join/join';
import AddCourse from './components/AddCourse/addCourse';
import AddInstructor from './components/AddInstructor/addInstructor';
import CourseSingle from './components/Course/courseSingle';
import AddTopic from './components/AddTopic/addTopic';
import Video from './components/Video/video';
import PublicRoute from './components/AuthRoute/publicRoute';
import PrivateRoute from './components/AuthRoute/privateRoute'

const Routes = (props) => { 
    return (
        <Layout user={props.user}>
            <Switch>
                <Route {...props} path="/" exact component={Home}/>
                <Route path="/category" exact component={Categories}/>
                <Route path="/category/:id" exact component={Categories}/>
                <PrivateRoute {...props} path="/dashboard/:id/:role" exact component={Dashboard}/>
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
                <PublicRoute {...props} restricted={true} path="/join" exact component={Join}/>
                <PrivateRoute {...props} path="/add-course" exact component={AddCourse}/>
                <PrivateRoute {...props} path='/add-instructor' exact component={AddInstructor}/>
                <PublicRoute {...props} restricted={false} path='/course/:id' exact component={CourseSingle}/>
                <Route path='/addTopic/:id' exact component={AddTopic}/>
                <Route path='/video/:id' exact component={Video}/>
            </Switch>
        </Layout>
        
    );
};

export default Routes;