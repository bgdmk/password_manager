import React, {Component} from 'react';
import { connect } from 'react-redux';
import { dataRef } from '../firebase';

class AddData extends Component{

	constructor(props){
		super(props);
		this.state = {
			url: '',
			login: '',
			password: '',
			hide: true
		}
	}

	addData(){
		const { email } = this.props.user;
		if(!this.state.url || !this.state.login )
			alert('введите url и логин'); else
		dataRef.push({email, url: this.state.url, login: this.state.login, password: this.state.password});
	}

	shInp(){
		this.setState(prevState => ({
		  hide: !prevState.hide
		}))
	}
		

	render(){
		return(
			<div className='my-form-grouop inline-form mb-20'>
					<input 
						className='my-form-control my-form-control--mob mb-0'
						type='text'
						placeholder='url'
						onChange={event => this.setState({url: event.target.value})}
					/>
					<input 
						className='my-form-control my-form-control--mob mb-0'
						type='text'
						placeholder='login'
						onChange={event => this.setState({login: event.target.value})}
					/>
					<input 
						className='my-form-control my-form-control--mob mb-0 pass'
						type={this.state.hide?'password':'text'}
						placeholder='password'
						onChange={event => this.setState({password: event.target.value})}
					/>
					<button 
						className='my-btn my-btn-add my-form-control--mob'
						type='button'
						onClick={()=>this.shInp()}
					>
					&#9786;
					</button>
					<button 
						className='my-btn my-btn-add my-form-control--mob'
						type='button'
						onClick={()=>this.addData()}
					>
					&#10010;
					</button>
			</div>
			)
	}
}

function mapStateToProps(state){
	const { user } = state;
	return{
		user
	}
}

export default connect(mapStateToProps, null)(AddData);
