import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, editTodo, updateTodo } from '../actions/todo-actions-creator';

interface TodoProps {
    onDeleteTodo(x: object): void,
    onEditTodo(y: object): void,
    todo: any
}

class Todo extends Component<TodoProps> {
    render() { 
        const deleteTodo = (todo: Object) => {
            this.props.onDeleteTodo(todo);
        }
        const handleTodoEdit = (todo: Object) => {
            this.props.onEditTodo(todo)
        }
        return ( 
            <div>
                <p><b>Name: </b>{this.props.todo.name}</p>
                <p><b>Text: </b>{this.props.todo.text}</p>
                <div>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(this.props.todo.name)}>Delete</button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleTodoEdit(this.props.todo)}>Edit</button>
                </div>
            </div>
        );
    }
}

// responsible to get state from global store
const mapStateToProps = (state: any) => {
    return {
      todos: state.todos
    }
}

// responsible to fire an action
const mapActionsToProps = (dispatch: any) => {
    return bindActionCreators({
        onDeleteTodo: deleteTodo,
        onEditTodo: editTodo,
        onUpdateTodo: updateTodo
    }, dispatch)
  }
 
export default connect(mapStateToProps, mapActionsToProps)(Todo);