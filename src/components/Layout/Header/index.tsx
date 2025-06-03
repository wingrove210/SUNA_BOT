import { useState } from "react";
import './index.css'
export default function Header() {
  const [isPlaylistActive, setIsPlaylistActive] = useState<boolean>(false);
  
  return (
    <div className="flex w-full justify-between px-10 py-4 mt-17 items-center">
      <div className="">
        <img src="/logo.png" alt="" className="w-22 h-22 ml-5" />
      </div>
      <div className="">
        <button
          className={`button btn--small playlist${isPlaylistActive ? " isactive" : ""}`}
          onClick={() => setIsPlaylistActive(!isPlaylistActive)}
          aria-label={isPlaylistActive ? "Закрыть плейлист" : "Открыть плейлист"}
        >
          {isPlaylistActive ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-list" />
          )}
        </button>
      </div>
    </div>
  );
}
