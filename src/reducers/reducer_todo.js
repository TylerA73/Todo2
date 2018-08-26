import { POST_ITEM } from '../actions/index';

export default function(state = [], action){
	switch(action.type){
		case POST_ITEM:
			return [action.payload.data];
	}
	return state;
}