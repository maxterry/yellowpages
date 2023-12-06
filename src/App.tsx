import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";

import CompanyDetail from "./components/CompanyDetail";

import TagDetail from "./components/TagDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:slug" element={<CompanyDetail />} />
        <Route path="/tag/:slug" element={<TagDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
