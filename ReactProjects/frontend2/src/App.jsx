import { useEffect } from 'react'
import './App.css'
import useSessionContext from './context/use';
import FetchSession from './fetch/session';
import useFetchSession from './fetch/session';
import AnonForm from './component/anonForm';

function App() {
  useFetchSession();
  const { user } = useSessionContext();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <AnonForm />
    </>
  )
}

export default App;