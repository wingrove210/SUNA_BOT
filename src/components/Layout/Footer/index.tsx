import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";

// const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

const menuItemsData = [
  { color: "#ffb457", path: "/", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M3.8,6.6h16.4"/><path d="M20.2,12.1H3.8"/><path d="M3.8,17.5h16.4"/></svg> },
  { color: "#ff96bd", path: "/", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"/><path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6"/></svg> },
  { color: "#9999fb", path: "/", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M3.4,11.9l8.8,4.4l8.4-4.4"/><path d="M3.4,16.2l8.8,4.5l8.4-4.5"/><path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z"/></svg> },
  { color: "#ffe797", path: "/", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z"/><path d="M4.2,9.3h15.6"/><path d="M9.1,9.5v10.3"/></svg> },
  { color: "#cffff1", path: "/chat", icon: <svg className="icon" viewBox="0 0 24 24"><path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z"/><path d="M5.5,20l9.9-9.9l4.7,4.7"/><path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z"/></svg> },
];

export default function Footer() {
  const [activeIdx, setActiveIdx] = useState(0);
  const menuRef = useRef<HTMLMenuElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const location = useLocation();

  // Меняем фон body
  // useEffect(() => {
  //   document.body.style.backgroundColor = bgColorsBody[activeIdx];
  // }, [activeIdx]);

  // Смещаем border
  useEffect(() => {
    function offsetMenuBorder() {
      const menu = menuRef.current;
      const border = borderRef.current;
      const activeItem = itemRefs.current[activeIdx];
      if (menu && border && activeItem) {
        const offsetActiveItem = activeItem.getBoundingClientRect();
        const menuOffset = menu.getBoundingClientRect();
        const left =
          Math.floor(
            offsetActiveItem.left -
              menuOffset.left -
              (border.offsetWidth - activeItem.offsetWidth) / 2 // исправлено здесь
          ) + "px";
        border.style.transform = `translate3d(${left}, 0 , 0)`;
      }
    }
    offsetMenuBorder();
    window.addEventListener("resize", offsetMenuBorder);
    return () => window.removeEventListener("resize", offsetMenuBorder);
  }, [activeIdx]);

  // Устанавливаем активный пункт меню в зависимости от текущего пути
  useEffect(() => {
    const path = location.pathname;
    const idx = menuItemsData.findIndex(item => item.path === path);
    if (idx !== -1) {
      setActiveIdx(idx);
    }
  }, [location.pathname]);

  return (
    <div className="w-full fixed bottom-0 z-50">
      {/* <menu className="menu" ref={menuRef}>
        {menuItemsData.map((item, idx) => (
          <Link to={item.path} key={idx}>
            <button
              ref={el => { itemRefs.current[idx] = el }}
              className={`menu__item${activeIdx === idx ? " active" : ""}`}
              style={{ "--bgColorItem": item.color } as React.CSSProperties}
              onClick={() => setActiveIdx(idx)}
              type="button"
            >
              {item.icon}
            </button>
          </Link>
        ))}
      </menu>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
          </clipPath>
        </svg>
      </div> */}
      <div
  className="flex items-center justify-between bg-gray-950 bg-opacity-95 backdrop-blur-md rounded-t-4xl px-6 py-6 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-100"
>
  <button
    className="text-red-500 hover:text-red-400 mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
  </button>
  <button
    className="text-gray-400 hover:text-gray-200 mx-2 transition-all duration-200 ease-in-out hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
      ></path>
    </svg>
  </button>
  <button
    className="text-gray-400 hover:text-gray-200 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-800 hover:shadow-md rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      ></path>
    </svg>
  </button>
  <button
    className="text-gray-400 hover:text-gray-200 mx-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
      ></path>
    </svg>
  </button>
  <button
    className="text-gray-400 hover:text-gray-200 mx-2 transition-all duration-200 ease-in-out hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      ></path>
    </svg>
  </button>
</div>

    </div>
  );
}
