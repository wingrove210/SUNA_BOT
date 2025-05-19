import { useState } from "react";
import heartSvg from "../../assets/svg/heart";
import playSvg from "../../assets/svg/play";
import pauseSvg from "../../assets/svg/pause";

export default function PlayerBottom() {
  const [isPlay, setIsPlay] = useState(false);

  const handlePlayPause = () => {
    setIsPlay((prev) => !prev);
  };

  return (
    <div>
      <div className="w-full h-20 bg-[#bae6f2] px-5 py-3 rounded-t-4xl bottom-0 absolute">
        <div className="h-full flex justify-between items-center">
          <div className="h-full flex gap-3 items-center">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1521133573892-e44906baee46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            />
            <div className="flex flex-col">
              <div className="song-name">Tearing Me up</div>
              <div className="artist play-artist">Bob Moses</div>
            </div>
          </div>
          <div className="text-2xl text-black flex items-center justify-center gap-2">
            <div className="w-10 h-10 p-1">{heartSvg()}</div>
            <button
              className="w-10 h-10 flex items-center justify-center bg-white p-2 rounded-2xl"
              onClick={handlePlayPause}
            >
              {isPlay ? pauseSvg() : playSvg()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
