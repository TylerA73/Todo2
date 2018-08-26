import axios from 'axios';

export const POST_ITEM = "POST_ITEM";
export const GET_ITEMS = "GET_ITEMS";
export const DELETE_ITEM = "DELETE_ITEM"; 

export function postItem(item){
	const URL = 'http://localhost:8081/api/v1/items';
	const body = {
		desc: item
	}

	const response = axios.post(URL, body);

	console.log(response);

	return {
		type: POST_ITEM,
		payload: response
	}
}