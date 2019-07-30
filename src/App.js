import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
//import {connect} from 'react-redux'
import './App.css';
//import * as personAction from './redux/Actions/personAction';
import AddedPersons from './components/addperson/AddPerson'
import List from './components/listPerson';
import Reference from './components/Reference'
import NavBar from './components/NavBar';
import Header from './components/Header';


class App extends Component {
  render() {
    return (      
      <div>
        <Header />
        <NavBar />
        <Switch>
        <Route path='/add' component={AddedPersons}  />
        <Route path='/add' component={List} />
        <Route path='/reference' component={Reference} />
        </Switch>
      </div>
     );
  }
}
// const mapStateToProps = (state, ownProps) => {
//   return {
//     person: state.person
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createPerson: person => dispatch(personAction.createPerson(person)),
//     deletePerson: index =>dispatch(personAction.deletePerson(index))
//   }
// };

// //Connect function bridge the gap between store and components and provide a way to pass state as props to display data or dispatch any actions to the Redux store.
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App