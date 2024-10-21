import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { SigninPage } from "./pages/SigninPage";
function App() {
  return (
    <BrowserRouter>
      <meta name="color-scheme" content="light only"></meta>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<SigninPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
