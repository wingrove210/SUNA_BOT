import { useState } from "react";

const genres = [
  { label: "Любой", icon: "", colSpan: 1 },
  { label: "Поп-музыка", icon: "🎤", colSpan: 1 },
  { label: "Хард-рок", icon: "🎸", colSpan: 1 },
  { label: "Хаус", icon: "🎧", colSpan: 1 },
  { label: "Поп-рок", icon: "👩‍🎤", colSpan: 1 },
  { label: "Метал", icon: "🤘", colSpan: 1 },
  { label: "Панк-рок", icon: "💥", colSpan: 1 },
  { label: "Синти-поп", icon: "🎹", colSpan: 1 },
  { label: "Техно", icon: "🎲", colSpan: 1 },
  { label: "R&B", icon: "🎷", colSpan: 1 },
  { label: "Регги", icon: "🌴", colSpan: 2 },
  { label: "Мой вариант", icon: "", colSpan: 2 },
];

export default function Chat() {
  const [selected, setSelected] = useState<number>(0);
  const [topSelected, setTopSelected] = useState<number>(0);

  return (
    <div className="text-white px-4 bg-[#171717] h-screen">
      <h1 className="text-xl py-3">Создать песню</h1>
      <div className="grid grid-cols-2 w-full text-lg gap-2 mt-2">
        {["Придумать текст с GigaChat", "Свой текст", "Без слов"].map((label, idx) => (
          <button
            key={label}
            className={`rounded-xl py-2 border-[1.5px] ${
              topSelected === idx ? "border-green-400 font-semibold" : "border-white"
            } col-span-${idx === 0 ? 2 : 1}`}
            style={idx === 0 ? { gridColumn: "span 2 / span 2" } : {}}
            onClick={() => setTopSelected(idx)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <h1 className="text-sm py-4">Текст песни</h1>
      <textarea
        name="text"
        id="text"
        rows={5}
        placeholder="Например: уютный зимний вечер"
        className="text-sm w-full px-2 py-2 bg-[#232323] rounded-xl"
      ></textarea>
      <h1 className="text-sm py-4">Жанр</h1>
      <div className="grid grid-cols-2 w-full text-base gap-2 mt-2">
        {genres.map((genre, idx) => (
          <button
            key={genre.label}
            className={`col-span-${genre.colSpan} rounded-xl py-2 border ${
              selected === idx
                ? "border-green-400 font-semibold"
                : "border-transparent"
            } text-white bg-[#232323] flex items-center justify-center`}
            onClick={() => setSelected(idx)}
            type="button"
          >
            {genre.icon && <span className="mr-2">{genre.icon}</span>}
            {genre.label}
          </button>
        ))}
      </div>
      <span className="w-full h-[1px] bg-[#747474] flex mt-3 mb-2"></span>
      <button className="w-full rounded-2xl bg-[#747474] text-sm py-2">Создать</button>
    </div>
  );
}
