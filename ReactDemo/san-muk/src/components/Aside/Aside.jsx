import React from "react";

function Aside() {
  return (
    <aside className="sm:hidden fixed right-0 bg-gray-100 p-4 w-60 shadow-md h-full">
      <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-2 mb-4">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Settings
          </a>
        </li>
      </ul>
      <p className="text-sm text-gray-600">
        Welcome to the sidebar! Here you can find quick navigation links and
        useful information.
      </p>
    </aside>
  );
}

export default Aside;
