import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ValidatePage from "./pages/ValidatePage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ValidatePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
