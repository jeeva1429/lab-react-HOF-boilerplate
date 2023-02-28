import React, { Component } from 'react'
import '../components/HigherOrderFunctions.css'
class HigherOrderFunctions extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
                <li className="list-elements-2">
                    <div><span>Id: {item.id}</span></div>
                    <div><span>Name : {item.name}</span></div>
                    <div><span>User Type: {item.user_type}</span></div>
               </li>
        ));
        return mapRows;
    };

    displayUserType = () => {
        const data = this.state.userData
        const mapRows = data
          .filter((item) => item.user_type === 'Designer')
          .map(items => (
            <div className="list-elements-2">
            <li>
              <div><span>Id: {items.id}</span></div>
              <div><span>Name : {items.name}</span></div>
              <div><span>User Type: {items.user_type}</span></div>
            </li>
            </div>
          ))
        return mapRows
      }
      StartsWithLetterJ = () => {
        const data = this.state.userData 
        const mapRows = data
        .filter((items) => items.name[0] === 'J')
        .map(items => (
            <div className="list-elements-2">
            <li>
              <div><span>Id: {items.id}</span></div>
              <div><span>Name : {items.name}</span></div>
              <div><span>User Type: {items.user_type}</span></div>
            </li>
            </div>
          ))
        return mapRows
      }

      FilterDataBasedOnAge = () => {
        const data = this.state.userData
        const mapRows = data
        .filter((item) => item.age > 28 && item.age <= 50)
        .map(items => (
            <div className="list-elements-2">
            <li>
              <div><span>Id: {items.id}</span></div>
              <div><span>Name : {items.name}</span></div>
              <div><span>User Type: {items.user_type}</span></div>
            </li>
            </div>
          ))
        return mapRows
      }

      totalAgeDesigners = () => {
        const data = this.state.userData;
        const totalAge = data
          .filter((item) => item.user_type === 'Designer')
          .reduce((accumulator, item) => {
            return accumulator + item.age;
          }, 0);
        return <div className='list-elements-2'>Total age of all designers: {totalAge}</div>;
      };
      
  render(){ 
    return (
      <div>
        <h1>Display users</h1>
        {this.renderItems()}
        <h1>Display users based on userType</h1>
       {this.displayUserType()}
        <h1>Display users names starts with Letter J</h1>
        {this.StartsWithLetterJ()}
        <h1>Display users having age greater than 28 and less than or equal to 50</h1>
        {this.FilterDataBasedOnAge()}
        <h1>Total Age of the designers</h1>
        {this.totalAgeDesigners()}
      </div>
      
    )
  }
}
export default HigherOrderFunctions
