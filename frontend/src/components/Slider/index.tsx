import React, { useRef } from "react";

const slides = [
  {
    title: "Relax",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Spring",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Chill",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80"
  }
];

export default function Slider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  let startX = 0;
  let scrollLeft = 0;

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (startX - x);
    sliderRef.current.scrollLeft = scrollLeft + walk;
  };

  // Mouse events
  let isDown = false;
  const onMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (!sliderRef.current) return;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };
  const onMouseLeave = () => {
    isDown = false;
  };
  const onMouseUp = () => {
    isDown = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (startX - x);
    sliderRef.current.scrollLeft = scrollLeft + walk;
  };

  return (
    <div
      ref={sliderRef}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "32px",
        overflowX: "auto",
        padding: "24px 0",
        cursor: "grab",
        userSelect: "none",
        WebkitOverflowScrolling: "touch"
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            position: "relative",
            width: 180,
            height: 220,
            borderRadius: 24,
            overflow: "hidden",
            background: "#222",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            flex: "0 0 auto"
          }}
        >
          <img
            src={slide.img}
            alt={slide.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
          <div style={{
            position: "absolute",
            left: 16,
            bottom: 20,
            color: "#fff",
            fontWeight: 600,
            fontSize: 22,
            textShadow: "0 2px 8px rgba(0,0,0,0.3)"
          }}>
            {slide.title}
          </div>
          <button
            style={{
              position: "absolute",
              right: 16,
              bottom: 16,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              cursor: "pointer"
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="11" fill="none"/>
              <path d="M8 7L15 11L8 15V7Z" fill="#222"/>
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
