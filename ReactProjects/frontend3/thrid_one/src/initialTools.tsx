import { useReducer, useState } from "react";

interface Todo {
    id: number,
    text: string,
    done: boolean
}

const initialTodos = [
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Master TypeScript", done: false },
    { id: 3, text: "Build a project", done: true }
];

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: Date.now(), text: action.payload, done: false }];
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.done);
        default:
            return state;
    }
};

const TodoManager = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [inputValue, setInputValue] = useState<string>("");

    const handleAdd = () => {
        if (inputValue.trim()) {
            dispatch({ type: "ADD", payload: inputValue });
            setInputValue("");
        }
    };

    return (
        <div className="todo-manager">
            <h2>Todo Manager</h2>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter todo..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                        {todo.text}
                        <button onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
                            {todo.done ? "Undo" : "Done"}
                        </button>
                        <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoManager;
