import React, { useReducer, useState } from "react";

// Reducer for managing the todo list
function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      if (!action.payload.trim()) return state;
      return [...state, { id: Date.now(), text: action.payload, counter: 0 }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "INCREMENT":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, counter: todo.counter + 1 }
          : todo
      );
    case "DECREMENT":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, counter: todo.counter - 1 }
          : todo
      );
    default:
      return state;
  }
}

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  return (
    <div className="container mx-auto p-4 md:p-8 flex flex-col items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full max-w-lg mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-6 pb-2 border-b-4 border-blue-500">
          TODO List
        </h1>

        <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md"
          >
            Add
          </button>
        </form>

        <ul className="space-y-4">
          {todos.length === 0 && (
            <li className="text-gray-400 text-center">No tasks yet.</li>
          )}
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <span className="text-lg text-gray-800">{todo.text}</span>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-green-200 px-2 py-1 rounded hover:bg-green-300"
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: todo.id })
                    }
                  >
                    +
                  </button>
                  <span className="font-mono w-6 text-center">
                    {todo.counter}
                  </span>
                  <button
                    className="bg-red-200 px-2 py-1 rounded hover:bg-red-300"
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: todo.id })
                    }
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 font-bold text-xl"
                onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
                title="Remove"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-gray-600 text-center">
          <span className="font-semibold">Total Tasks:</span> {todos.length}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
