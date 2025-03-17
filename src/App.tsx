import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './Pages/LandingPage/LandingPage'
import StudentTutor from './Pages/StudentTutor/StudentTutor'
import SignUp from './Pages/SignUp/SignUp'
import OtpPage from './Pages/OtpPage/OtpPage'
import DashBoard from './Pages/DashBoard/DashBoard'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import { AuthProvider } from './Context/AuthContext/AuthContext'
import TeacherSign from './Pages/TeacherSign'

function App() {


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/studenttutor' element={<StudentTutor />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/otppage' element={<OtpPage />} />
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/teachersign' element={<TeacherSign />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
