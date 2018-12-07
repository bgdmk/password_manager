import { SIGNED_IN, SET_DATAS } from '../constants';

export function logUser(email){
	const action = {
		type: SIGNED_IN,
		email
	}
	return action;
}

export function setDatas(datas){
	const action = {
		type: SET_DATAS,
		datas
	}
	return action;
}