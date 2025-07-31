import React from "react";

// A helper function to generate a consistent background color based on user ID
// This ensures different users have different card colors.
const getCardBackgroundColor = (id) => {
  const colors = [
    "from-blue-400 to-indigo-500",
    "from-purple-400 to-pink-500",
    "from-green-400 to-teal-500",
    "from-yellow-400 to-orange-500",
    "from-red-400 to-rose-500",
    "from-cyan-400 to-blue-500",
  ];
  return colors[id % colors.length];
};

// Main App component to render a list of user cards
function UserCard({ list }) {
  return (
    <div className="min-h-screen bg-gradient-to-br rounded-xl from-gray-100 to-gray-300 p-2 font-sans">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-3 drop-shadow-lg">
        Our Awesome Users
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-auto mx-auto">
        {list.map((user) => (
          <RenderHtml key={user.id} user={user} />
        ))}
        {/* {console.log(list)} */}
      </div>
    </div>
  );
}

// UserCard component to display individual user information
const RenderHtml = ({ user }) => {
  const cardBgColor = getCardBackgroundColor(user.id);

  return (
    <div
      className={`relative bg-gradient-to-br ${cardBgColor} text-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl`}
    >
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>

      <div className="p-2 relative z-10">
        <div className="flex flex-col items-center mb-6">
          <img
            src={
              user.image ||
              `https://placehold.co/128x128/${Math.floor(
                Math.random() * 16777215
              ).toString(16)}/ffffff?text=${user.firstName[0]}${
                user.lastName[0]
              }`
            }
            alt={`${user.firstName} ${user.lastName}`}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            onError={(e) => {
              e.target.onerror = null; // prevents infinite loop
              e.target.src = `https://placehold.co/128x128/94A3B8/ffffff?text=${user.firstName[0]}${user.lastName[0]}`;
            }}
          />
          <h2 className="text-md font-extrabold mt-4 text-shadow-lg">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-lg font-medium opacity-90">{user.role}</p>
        </div>

        <div className="grid grid-cols-1 text-md gap-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12V4a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2v-4m-6 4h6m-6 0H6m6 0v-4m0 0h.01M12 12h.01M12 8h.01"
              />
            </svg>
            <span>
              Age: <span className="font-semibold">{user.age}</span>
            </span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.87a1 1 0 00.54 1.06l7.535 3.562a1 1 0 001.06.54l1.943-.486a1 1 0 00.948-1.06L21.5 5.28a2 2 0 00-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
            <span>{user.phone}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>
              {user.address.city}, {user.address.state}
            </span>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-16v12a2 2 0 01-2 2h-2M5 7h1m-1 4h1m-1 4h1m8-16v12a2 2 0 01-2 2h-2"
              />
            </svg>
            <span>
              Uni:{" "}
              <span className="font-semibold">
                {user.university.split(" ")[0]}
              </span>
            </span>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 opacity-80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2 1.343-2 3-2zM9 16a3 3 0 00-3 3v1h12v-1a3 3 0 00-3-3H9z"
              />
            </svg>
            <span>
              Gender: <span className="font-semibold">{user.gender}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
