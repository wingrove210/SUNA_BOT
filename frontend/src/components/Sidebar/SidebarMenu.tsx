import React, { useState } from "react";
import playlistSvg from "../../assets/footerSvg/playlist";
const SidebarMenu: React.FC = () => {
  const [active, setActive] = useState<"Recent" | "Like">("Recent");

  return (
    <aside className="fixed left-0 top-0 h-screen w-14 flex flex-col items-center pt-28 z-40">
      <div className="w-5 h-5 mb-3 text-white">
        {playlistSvg()}
      </div>
      <span
        className="text-white font-bold text-base mb-14"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Your playlist
      </span>
      {/* Categories */}
      <nav className="flex flex-col items-center mt-25">
        {/* Recent */}
        <div className="flex items-center justify-center mb-8">
          {active === "Recent" ? (
            <span className="text-white text-5xl mr-2 w-1 flex justify-center items-center gap-10">.</span>
          ) : (
            <span className="mr-2 w-1" />
          )}
          <button
            type="button"
            className={`transition ${
              active === "Recent"
                ? "text-white font-bold"
                : "text-gray-400"
            } text-base`}
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            onClick={() => setActive("Recent")}
          >
            Recent
          </button>
        </div>
        {/* Like */}
        <div className="flex items-center justify-center">
          {active === "Like" ? (
            <span className="text-white text-5xl mr-2 w-1 flex justify-center">.</span>
          ) : (
            <span className="mr-2 w-1" />
          )}
          <button
            type="button"
            className={`transition ${
              active === "Like"
                ? "text-white font-bold"
                : "text-gray-400"
            } text-base`}
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            onClick={() => setActive("Like")}
          >
            Like
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SidebarMenu;