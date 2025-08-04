import React, { useEffect, useState } from "react";
import "./index.css";
// const sampleTodos = [
//   { id: 1, text: "Buy groceries", completed: false },
//   { id: 2, text: "Walk the dog", completed: true },
//   { id: 3, text: "Read a book", completed: false },
// ];

function Todo() {
  const [dataFetched, setdataFetched] = useState([]);

  const fetchData = async () => {
    try {
      const fetchDataRaw = await fetch("/data/tododata.json");
      const fetchDataJson = await fetchDataRaw.json();

      if (!fetchDataRaw.ok) {
        throw new Error("Failed to fetch data");
      }

      setdataFetched(fetchDataJson);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(dataFetched);
  }, [dataFetched]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-md">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Todo List
        </h1>
        <ul className="space-y-4">
          {dataFetched.todoItems.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 bg-gray-50 ${
                todo.completed ? "opacity-60" : ""
              }`}
            >
              <span
                className={`text-lg ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                disabled={todo.completed}
              >
                {todo.completed ? "Done" : "Mark Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
