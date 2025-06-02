import { useState } from "react";
import FormFirst from "../Form/FormFirst";
import { useEffect } from "react";

interface TelegramMainButton {
  setParams: (params: { text?: string }) => void;
  // Добавьте другие методы MainButton по необходимости
}

interface TelegramWebApp {
  expand: () => void;
  ready: () => void;
  setHeaderColor: (color: string) => void;
  requestFullscreen: () => void;
  MainButton: TelegramMainButton; // <-- Добавьте это свойство
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

export default function Chat() {
  const [topSelected, setTopSelected] = useState<number>(0);
  useEffect(() => {
    if (tg && tg.MainButton) {
      tg.MainButton.setParams({
        text: 'Send Data'
      });
    }
  }, []);
  return (
    <div className="text-white px-4 bg-black h-auto">
      <h1 className="text-2xl py-3 pl-4 font-light">Создать трек</h1>
      <textarea
        name="text"
        id="text"
        rows={5}
        placeholder="Например: уютный зимний вечер"
        className="text-sm w-full px-4 py-3 bg-[#232323] rounded-3xl border-[1px] border-gray-400"
      ></textarea>
       <div className="w-full text-sm flex flex-col gap-4 mt-1">
        {["Придумай мне сценарий", "Мне нужен ХИТ"].map((label, idx) => (
          <button
            key={label}
            className={`rounded-3xl py-2 border-[1px] bg-[#14141E] ${
              topSelected === idx ? "border-gray-400 font-semibold" : "border-gray-400"
            } col-span-${idx === 0 ? 2 : 1}`}
            style={idx === 0 ? { gridColumn: "span 2 / span 2" } : {}}
            onClick={() => setTopSelected(idx)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="w-full text-base gap-2 mt-2">
        <FormFirst/>
      </div>
    </div>
  );
}
