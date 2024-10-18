import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-500 overflow-hidden">
      <Routes>
      <Route path="/" element={<OverviewPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      </Routes>
    </div>
  )
}

// npm i -D tailwindcss postcss autoprefixer
// npm i react-router-dom lucide-react recharts
// npm i framer-motion
