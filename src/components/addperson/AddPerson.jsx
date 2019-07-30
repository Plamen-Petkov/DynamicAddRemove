import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as personAction from '../../redux/Actions/personAction'
import List from '../listPerson';


class AddedPersons extends Component {
    constructor(props){
        super(props)
        this.state = {
          personIdNomber:'',
          firstName: '',
          secondName: '',
          lastName: '',
          dateTime: '',
          mkb: ''
        }
      }
    
      handleChange = (event) => {
        let fieldName = event.target.name
        let fieldValue = event.target.value
    
        this.setState({[fieldName]: fieldValue})
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        let now = new Date()
      
        let person = {
          personIdNomber: this.state.personIdNomber,
          firstName: this.state.firstName,
          secondName: this.state.secondName,
          lastName: this.state.lastName,
          dateTime: this.state.dateTime || now.toLocaleString(),
          mkb: this.state.mkb      
        }
        this.props.createPerson(person);
        this.setState({
          personIdNomber:'',
          firstName: '',
          secondName: '',
          lastName: '' ,
          mkb: ''
        })
      }
    
         
    
      render() {
        return (
          <div className="container">
            
              <h3>Форма за добавяне на пациент</h3>
              <form onSubmit={this.handleSubmit}>
                <input placeholder="ЕГН" name='personIdNomber'type="text" onChange={this.handleChange} className="form-control" value={this.state.personIdNomber}/>
                <input placeholder="Име" name='firstName' type="text" onChange={this.handleChange} className="form-control" value={this.state.firstName}/>
                <input placeholder="Презиме" name='secondName' type="text" onChange={this.handleChange} className="form-control" value={this.state.secondName}/>
                <input placeholder="Фамилия" name='lastName' type="text" onChange={this.handleChange} className="form-control" value={this.state.lastName}/>
                <input placeholder="ДД.ММ.ГГГГ г., ЧЧ:ММ ч." name='dateTime' type="text" onChange={this.handleChange} className="form-control" value={this.state.dateTime}/>
                <input placeholder="МКБ" name='mkb' type="text" onChange={this.handleChange} className="form-control" value={this.state.mkb}/><br />
                <input type="submit" className="btn btn-success" value="ADD"/>
              </form>
              <hr />
            
            <List />
            
          </div>
        );
      }
    }
    const mapStateToProps = (state, ownProps) => {
      return {
        person: state.person
      }
    };
    
    const mapDispatchToProps = (dispatch) => {
      return {
        createPerson: person => dispatch(personAction.createPerson(person)),
        //deletePerson: index =>dispatch(personAction.deletePerson(index))
      }
    };
    
    //Connect function bridge the gap between store and components and provide a way to pass state as props to display data or dispatch any actions to the Redux store.
    export default connect(mapStateToProps, mapDispatchToProps)(AddedPersons);