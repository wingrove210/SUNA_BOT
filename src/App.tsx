import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoInsides from './pages/NoInsides'
import { useEffect } from 'react'
import FormFirst from './pages/Form/FormFirst'
import FormSecond from './pages/Form/FormSecond'
import Chat from './pages/Chat'
import './index.css'
import Home from './pages/Home/Home'
import type { TelegramWebApp } from './types/telegram'
import { useState } from 'react'
const tg = window.Telegram?.WebApp as TelegramWebApp | undefined;

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function App() {
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    setMobile(isMobile());
    if (tg) {
      tg.expand();
      tg.requestFullscreen?.(); 
      tg.ready(); 
    }
  }, []);

  if (!mobile) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        color: "#fff",
        fontSize: 22,
        textAlign: "center"
      }}>
        Откройте это приложение на мобильном устройстве
      </div>
    );
  }

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