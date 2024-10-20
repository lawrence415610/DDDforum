import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { LoginPage } from "./pages/LoginPage";
import { SigninPage } from "./pages/SigninPage";
function App() {
  return (
    <BrowserRouter>
      <meta name="color-scheme" content="light only"></meta>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<SigninPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
