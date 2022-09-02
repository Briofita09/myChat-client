import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
