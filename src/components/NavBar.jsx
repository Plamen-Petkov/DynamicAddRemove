import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './navBar.css'

export default class NavBar extends Component{
    render(){
        return (
            <nav>
                <NavLink activeClassName='activeLink' to='/add' >Пациенти</NavLink>
                <NavLink activeClassName='activeLink' to='/reference'> Справка </NavLink>
            </nav>
        )
    }
}