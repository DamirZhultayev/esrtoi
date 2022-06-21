import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";
import { Products } from './components/Products';
import { CatalogPage } from './pages/CatalogPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/catalog" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
