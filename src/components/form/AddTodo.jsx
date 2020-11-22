import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
	state = {
		title: "",
	};

	handleTitleChange = (e) =>
		this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.handleAdd(this.state.title);
		this.setState({ title: "" });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} style={{ display: "flex" }}>
					<input
						type="text"
						name="title"
						placeholder="Add Todo..."
						style={{ flex: "10", padding: "5px" }}
						value={this.state.title}
						onChange={this.handleTitleChange}
					/>
					<input
						type="submit"
						value="Submit"
						className="btn"
						style={{ flex: "1" }}
					/>
				</form>
			</div>
		);
	}
}

AddTodo.propTypes = {
	addTodo: PropTypes.func,
};

export default AddTodo;
