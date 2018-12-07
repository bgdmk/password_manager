import React, {Component} from 'react';
import { connect } from 'react-redux';
import { dataRef } from '../firebase';
import { setDatas } from '../actions';
import  DataItem  from './DataItem';

class DataList extends Component{

	componentDidMount(){
		dataRef.on('value',snap=>{
			let datas = [];
			snap.forEach(data =>{
				const { email, url, login, password } = data.val();
				const serverKey = data.key;
				datas.push({ email, url, login, password, serverKey});
			})
			this.props.setDatas(datas);
		})
	}

	render(){
		console.log('this.props.datas', this.props.datas);
		return(
				<div>
					{
						this.props.datas.map((data, index) =>{
							return(
								<DataItem key={index} data={data} />
								)
						})
					}
				</div>
			)
	}
}

function mapStateToProps(state){
	const { datas } = state;
	return{
		datas
	}
}

export default connect(mapStateToProps, { setDatas })(DataList);