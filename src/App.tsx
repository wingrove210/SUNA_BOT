import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoInsides from './pages/NoInsides'
import { useEffect } from 'react'
import FormFirst from './pages/Form/FormFirst'
import FormSecond from './pages/Form/FormSecond'
import './index.css'
import Home from './pages/Home/Home'
interface TelegramWebApp {
  expand: () => void;
  ready: () => void;
  setHeaderColor: (color: string) => void;
  requestFullscreen: () => void; // Добавьте эту строку
  // Добавьте другие методы по необходимости
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
      [key: string]: unknown;
    };
  }
}

const tg = window.Telegram?.WebApp;

function App() {
  useEffect(() => {
    if (tg) {
      tg.expand();
      // tg.requestFullscreen();
      tg.ready(); 
    }
  }, []);
  useEffect(() => {
    if (tg) {
      tg.ready();
      tg.setHeaderColor("#474C2B");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noinsides" element={<NoInsides />} />
        {/* <Route path="/player" element={<Home />} /> */}
        <Route path="/form/first" element={<FormFirst />} />
        <Route path="/form/second" element={<FormSecond />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;