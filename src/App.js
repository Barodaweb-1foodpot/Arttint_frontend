import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.min.css'
import './App.css';
import './assets/css/style.css'
import './assets/css/responsive.css'
import { Home } from './Pages/Home';
import { Header } from "./components/Header";
import { ArtInfo } from "./components/ArtInfo";

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        {/* Place Header outside of Routes */}
        <Header />
        <Routes>
          <Route path="/arttint" element={<Home />} />
          <Route path="/artist-name/:url" element={<ArtInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
