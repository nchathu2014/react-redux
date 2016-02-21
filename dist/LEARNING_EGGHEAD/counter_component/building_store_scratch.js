console.log("Counter File detected...");

//reducer function
//ES5
/*function counter(state,action){

	if(typeof state==='undefined'){
		return 0
	}
	if(action.type==="INCREMENT"){
		return state+1;
	}else if(action.type==="DECREMENT"){
		return state-1;
	}else{
		return state;
	}

}*/

//ES6
const counter = (state=0,action) => {

	switch(action.type){
		case "INCREMENT":
			return state+1;
		case "DECREMENT":
			return state-1;
		default : 
			return state;
	}
}


//creation of store form the scratch

const createStore = (reducer)=>{
	let state;
	let listeners=[];
	//implementing the three methods in store/state , getState(),dispatch(),subscribe()
	const getState=()=>state;  
	const dispatch=(action)=>{
		state=reducer(state,action)
		listeners.forEach(listener=>listener())
	};
	const subscribe=(listener)=>{
		listeners.push(listener);
		return()=>{
			listeners=listeners.filter(l => l !== listener)
		}
	};
	dispatch({});

	return {getState,dispatch,subscribe}
}


//const {createStore} = Redux; this part is implemented above from the scratch
const store = createStore(counter);

console.log(`Current state : ${store.getState()}`);

store.dispatch({type:'INCREMENT'});
console.log(`Current state after increment  : ${store.getState()}`);

const render=()=>{
	document.getElementById('counter').innerHTML = store.getState();
}

store.subscribe(render);
render();

document.getElementById('btnI').addEventListener('click',()=>{
	store.dispatch({type:'INCREMENT'});
});

document.getElementById('btnD').addEventListener('click',()=>{
	store.dispatch({type:'DECREMENT'});
});







