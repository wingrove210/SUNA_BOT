import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoInsides from './pages/NoInsides'
import Home from './pages/Home/Home'
import Chat from './pages/Chat'
import FormFirst from './pages/Form/FormFirst'
import FormSecond from './pages/Form/FormSecond'
import './index.css'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoInsides/>} />
        <Route path="/noinsides" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;