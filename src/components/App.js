import React,{Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import AddData from './AddData';
import DataList from './DataList';

class App extends Component {
	render(){
		return(
			<div>
				<Header />
				<div className='wrapper'>
					<h2>Добавить данные</h2>
					<AddData />
					<hr />
					<h3>Данные</h3>
					<DataList />
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	/*console.log('state', state);*/
	return {}
}

export default connect(mapStateToProps, null)(App);