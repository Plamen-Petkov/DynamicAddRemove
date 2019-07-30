import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as personAction from '../redux/Actions/personAction'
 

 class List extends Component {
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
    listView(data, index){
        return (
          
              <tr key={index} className="list-group-item clearfix">
               <td> {data.personIdNomber} </td>
               <td> {data.firstName} </td>
               <td> {data.secondName} </td>
               <td> {data.lastName} </td> 
               <td> {data.dateTime} </td>
               <td> {data.mkb} </td>
               <td> 
                  <div className="col-md-2">
                  <button onClick={(e) => window.alert(`Upcoming: Edit function`)} className="btn btn-action">
                      Edit
                    </button>
                    <button onClick={(e) => window.alert(`Upcoming: Save to data base`)} className="btn btn-action">
                      Save
                    </button>
                    <button onClick={(e) => this.deletePerson(e, index)} className="btn btn-action">
                      Remove
                    </button>
                  </div> </td>
              </tr>
            
        )
      }
    
      deletePerson = (e, index) => {
        e.preventDefault();
        this.props.deletePerson(index);
        // console.log(this.props)
      }

    

    

    render=() => {
        return (
        <div>
            { <table className="list-group">
                <tr>
                  <th>ЕГН</th>
                  <th>Име</th>
                  <th>Презиме</th>
                  <th>Фамилия</th>
                  <th>Дата и час</th>
                  <th>Диагноза</th>
                </tr>
                <tbody>
                {this.props.person.map((person, i) => this.listView(person, i))}
                </tbody>         
            </table> }
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      person: state.person
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      //createPerson: person => dispatch(personAction.createPerson(person)),
      deletePerson: index =>dispatch(personAction.deletePerson(index))
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(List)