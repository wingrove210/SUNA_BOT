import React from "react";

interface TrackType {
  id: number;
  name: string;
  artist: string;
  image?: string;
  active?: boolean;
  onClick?: () => void;
  idx: number;
  currentSong: number;
  currentlyPlaying: boolean;
  changeSong: (idx: number, play: boolean) => void;
}

const TrackBlock: React.FC<TrackType> = ({
  name,
  artist,
  image,
  active = false,
  idx,
  currentSong,
  currentlyPlaying,
  changeSong,
}) => {
  return (
    <div className="pl-15 pr-2 mt-2">
      <div
        className={`w-full flex items-center gap-4 px-3 py-4 rounded-2xl cursor-pointer transition-colors duration-200
    ${active
          ? "bg-[#1a1b1f] border-b border-b-[#18191D] border-t border-t-[#353535] border-r border-r-[#353535] shadow-[inset_0_-25px_25px_#222226]"
          : ""}`}
        style={{
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
          // transition: "background 0.2s, box-shadow 0.2s", // не используйте transition: all
        }}
        onClick={() => {
          if (currentSong !== idx) changeSong(idx, true);
        }}
      >
        <div className="h-10 w-10">
          <img
            className="w-full h-full rounded-2xl"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-lg text-white">{name}</div>
          <div className="text-sm text-white opacity-35">{artist}</div>
        </div>
        <button
          className={`
    ml-auto flex items-center justify-center rounded-full border border-[#353535] transition w-12 h-12
    ${currentSong === idx && currentlyPlaying
      ? "bg-gradient-to-br from-[#ff4d00] to-[#ffb457] border-[#ff4d00] shadow-[0_0_0_4px_rgba(255,77,0,0.15)]"
      : "bg-[#23232b] shadow-[0_4px_24px_0_rgba(0,0,0,0.45)]"
    }
  `}
          onClick={e => {
            e.stopPropagation();
            changeSong(idx, true);
          }}
        >
          <i
            className={`fa ${currentSong === idx && currentlyPlaying ? "fa-pause" : "fa-play"} text-white text-sm`}
          />
        </button>
      </div>
    </div>
  );
};

export default TrackBlock;
