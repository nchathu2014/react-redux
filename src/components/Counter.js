import React from 'react';

export default class Counter extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div className="container">
				<h3>Counter Example (Redux)</h3>

				<div><h2>{this.props.value}</h2></div>
				<button className="btn btn-lg btn-primary" onClick={this.props.onIncrement}>+</button>&nbsp;
				<button className="btn btn-lg btn-danger" onClick={this.props.onDecrement}>-</button>
			</div>
		);
	}
}




