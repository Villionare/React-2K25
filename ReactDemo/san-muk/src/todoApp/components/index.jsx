import React, { useEffect, useState } from "react";
import "./index.css";
import Dialog from "./Dialog";

function Todo() {
  const [dataFetched, setdataFetched] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [mark, setMark] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

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

  // const setMark = () => {
  //   console.log(currentTask);

  //   currentTask.completed = !currentTask.completed;
  // };
  return (
    <div className="container mx-auto p-6 max-w-md">
      <div className="bg-white rounded-lg shadow-xl p-6 ">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Todo List
        </h1>
        <ul className="space-y-4">
          {dataFetched.todoItems &&
            dataFetched.todoItems.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center  justify-between p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 bg-gray-50 `}
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
                  onClick={() => {
                    setCurrentTask(todo);
                    setOpenDialog(true);
                  }}
                >
                  Details
                </button>
                <button
                  key={todo.id}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  onClick={() => {
                    setMark(todo.completed);
                    todo.completed = !todo.completed;
                    setMark(todo.completed);
                    console.log(mark);
                  }}
                >
                  {todo.completed ? "Done" : "Mark Done"}
                </button>
              </li>
            ))}
        </ul>
      </div>
      {openDialog && (
        <Dialog task={currentTask} onClose={() => setOpenDialog(false)} />
      )}
    </div>
  );
}

export default Todo;
