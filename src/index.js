import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import { logUser } from './actions';

import { Router, /*Route,*/ browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

import App from './components/App';
import Signin from './components/Signin';
import Signup from './components/Signup';


const store = createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user => {
	if (user){
		// console.log('Пользователь выполнил вход', user.email);
		const {email} = user;
		store.dispatch(logUser(email));
		browserHistory.push('/app');
		
	} else{
		// console.log('Пользователь выполнил выход');
		browserHistory.replace('/signin');
	}
});

ReactDOM.render(
	<Provider store={store}>
		<Router path='/' history={browserHistory}>
			<Router path='/app' component={App} />
			<Router path='/signin' component={Signin} />
			<Router path='/signup' component={Signup} />
		</Router>
	</Provider>,document.getElementById('root')
	);

