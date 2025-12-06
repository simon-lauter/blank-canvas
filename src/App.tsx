import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main>
          <Routes>
            {/* Add your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* 404 - Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
