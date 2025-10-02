import { useEffect, useState } from 'react'
import './App.css'
import useSessionContext from './context/use';
import FetchSession from './fetch/session';

function App() {
  const [count, setCount] = useState(0);
  const { user } = useSessionContext();
  // const { success, session_data } = user;
  // const { role, username, ip } = session_data;

  // console.log(success);


  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {count}
      <button onClick={() => setCount(prev => prev + 1)}>
        update
      </button>

      <p>Json data that we get:</p>
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {/* {user ? JSON.stringify(user, null, 2) : 'No user yet'} */}
        {
          // role + " " + username + " " + ip
        }

      </pre>
      <FetchSession />
    </>
  )
}

export default App;