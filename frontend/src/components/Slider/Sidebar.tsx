import React from "react";

const tracks = [
  {
    id: 1,
    title: "Sunset Drive",
    artist: "Lofi Beats",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=64&h=64",
    active: true,
  },
  {
    id: 2,
    title: "Chill Vibes",
    artist: "DJ Relax",
    cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=64&h=64",
    active: false,
  },
  {
    id: 3,
    title: "Night Walk",
    artist: "Dreamscape",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64",
    active: false,
  },
];

const currentTrack = {
  title: "Sunset Drive",
  artist: "Lofi Beats",
  cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=128&h=128",
};

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col justify-between h-screen w-72 bg-white rounded-l-3xl shadow-xl py-8 px-6">
      {/* Top: Discover & Hamburger */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold tracking-wide">Discover</h1>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            {/* Hamburger icon */}
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
        {/* Vertical "Your playlist" button */}
        <button className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 transition rounded-2xl py-6 w-16 mb-8 mx-auto shadow">
          {/* Playlist icon (musical note) */}
          <svg className="w-7 h-7 text-blue-500 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13"></path>
            <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth={2} fill="none"></circle>
            <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth={2} fill="none"></circle>
          </svg>
          <span className="text-xs font-semibold text-blue-600">Your playlist</span>
        </button>
        {/* Current track card */}
        <div className="bg-blue-100 rounded-2xl p-4 flex flex-col items-center mb-8 shadow transition">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-24 h-24 rounded-xl mb-4 object-cover shadow"
          />
          <div className="text-center mb-3">
            <div className="text-lg font-bold">{currentTrack.title}</div>
            <div className="text-gray-500 text-sm">{currentTrack.artist}</div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 transition rounded-full p-3 shadow-lg">
            {/* Play icon */}
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <polygon points="6,4 17,10 6,16" />
            </svg>
          </button>
        </div>
        {/* Categories */}
        <div className="flex flex-col gap-2 mb-6">
          <button className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Recent
          </button>
          <button className="flex items-center gap-2 font-semibold text-gray-400 opacity-60 hover:opacity-100 transition">
            <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
            Like
          </button>
        </div>
        {/* Track list */}
        <ul className="flex flex-col gap-4">
          {tracks.map((track) => (
            <li
              key={track.id}
              className={`flex items-center gap-3 px-2 py-2 rounded-xl transition cursor-pointer ${
                track.active
                  ? "bg-blue-50 shadow font-bold"
                  : "hover:bg-gray-50"
              }`}
            >
              <img
                src={track.cover}
                alt={track.title}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <div className={`text-sm ${track.active ? "font-bold" : "font-semibold"}`}>{track.title}</div>
                <div className="text-xs text-gray-400">{track.artist}</div>
              </div>
              {track.active && (
                <span className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Bottom: Mini player */}
      <div className="bg-blue-400 rounded-2xl flex items-center p-3 mt-8 shadow-lg">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-12 h-12 rounded-xl object-cover mr-3"
        />
        <div className="flex-1">
          <div className="text-white font-bold text-sm">{currentTrack.title}</div>
          <div className="text-blue-100 text-xs">{currentTrack.artist}</div>
        </div>
        <button className="mr-2">
          {/* Like icon */}
          <svg className="w-5 h-5 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
        <button className="bg-white rounded-full p-2 shadow transition hover:bg-blue-100">
          {/* Play icon */}
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <polygon points="6,4 17,10 6,16" />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;