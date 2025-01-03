import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./charts/ChartjsConfig";
import DefaultLayout from "./layout/DefaultLayout";
import Login from "./pages/loginPage/Login";
import Overview from "./pages/overview/Overview";
import FillaForm from "./pages/FillForm/FillaForm";
import Payment from "./pages/payment/Payment";
import Status from "./pages/status/Status";
import Setting from "./pages/settings/Setting";
import Logout from "./auth/logout/Logout";
import SingUp from "./pages/signup/SingUp";
import ProtectedRoute from "./auth/logout/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route
          path="/"
          element={
            <ProtectedRoute >
              <DefaultLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/overview" element={<Overview />} />
          <Route path="/fillform" element={<FillaForm />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/status" element={<Status />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
