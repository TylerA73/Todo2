import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/item';

class TodoList extends Component {
	renderItems(itemData){
		return itemData.map(
			(item) => {
				return(
					<tr>
						<Item
							id={ item.id }
							item={item.description}
							completed={ item.completed } 
						/>
					</tr>
				);
			}
		);
	}

	render(){
		return(
			<div>
				<table>
					<thead>
						<tr>
							<th>
								Todo Item
							</th>
						</tr>
					</thead>
					<tbody>
						{ this.props.items.map(this.renderItems) }
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps({ items }){
	return { items };
}

export default connect(mapStateToProps)(TodoList);