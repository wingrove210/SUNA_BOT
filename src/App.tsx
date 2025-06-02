import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoInsides from './pages/NoInsides'
import { useEffect } from 'react'
import FormFirst from './pages/Form/FormFirst'
import FormSecond from './pages/Form/FormSecond'
import Chat from './pages/Chat'
import './index.css'
import Home from './pages/Home/Home'
import type { TelegramWebApp } from './types/telegram' // Импортируйте тип

const tg = window.Telegram?.WebApp as TelegramWebApp | undefined;

function App() {
  useEffect(() => {
    if (tg) {
      tg.expand();
      // tg.requestFullscreen?.(); 
      tg.ready(); 
    }
  }, []);
  useEffect(() => {
    if (tg) {
      tg.ready();
    }
  }, []);

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