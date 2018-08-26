import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postItem } from '../actions/index';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

class AddBar extends Component{
	constructor(props){
		super(props);

		this.state = { value: '' };

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onSubmit(event){
		event.preventDefault();

		this.props.postItem(this.state.value);
		this.setState({
			value: ''
		});
	}

	onChange(event){
		this.setState({
			value: event.target.value
		});
	}

	render(){
		return(
			<form className="input-group">
				<FormGroup>
					<FormControl
						type="text"
						placeholder="Add a new list item"
						onChange={ this.onChange }
					/>
				</FormGroup>
				<span className="input-group-btn">
					<Button 
						bsStyle="primary" 
						type="submit" 
						onClick={ this.onSubmit }>
						Add
					</Button>
				</span>
				
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ postItem }, dispatch);
} 

export default connect(null, mapDispatchToProps)(AddBar);