import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import * as Api from './Api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Id", field: "id"
      }, {
        headerName: "name", field: "name"
      }, {
        headerName: "salary", field: "salary"
      }],
      // rowData: [{
      //   id: "1", name: "sachin", salary: 35000
      // }, {
      //   id: "2", name: "sourav", salary: 32000
      // }, {
      //   id: "3", name: "rahul", salary: 72000
      // }]
      // rowData: [{
      //   make: "Toyota", model: "Celica", price: 35000
      // }, {
      //   make: "Ford", model: "Mondeo", price: 32000
      // }, {
      //   make: "Porsche", model: "Boxter", price: 72000
      // }]
    }
    this.searchSuccess=this.searchSuccess.bind(this);
    this.failureSearch=this.failureSearch.bind(this);
  }

searchSuccess(result){

  console.log("api call success : " + result[0].id);
  if(result!=null){
    this.setState({
      rowData :[JSON.stringify(result)],
      // rowData :[result],
      gridData:  [result]
    });
    console.log("after stringify" + this.state.rowData);
  }else{
    this.setState({
      agGridNoRowsOverlay : "No rows found",
      gridData: []
    });
  }
}


failureSearch(){
  console.log("failure :" );
  this.setState({
    gridData: []
  });
}

  componentDidMount() {
         const api= new Api.DATA();
         api.getGridData("abc",this.searchSuccess,this.failureSearch)
  }

  render() {
    return (
      <div 
        className="ag-theme-balham"
        style={{ 
        height: '500px', 
        width: '600px' }} 
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}
export default App;