import {  useEffect } from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom"; // добавьте импорт
import FormFirst from "../Form/FormFirst";
import type { TelegramWebApp } from "../../types/telegram";
import './index.css'
import Button from "../../components/Button";
const tg = window.Telegram?.WebApp as TelegramWebApp | undefined;
export default function Chat() {
  // const [topSelected, setTopSelected] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (tg) {
      tg.expand();
      tg.ready();
      if (tg.BackButton) {
        tg.BackButton.show();
        tg.BackButton.onClick(() => {
          // обработка нажатия назад
          if (tg.MainButton) tg.MainButton.hide();
          tg.BackButton?.hide(); // скрыть кнопку назад
          // tg.CloseButton не существует, просто скрываем BackButton
          navigate('/');
        });
      }
    }
    // Очистка обработчика при размонтировании
    return () => {
      if (tg?.BackButton) tg.BackButton.onClick(() => {});
    };
  }, [navigate]);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, #2d2d32 0%, #232328 100%)"
      }}
    >
      <div className="text-white min-h-[100vh] pt-14">
        <h1
          className="font-bold mb-2 uppercase text-center text-lg tracking-[0.25em] text-white"
          style={{
            textShadow: "rgba(0, 0, 0) 0px 5px 45px, rgb(0, 0, 0) 0px 1px 9px",
            fontFamily: "'Montserrat', 'Arial', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.25em",
            WebkitTextStroke: "2px #fff",
            color: "transparent",
          }}
        >
          Создать трек
        </h1>
                <div
            className="text-gray-400 mb-6 text-xs text-center"
            style={{
              textShadow: "0 4px 32px rgba(0,0,0,0.85)"
            }}
          >
            Личная имрмроым оырмымышыммшышы
          </div>
        <div
          className="w-full h-auto pt-4 pb-2 rounded-t-xl px-4"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, #35353a 0%, #232328 100%)"
          }}
        >
          <textarea
            name="text"
            id="text"
            rows={5}
            placeholder="Например: уютный зимний вечер"
            className="text-sm w-full px-4 py-3 bg-[#232323] rounded-3xl border-[1px] border-gray-400 input2"
          ></textarea>
                <div className="w-full text-sm flex flex-col gap-4 mt-1">
          {["Придумай мне сценарий", "Мне нужен ХИТ"].map((label) => (
            <Button label={label}/>
          ))}
        </div>
         <div className="w-full text-base gap-2 mt-2">
          <FormFirst />
        </div>
        </div>
      </div>
    </div>
  );
}
