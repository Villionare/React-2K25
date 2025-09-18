import { Route, Routes } from "react-router-dom"
import { WhatsAppSignup } from "./pages/SIgnUp"
import { WhatsAppLogin } from "./pages/Login"
import ProfilePage from "./pages/profile"
import { AuthProvider } from "./context"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<WhatsAppSignup />} />
        <Route path="/login" element={<WhatsAppLogin />} />
        <Route path="/profile" element={
          <>
            <AuthProvider >
              <ProfilePage />
            </AuthProvider>
          </>
        } />
      </Routes>

    </>
  )
}

export default App
