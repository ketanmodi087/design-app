import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
