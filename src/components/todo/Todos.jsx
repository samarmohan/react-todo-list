import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
	render() {
		return this.props.todos.map((forEachTodo) => (
			<TodoItem
				key={forEachTodo.id}
				todo={forEachTodo}
				handleCompletedChange={this.props.handleCompletedChange}
				handleDelete={this.props.handleDelete}
			/>
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	handleCompletedChange: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default Todos;
