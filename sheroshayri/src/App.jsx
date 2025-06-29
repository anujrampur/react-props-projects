import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Submit from "./pages/Submit";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen bg-gradient-to-br from-purple-100 to-pink-100 font-serif flex flex-col">
        <nav className="bg-white shadow-sm px-4 py-2 w-full">
          <div className="max-w-screen-lg mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-700">
              Sher O Shayri
            </h1>
            <ul className="flex gap-8 list-none items-center text-sm mr-4">
              <li>
                <Link to="/" className="text-purple-600 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className="text-purple-600 hover:underline"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-purple-600 hover:underline">
                  Submit
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="flex-grow w-full px-4 py-8 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="text-center text-sm text-gray-600 p-4 bg-white border-t border-gray-200">
          © 2025 Sher O Shayri. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
