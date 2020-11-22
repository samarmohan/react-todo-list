import React, { Component } from "react";
// import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import Todos from "./components/todo/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/form/AddTodo";
import About from "./components/pages/About";

import "./App.css";

class App extends Component {
	state = {
		todos: [],
	};

	componentDidMount() {
		axios
			.get(
				"http://jsonplaceholder.typicode.com/todos/?_limit=10&completed=false"
			)
			.then((res) => this.setState({ todos: res.data }));
	}

	handleCompletedChange = (id) => {
		this.setState({
			todos: this.state.todos.map((selectedTodo) => {
				if (selectedTodo.id === id) {
					selectedTodo.completed = !selectedTodo.completed;
				}
				return selectedTodo;
			}),
		});
	};

	handleDelete = (id) => {
		axios
			.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) =>
				this.setState({
					todos: this.state.todos.filter(
						(deletedTodo) => deletedTodo.id !== id
					),
				})
			);
	};

	handleAdd = (title) => {
		axios
			.post("http://jsonplaceholder.typicode.com/todos", {
				title,
				completed: false,
			})
			.then((res) =>
				this.setState({ todos: [...this.state.todos, res.data] })
			);
	};

	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<Route
							exact
							path="/"
							render={() => (
								<>
									<AddTodo handleAdd={this.handleAdd} />
									<Todos
										todos={this.state.todos}
										handleCompletedChange={
											this.handleCompletedChange
										}
										handleDelete={this.handleDelete}
									/>
								</>
							)}
						/>
						<Route path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
