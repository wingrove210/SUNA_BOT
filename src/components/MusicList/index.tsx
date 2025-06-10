import { useState, useRef } from "react";
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
    title: "ДИМОН — БОСС",
    artist: "ТРЕКОПЕС",
    image: "https://storage.yandexcloud.net/suno-bot/IMG_2100.JPG",
    url: "https://storage.yandexcloud.net/suno-bot/%D0%94%D0%98%D0%9C%D0%9E%D0%9D%20%E2%80%94%20%D0%91%D0%9E%D0%A1%D0%A1.mp3",
  },
  {
    title: "КОГДА КАТЯ",
    artist: "ТРЕКОПЕС",
    image: "https://storage.yandexcloud.net/suno-bot/IMG_2101.JPG",
    url: "https://storage.yandexcloud.net/suno-bot/%D0%9A%D0%9E%D0%93%D0%94%D0%90%20%D0%9A%D0%90%D0%A2%D0%AF%20%D0%9F%D0%9E%D0%AF%D0%92%D0%98%D0%9B%D0%90%D0%A1%D0%AC.mp3",
  },
  {
    title: "Я — ПРОГРАММИСТ",
    artist: "ТРЕКОПЕС",
    image: "https://storage.yandexcloud.net/suno-bot/IMG_2109.PNG",
    url: "https://storage.yandexcloud.net/suno-bot/%D0%AF_%E2%80%94_%D0%9F%D0%A0%D0%9E%D0%93%D0%A0%D0%90%D0%9C%D0%9C%D0%98%D0%A1%D0%A2%2C_%D0%93%D0%90%D0%9D%D0%A1%D0%A2%D0%90_%D0%9A%D0%A0%D0%90%D0%A1%D0%90%D0%92%D0%A7%D0%98%D0%9A.mp3",
  },
];

type MusicListProps = {
  activeTab: "Recent" | "Like";
};

export default function MusicList({ activeTab }: MusicListProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTrackClick = (idx: number, url: string) => {
    setActiveId(idx);
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  // Фильтрация треков
  const tracksToShow =
    activeTab === "Recent"
      ? musicPlaylist.slice(0, 5)
      : musicPlaylist.slice(5, 10);

  return (
    <div className="w-full pb-52 overflow-y-scroll scrollbar-hide">
      {tracksToShow.map((track, idx) => (
        <TrackBlock
          key={idx}
          id={idx}
          idx={idx}
          name={track.title}
          artist={track.artist}
          image={track.image}
          active={activeId === idx}
          currentSong={activeId ?? -1}
          currentlyPlaying={activeId === idx && !!audioRef.current?.src}
          // Передаём только changeSong, onClick не нужен!
          changeSong={() => handleTrackClick(idx, track.url)}
        />
      ))}
      <audio ref={audioRef} />
    </div>
  );
}
