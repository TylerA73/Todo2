import axios from 'axios';

export const POST_ITEM = "POST_ITEM"; 

export function postItem(item){
	const URL = 'http://localhost:8081/api/v1/items';
	const body = {
		desc: item
	}

	let response = axios.post(URL, body);

	return {
		type: POST_ITEM,
		payload: response
	}
}