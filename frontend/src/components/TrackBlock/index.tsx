import React from "react";

interface TrackType {
  id: number;
  name: string;
  artist: string;
}

const TrackBlock: React.FC<TrackType> = ({ name, artist }) => {
  return (
    <div className="pl-12 pr-2 mt-2">
    <div className="w-full flex items-center gap-4 bg-[#252829] px-3 py-4 rounded-2xl">
      <div className="h-10 w-10">
        <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1574281183650-14db8f28c259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt={name} />
      </div>
      <div className="flex flex-col">
        <div className="text-lg text-white">{name}</div>
        <div className="text-sm text-white">{artist}</div>
      </div>
    </div>
    </div>
  );
};

export default TrackBlock;
