import React, { Component } from 'react';

export default class Item extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<td>
				{ this.props.item }
				{ console.log("Item rendered: ", this.props.id) }
			</td>
		);
	}
}