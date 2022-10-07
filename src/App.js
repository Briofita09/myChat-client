import "./App.css";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import original from "react95/dist/themes/original";

import AppProvider from "./context/AuthProvider";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

const GlobalStyle = createGlobalStyle`
${styleReset}
@font-face{
  font-family: 'ms_sans_serif';
  src: url('${ms_sans_serif}') format('wolf2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={original}>
        <AppProvider>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </AppProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
