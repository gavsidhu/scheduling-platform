import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import NewBookingTypePage from "./pages/NewBookingTypePage";
import Home from "./pages/Home";
import { UserProvider } from "./hooks/useUser";
import ProtectedRoute from "./components/ProtectedRoutes";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Settings from "./pages/Settings";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <div className='App'>
      <ToastContainer
        position='top-right'
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/:username/bookings' element={<Bookings />} />
            <Route path='/new-booking-type' element={<ProtectedRoute />}>
              <Route
                path='/new-booking-type'
                element={<NewBookingTypePage />}
              />
            </Route>
            <Route path='/settings' element={<ProtectedRoute />}>
              <Route path='/settings' element={<Settings />} />
            </Route>
            <Route path='/' element={<ProtectedRoute />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;