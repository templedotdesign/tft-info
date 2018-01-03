import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Admin from '../Routes/Admin/Admin';
import Auth from '../Routes/Auth/Auth';
import Home from '../Routes/Home/Home';
import Jobs from '../Routes/Jobs/Jobs';
import Learning from '../Routes/Learning/Learning';
import Notes from '../Routes/Notes/Notes';
import Resources from '../Routes/Resources/Resources';
import SupplierDetails from '../Routes/SupplierDetails/SupplierDetails';
import Suppliers from '../Routes/Suppliers/Suppliers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/admin' component={Admin}/>
          <Route path='/' component={Auth} exact/>
          <Route path='/home' component={Home}/>
          <Route path='/jobs' component={Jobs}/>
          <Route path='/learning' component={Learning}/>
          <Route path='/notes' component={Notes}/>
          <Route path='/resources' component={Resources}/>
          <Route path='/suppliers/:id' component={SupplierDetails}/>
          <Route path='/suppliers' component={Suppliers}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
