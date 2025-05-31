import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoInsides from './pages/NoInsides'
import Home from './pages/Home/Home'
import Chat from './pages/Chat'
import FormFirst from './pages/Form/FormFirst'
import FormSecond from './pages/Form/FormSecond'
import './index.css'
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noinsides" element={<NoInsides />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/form/first" element={<FormFirst />} />
        <Route path="/form/second" element={<FormSecond />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;