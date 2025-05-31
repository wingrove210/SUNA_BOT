import React from "react";

interface TrackType {
  id: number;
  name: string;
  artist: string;
  image?: string;
  active?: boolean;
  onClick?: () => void;
}

const TrackBlock: React.FC<TrackType> = ({ name, artist, image, active = false, onClick }) => {
  return (
    <div className="pl-15 pr-2 mt-2">
      <div
        className={`w-full flex items-center gap-4 px-3 py-4 rounded-2xl cursor-pointer transition ${
          active ? "bg-black" : ""
        }`}
        onClick={onClick}
      >
        <div className="h-10 w-10">
          <img
            className="w-full h-full rounded-2xl"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg text-white">{name}</div>
          <div className="text-sm text-white opacity-35">{artist}</div>
        </div>
      </div>
    </div>
  );
};

export default TrackBlock;
