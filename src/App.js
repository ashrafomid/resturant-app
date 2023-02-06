import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Create from "./create/Create";
import Recipe from "./recipes/Recipe";
import Search from "./search/Search";
import Navbar from "./Components/Navbar";
import ThemeSelector from "./Components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
