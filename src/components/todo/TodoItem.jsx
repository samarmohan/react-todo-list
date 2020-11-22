import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
	getTodoItemStyles = () => {
		return {
			background: "#f4f4f4",
			padding: "10px",
			borderBottom: "1px #ccc dotted",
			textDecoration: this.props.todo.completed ? "line-through" : "none",
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getTodoItemStyles()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.handleCompletedChange.bind(
							this,
							id
						)}
					/>{" "}
					{title}
					<button
						onClick={this.props.handleDelete.bind(this, id)}
						style={btnStyle}
					>
						x
					</button>
				</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	handleCompletedChange: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

const btnStyle = {
	background: "#ff0000",
	color: "#fff",
	border: "none",
	padding: "5px 10px",
	borderRadius: "50%",
	cursor: "pointer",
	float: "right",
};

export default TodoItem;
