import "./App.css";
import { Routes, Route } from "react-router-dom";

import AppProvider from "./context/AuthProvider";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
