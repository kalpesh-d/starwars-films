import { Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesPage />} />
    </Routes>
  );
}

export default App;
