var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes.jsx');
//var ListManager = require('./components/ListManager.jsx');
/*
ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('root'));
ReactDOM.render(<ListManager title="To Do" />, document.getElementById('easter'));
ReactDOM.render(<ListManager title="James" headingColor="#B31217" />, document.getElementById('bday'));
*/
ReactDOM.render(<Routes />, document.getElementById('main'));