import {useState, useReducer} from "react";
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

function reducer(state, action) {
    if(action.type === "add") {
        return [
            ...state,
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false
            }
        ];
    } else if(action.type === "delete") {
        return state.filter((t) => t.id !== action.payload.id);
    } else if(action.type === "clear-completed") {
        return state.filter((todo) => !todo.isCompleted);
    } else if(action.type === "update") {
        return state.map((todo) => {
            if(todo.id === action.payload.updatedTodo.id) {
                return action.payload.updatedTodo;
            }
            return todo;
        });
    }
}

export default function App() {

    const [todos, dispatch] = useReducer(reducer, [
        {
            id: Math.random(),
            text: "Learn JS",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn CSS",
            isCompleted: false
        },
        {
            id: Math.random(),
            text: "Learn React",
            isCompleted: false
        }
    ]);


    return (
        <div className="App">
            <header>
                <h1 className="todoAppTitle">todos</h1>
            </header>

            <TodoForm onAdd={(text) => {
                dispatch({
                    type: 'add',
                    payload: {
                        text: text
                    }
                });
            }}/>
            <TodoList
                todos={todos}
                onDelete={(todo) => {
                    dispatch({
                        type: "delete",
                        payload: {
                            id: todo.id
                        }
                    });
                }}
                onChange={(newTodo) => {
                    dispatch({
                        type: "update",
                        payload: {
                            updatedTodo: newTodo
                        }
                    });
                }}
            />
            <TodoFooter todos={todos} onClearCompleted={() => {
                dispatch({
                    type: "clear-completed"
                });
            }}/>
        </div>
    );
}

