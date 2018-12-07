import React, {Component} from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
/*import { dataRef } from '../firebase';*/

class Signup extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			error:{
				message:''
			}
		}
	}

	signUp(){
		console.log('this.state',this.state);
		const { email, password} = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
		.catch(error => {
			this.setState({error})
		});
	}

	render(){
			return(
				<div className='signUp-window'>
					<div className='my-form'>
						<h2>Регистрация</h2>
						<div className='my-form-group'>
							<input 
								className='my-form-control'
								type='email'
								placeholder='email'
								onChange={event => this.setState({email: event.target.value})}
							/>
							<input 
								className='my-form-control'
								type='password'
								placeholder='password'
								onChange={event => this.setState({password: event.target.value})}
							/>
							<button 
								className='my-btn my-btn-reverse'
								type='button'
								onClick={()=>this.signUp()}
							>
								Зарегистрироваться
							</button>
							<div className='errMessage'>{this.state.error.message}</div>
							<div className='linkMessage'><Link to={'/signin'}> Войти </Link></div>
						</div>
					</div>
				</div>
			)
		}
}

export default Signup;