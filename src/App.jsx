import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import UploadCv from "./pages/UploadCv";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<UploadCv />} path="/cv" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
