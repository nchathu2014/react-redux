import React from 'react';
import ReactDOM from 'react-dom';

export default class CounterComponent extends React.Components{

	render(){
		return(
			<div>
				<div>Count :<span id="counter"></span></div>
			    <button  id="btnI">Increment +</button>
			    <button  id="btnD">Decrement -</button>
			</div>
		);
	}
}

ReactDOM.render(<CounterComponent/>,document.getElementById('container'));



