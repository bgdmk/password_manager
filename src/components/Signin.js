import React, {Component} from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class Signin extends Component {

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

	signIn(){
		console.log('this.state',this.state);
		const { email, password} = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
		.catch(error => {
			this.setState({error})
		})
	}

	render(){
			return(
				<div className='signUp-window'>
					<div className='my-form'>
						<h2>Вход</h2>
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
								onClick={()=>this.signIn()}
							>
								Войти
							</button>
							<div className='errMessage'>{this.state.error.message}</div>
							<div className='linkMessage'><Link to={'/signup'}> Зарегистрироваться </Link></div>
						</div>
					</div>
				</div>
			)
		}
}

export default Signin;
