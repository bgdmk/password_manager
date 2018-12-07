import React, { Component } from 'react';
import { dataRef } from '../firebase';

class DataItem extends Component{

	constructor(props){
		super(props);
		this.state = {
			edit: false,
			hide: false
		}
	}

	del(){
		const serverKey = this.props.data.serverKey;
		dataRef.child(serverKey).remove();
	}


	edit(){
		this.setState({
			edit: true,
			hide: false
		})
	}

	show(){
		this.setState(prevState => ({
		  hide: !prevState.hide
		}))
	}


	save(){
		this.setState({
			edit: false
		})
				let  newUrl, newLogin, newPassword;
				newUrl = this.refs.newUrl.value;
				newLogin = this.refs.newLogin.value;
				newPassword = this.refs.newPassword.value;

				 let postData = {
				 		email: this.props.data.email,
				 		url: newUrl,
				    login: newLogin,
				    password: newPassword,
				    serverKey: this.props.data.serverKey
  				};

		const serverKey = this.props.data.serverKey;
		dataRef.child(serverKey).update(postData);
	}

	rendNorm(){
		const { url, login, password } = this.props.data;
		return(
				<div className='datalist'>
					<div className='datalist__item' >{url}</div>
					<div className='datalist__item' >{login}</div>
					<div className='datalist__item' onClick={()=>this.show()}>{this.state.hide?password :'********'}</div>
					<button className='my-btn my-btn-add' onClick={()=>this.edit()}> &#9998; </button>
					<button className='my-btn my-btn-add' onClick={()=>this.del()}> &#10006; </button>
				</div>
			)
	}

		rendEdit(){
			const { url, login, password } = this.props.data;
		return(
				<div className='datalist'>
				<input 
						className='my-form-control my-form-control--mob mb-0'
						ref='newUrl'
						type='text'
						defaultValue={url}
					/>
				<input 
						className='my-form-control my-form-control--mob mb-0'
						ref='newLogin'
						type='text'
						defaultValue={login}
					/>
				<input 
						className='my-form-control my-form-control--mob mb-0'
						ref='newPassword'
						type='text'
						defaultValue={password}
					/>
					<button className='my-btn my-btn-add' onClick={()=>this.save()}> &#10004; </button>
				</div>
			)
	}


	render(){
			if (this.state.edit){
				return this.rendEdit();
			}
			else{
				return this.rendNorm();
			}
	}
}

export default DataItem;