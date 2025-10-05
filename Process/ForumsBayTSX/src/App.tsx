// import { useEffect } from 'react';
import './App.css'
// import Button from './components/button'
// import Form from './components/form'
// import { useUserContext } from './context/useUserContext'
import AnonLogin from './components/anonymousLogin';
import { useUserContext } from './context/useUserContext';

function App() {
  const { user } = useUserContext();
  console.log("on reload: ", user);

  // const { user, login } = useUserContext();

  // useEffect(() => {
  //   const userPass = {
  //     message: "this is the message",
  //     session_data: "this is the session data"
  //   };
  //   const inte = setTimeout(() => {
  //     login(userPass);
  //   }, 3000);
  //   return () => clearTimeout(inte);
  // }, []);

  return (
    <>
      {/* <Button name="well wow" border='2px solid black' bgcolor='red' text='white' />
      <Button name="well wow" border='2px solid pink' bgcolor='yellow' text='white' />
      <Button name="well wow" border='2px solid orange' bgcolor='green' text='white' onClick={() => alert("this is done by manually doing soo....")} />
      <Form />
      <p>
        {user?.message}
        {user?.session_data}
      </p> */}
      <AnonLogin />
    </>
  )
}

export default App
