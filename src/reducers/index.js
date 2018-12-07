import { combineReducers } from 'redux';
import user from './reducer-user';
import datas from './reducer-datas';

export default combineReducers({
	user,
	datas
});