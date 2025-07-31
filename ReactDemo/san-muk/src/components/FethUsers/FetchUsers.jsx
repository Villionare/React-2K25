import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";

function FetchUsers() {
  const [usersData, setusersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const GettingData = async () => {
      try {
        const Usersf = await fetch("https://dummyjson.com/users");

        if (!Usersf.ok) {
          throw new Error("Some error has Occured!");
        }

        const users = await Usersf.json();
        setusersData(users);
      } catch (e) {
        console.error(e);
        setError(e);
      } finally {
        setLoading(false);
        console.log(usersData.users);
      }
    };

    GettingData();
  }, []);

  if (loading) {
    return <div>loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (usersData === 0) {
    return <div>can't retrive data.</div>;
  }

  return <>{<UserCard list={usersData.users} />}</>;
}

export default FetchUsers;
