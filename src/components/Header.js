import React,{Component} from 'react';
import { firebaseApp } from '../firebase';


class Header extends Component {


	signOut(){
		firebaseApp.auth().signOut();
	}

 
	render(){
		const u = firebaseApp.auth().currentUser;
			console.log('user',u);
			return(
				<header className='my-head'>
					<div className='wrapper headBlock'>
						<div className='headBlock__logo'>
							PassM
						</div>
						<div className='headBlock__name'>
							user
						</div>
						<div className='headBlock__btn'>
							<button 
							className='my-btn'
							onClick={() => this.signOut()}
							>Выход</button>
						</div>
					</div>
				</header>
			)
		}
}


export default Header;