import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
    
    // Типизация для музыкального трека
    interface MusicItem {
      artist: string;
      title: string;
      image: string;
      url: string;
    }
    
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
    
    function fancyTimeFormat(s: number): string {
      if (!s) return "0:00";
      s = Math.round(s);
      return `${Math.floor(s / 60)}:${s % 60 < 10 ? "0" : ""}${s % 60}`;
    }
    
    const NoInsides: React.FC = () => {
      const [currentSong, setCurrentSong] = useState<number>(0);
      const [currentlyPlaying, setCurrentlyPlaying] = useState<boolean>(false);
      const [currentlyStopped, setCurrentlyStopped] = useState<boolean>(false);
      const [trackDuration, setTrackDuration] = useState<number>(0);
      const [currentTime, setCurrentTime] = useState<number>(0);
      const [currentProgressBar, setCurrentProgressBar] = useState<number>(0);
      const [isPlaylistActive, setIsPlaylistActive] = useState<boolean>(false);
      const [shouldAutoPlay, setShouldAutoPlay] = useState<boolean>(false);
    
      const audioRef = useRef<HTMLAudioElement>(new Audio(musicPlaylist[0].url));
      const intervalRef = useRef<number | null>(null);
    
      // Загружаем новый трек при смене currentSong
      useEffect(() => {
        audioRef.current.src = musicPlaylist[currentSong].url;
        audioRef.current.load();
    
        const onLoadedMetadata = () => setTrackDuration(audioRef.current.duration || 0);
        audioRef.current.addEventListener("loadedmetadata", onLoadedMetadata);
    
        const handleEnded = () => {
          if (currentSong + 1 === musicPlaylist.length) {
            stopAudio();
            setCurrentlyStopped(true);
          } else {
            setCurrentlyPlaying(false);
            setCurrentSong((prev) => prev + 1);
          }
        };
        audioRef.current.addEventListener("ended", handleEnded);
    
        // Если был клик по треку в каталоге, автозапуск
        if (shouldAutoPlay) {
          setCurrentlyPlaying(true);
          setCurrentlyStopped(false);
          audioRef.current.play();
          setShouldAutoPlay(false);
        }
    
        return () => {
          audioRef.current.removeEventListener("ended", handleEnded);
          audioRef.current.removeEventListener("loadedmetadata", onLoadedMetadata);
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
        // eslint-disable-next-line
      }, [currentSong]);
    
      // Авто-плей при смене currentSong, если играло
      useEffect(() => {
        if (currentlyPlaying) {
          playAudio();
        }
        // eslint-disable-next-line
      }, [currentSong]);
    
      // Таймер времени
      useEffect(() => {
        if (currentlyPlaying) {
          intervalRef.current = setInterval(() => {
            setCurrentTime(audioRef.current.currentTime);
            setCurrentProgressBar(
              (audioRef.current.currentTime / (trackDuration || 1)) * 100 || 0
            );
          }, 1000);
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
      }, [currentlyPlaying, trackDuration]);
    
      function playAudio() {
        if (
          currentlyStopped &&
          currentSong + 1 === musicPlaylist.length
        ) {
          setCurrentSong(0);
        }
        if (!currentlyPlaying) {
          setCurrentlyPlaying(true);
          setCurrentlyStopped(false);
          audioRef.current.play();
        } else {
          stopAudio();
        }
      }
    
      function stopAudio() {
        audioRef.current.pause();
        setCurrentlyPlaying(false);
      }
    
      function nextSong() {
        if (currentSong < musicPlaylist.length - 1) {
          setCurrentSong((prev) => prev + 1);
        }
      }
    
      function prevSong() {
        if (currentSong > 0) {
          setCurrentSong((prev) => prev - 1);
        }
      }
    
      function changeSong(index: number, autoPlay = false) {
        stopAudio();
        setCurrentSong(index);
        setCurrentlyPlaying(false);
        setCurrentlyStopped(false);
        setCurrentTime(0);
        setCurrentProgressBar(0);
        if (autoPlay) setShouldAutoPlay(true);
      }
    
      return (
        <div id="app" className="app">
          <div className="app__head row">
            <Link to={'/'}>
             <button className="button btn--small back" onClick={prevSong}>
              <i className="fa fa-arrow-left" />
            </button>
            </Link>
            <button
              className={`button btn--small playlist${isPlaylistActive ? " isactive" : ""}`}
              onClick={() => setIsPlaylistActive(!isPlaylistActive)}
              aria-label={isPlaylistActive ? "Закрыть плейлист" : "Открыть плейлист"}
            >
              <i className="fa fa-list" />
            </button>
          </div>
          <div className="app__body row">
            <div className="album">
              <div
                className={`album__img${isPlaylistActive ? " isactive" : ""}`}
                style={{
                  backgroundImage: `url(${musicPlaylist[currentSong].image})`
                }}
              />
              <div className={`album__info${isPlaylistActive ? " isactive" : ""}`}>
                <div className="album__info-name">{musicPlaylist[currentSong].title}</div>
                <div className="album__info-track">{musicPlaylist[currentSong].artist}</div>
              </div>
            </div>
            <div className={`progress${isPlaylistActive ? " isactive" : ""}`}>
              <div className="progress__count">
                <span>{fancyTimeFormat(currentTime)}</span>
                <span>{fancyTimeFormat(trackDuration)}</span>
              </div>
              <div className="progress__bar">
                <div
                  className="progress__bar-current"
                  style={{ width: `${currentProgressBar}%` }}
                />
                <div
                  className="progress__bar-pin"
                  style={{ left: `${currentProgressBar}%` }}
                />
              </div>
            </div>
            <div className="row">
              <button className="button btn--big prev" onClick={prevSong}>
                <i className="fa fa-backward" />
              </button>
              <button
                className={`button btn--big play${currentlyPlaying ? " pause" : ""}`}
                onClick={playAudio}
              >
                <i className={`fa ${currentlyPlaying ? "fa-pause" : "fa-play"}`} />
              </button>
              <button className="button btn--big next" onClick={nextSong}>
                <i className="fa fa-forward" />
              </button>
            </div>
          </div>
    
          {/* Playlist */}
          <div className={`tracks${isPlaylistActive ? " isactive" : ""}`}>
            <ul className="tracks__list">
              {musicPlaylist.map((track, idx) => (
                <li
                  key={idx}
                  className={`tracks__item${currentSong === idx ? " isactive" : ""}`}
                  onClick={() => changeSong(idx, true)}
                >
                  <div className="tracks__info">
                    <div className="tracks__info-artist">{track.artist}</div>
                    <div className="tracks__info-name">{track.title}</div>
                  </div>
                  <button
                    className={`button btn--xs play${currentSong === idx ? " pause" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeSong(idx, true);
                    }}
                  >
                    <i className={`fa ${currentSong === idx && currentlyPlaying ? "fa-pause" : "fa-play"}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    
    export default NoInsides;