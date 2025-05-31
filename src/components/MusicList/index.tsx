import React, { useState, useRef } from "react";
import TrackBlock from "../TrackBlock";
import './index.css'

type MusicItem = {
  title: string;
  artist: string;
  image: string;
  url: string;
};

const musicPlaylist: MusicItem[] = [
  {
    title: "LSD",
    artist: "Genius ft. Sia, Diplo, Labrinth",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
  },
  {
    title: "Extreme Ways",
    artist: "Moby",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
  },
  {
    title: "Everybody Knows",
    artist: "Leonard Cohen",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
  },
  {
    title: "Butterflies",
    artist: "Sia",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
  },
  {
    title: "The Final Victory",
    artist: "Haggard",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
  },
  {
    title: "The Comeback Kid",
    artist: "Lindi Ortega",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
  },
  {
    title: "Overdose",
    artist: "Grandson",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
  },
  {
    title: "Mekanın Sahibi",
    artist: "Norm Ender",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
  },
  {
    title: "Rag'n'Bone Man",
    artist: "Human",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
    url: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
  },
];

export default function MusicList() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTrackClick = (idx: number, url: string) => {
    setActiveId(idx);
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  return (
    <div className="w-full h-[500px] overflow-y-auto scrollbar-hide">
      {musicPlaylist.map((track, idx) => (
        <TrackBlock
          key={idx}
          id={idx}
          name={track.title}
          artist={track.artist}
          image={track.image}
          active={activeId === idx}
          onClick={() => handleTrackClick(idx, track.url)}
        />
      ))}
      <audio ref={audioRef} />
    </div>
  );
}
