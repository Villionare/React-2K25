import { Route, Routes } from "react-router-dom"
import { WhatsAppSignup } from "./pages/SIgnUp"
import { WhatsAppLogin } from "./pages/Login"
import ProfilePage from "./pages/profile"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WhatsAppSignup />} />
        <Route path="/login" element={<WhatsAppLogin />} />
        <Route path="/profile" element={
          <AuthContext >
            <ProfilePage />
          </AuthContext>
        } />
      </Routes>

    </>
  )
}

export default App
