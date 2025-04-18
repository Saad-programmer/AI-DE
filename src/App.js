import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About"
import List from './pages/List';




function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/List' element={<List />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
