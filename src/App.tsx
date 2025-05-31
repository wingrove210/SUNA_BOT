import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoInsides from './pages/NoInsides'
import Chat from './pages/Chat'
import FormFirst from './pages/Form/FormFirst'
import FormSecond from './pages/Form/FormSecond'
import './index.css'
import Home from './pages/Home/Home'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>} />
        <Route path="/noinsides" element={<NoInsides />} />
        <Route path="/player" element={<Home />} />
        <Route path="/form/first" element={<FormFirst />} />
        <Route path="/form/second" element={<FormSecond />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;