import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionTypes from '../../Store/Actions/ActionsTypes';

import Layout from '../../Components/Layout/Layout';
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
        <Layout mode={this.props.mode}>
          <button onClick={() => this.props.onUpdateMode('agent')}>AgentMode</button>
          <button onClick={() => this.props.onUpdateMode('admin')}>AdminMode</button>
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
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMode: (newMode) => dispatch({type: actionTypes.UPDATE_MODE, payload: {mode: newMode}})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
