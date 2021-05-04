import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../Components/Header/index'

import Home from '../pages/Home/index'
import Dragons from '../pages/Dragons/index'



const Router = () => {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Header/>
          <Home/>
          </Route>
          <Route exact path="/dragons">     
          <Header/>
          <Dragons/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;