
//ES5
/*function (state,action){
	
	if(typeof state === 'undefined'){
		return 0;
	}
	
	if(action === "INCREMENT"){
		return state+1;
	}
	else if(action === "DECREMENT"){
		return state-1;
	}
	else{
		return state;
	}


}*/


//ES6

const counter = (state=0,action) => {
	switch(action.type){
		case "INCREMENT" : return state+1;break;
		case "DECREMENT" : return state-1;break;
		default : return state;

	}
}


const {createStore} = Redux;
//var createStore = Redux.createStore //ES5
// import {createStore} from 'react'; //commonJS webpack
const store = createStore(counter);
console.log("Counter : "+store.getState());

const render=()=>{
	document.body.innerText = store.getState();
}

/*store.dispatch({type:"INCREMENT"});
console.log("Counter : "+store.getState());*/

store.subscribe(render);
render();

document.addEventListener('click',()=>{
	store.dispatch({type:'INCREMENET'})
})
