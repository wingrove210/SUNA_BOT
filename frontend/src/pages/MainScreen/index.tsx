import React, { useState } from "react";

const genres = [
  { icon: "", label: "Любой" },
  { icon: "🎤", label: "Поп-музыка" },
  { icon: "🎸", label: "Хард-рок" },
  { icon: "🎧", label: "Хаус" },
  { icon: "💁‍♀️", label: "Поп-рок" },
  { icon: "🤘", label: "Метал" },
  { icon: "💥", label: "Панк-рок" },
  { icon: "🎹", label: "Синти-поп" },
  { icon: "🎲", label: "Техно" },
  { icon: "🎷", label: "R&B" },
  { icon: "🌴", label: "Регги", wide: true },
  { icon: "", label: "Мой вариант", wide: true },
];

export default function MainScreen() {
  const [activeGenre, setActiveGenre] = useState("Любой");

  return (
    <div className="text-white h-auto w-[100vw] px-5 py-5">
      <h1>Создать трек</h1>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <button className="col-span-2 bg-gray-700 rounded-xl py-2 text-lg">
          Придумать текст с GigaChat
        </button>
        <button className="col-span-1 bg-gray-700 rounded-xl py-2 text-lg">
          Свой текст
        </button>
        <button className="col-span-1 bg-gray-700 rounded-xl py-2 text-lg">
          Без слов
        </button>
      </div>
      <h6 className="text-lg my-5">Тема песни</h6>
      <textarea
        name="textarea"
        id="textarea"
        rows={4}
        className="w-full bg-gray-700 rounded-2xl text-lg px-4 py-2"
        placeholder="Например: уютный зимний вечер"
      />
      <h6 className="text-lg mb-3">Жанр</h6>
      <div className="grid grid-cols-2 gap-2">
        {genres.map((g) => (
          <button
            key={g.label}
            className={
              "bg-gray-700 rounded-xl py-2 text-lg flex items-center justify-center" +
              (g.wide ? " col-span-2" : "") +
              (activeGenre === g.label ? " border-2 border-green-400" : "")
            }
            onClick={() => setActiveGenre(g.label)}
            type="button"
          >
            {g.icon && <span className="mr-2">{g.icon}</span>}
            {g.label}
          </button>
        ))}
      </div>
      <span className="w-full bg-gray-500 h-[1px] block my-7"></span>
      <button className="bg-gray-600 w-full rounded-2xl py-3 text-lg">
        Создать
      </button>
    </div>
  );
}
