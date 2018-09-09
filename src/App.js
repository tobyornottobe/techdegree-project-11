import React, { Component } from 'react';
import './css/App.css';
import Container from './components/Container'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

// Application entypoint with Route setup
class App extends Component {
  render() {
    return (

          <BrowserRouter>
            <div className="container">
              <Switch>
                <Route exact path="/" render={() => (<Container query='love' />)} />
                <Route path="/spring" render={() => (<Container query='spring'/>)} />
                <Route path="/summer" render={() => (<Container query='summer'/>)} />
                <Route path="/autumn" render={() => (<Container query='autumn'/>)} />
                <Route path="/winter" render={() => (<Container query='winter'/>)} />
                <Route render={ () => (<PageNotFound/>)} />
              </Switch>
            </div>
          </BrowserRouter>


    );
  }

}; //end App class

export default App;
