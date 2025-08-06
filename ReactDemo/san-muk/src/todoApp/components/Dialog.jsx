import { useState } from "react";

function Dialog({ task, onClose }) {
  const [status, setStatus] = useState(task.completed);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
      style={{ zIndex: 3 }}
    >
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
          onClick={() => onClose(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Todo Details</h2>
        <div className="mb-2">
          <span className="font-semibold">Task Serial No:</span> {task.id}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Todo Name:</span> {task.text}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Status:</span>{" "}
          {status ? "Done" : "Pending"}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Date Created:</span> {task.createdAt}
        </div>
        <div className="flex gap-4 mt-6">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={() => {
              setStatus(!status);
            }}
          >
            Mark as Done
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
