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


//creation of store

const {createStore} = Redux;
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




