import React from "react";
import playlistSvg from "../../assets/footerSvg/playlist";

type SidebarMenuProps = {
  activeTab: "Recent" | "Like";
  setActiveTab: (tab: "Recent" | "Like") => void;
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ activeTab, setActiveTab }) => (
  <aside className="fixed left-0 top-0 h-screen w-14 flex flex-col items-center pt-[22vh] z-40">
    <div className="w-5 h-5 mb-3 text-white">
      {playlistSvg()}
    </div>
    <span
      className="text-white font-bold text-base mb-14"
      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
    >
      Выбирите тариф
    </span>
    <nav className="flex flex-col items-center mt-20">
      <div className="flex items-center justify-center mb-8">
        {activeTab === "Recent" ? (
          <span className="text-white text-5xl mr-2 w-1 flex justify-center items-center gap-10">.</span>
        ) : (
          <span className="mr-2 w-1" />
        )}
        <button
          type="button"
          className={`transition ${
            activeTab === "Recent"
              ? "text-white font-bold"
              : "text-gray-400"
          } text-base`}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          onClick={() => setActiveTab("Recent")}
        >
          Примеры
        </button>
      </div>
      <div className="flex items-center justify-center">
        {activeTab === "Like" ? (
          <span className="text-white text-5xl mr-2 w-1 flex justify-center">.</span>
        ) : (
          <span className="mr-2 w-1" />
        )}
        <button
          type="button"
          className={`transition ${
            activeTab === "Like"
              ? "text-white font-bold"
              : "text-gray-400"
          } text-base`}
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          onClick={() => setActiveTab("Like")}
        >
          Лучшее
        </button>
      </div>
    </nav>
  </aside>
);

export default SidebarMenu;