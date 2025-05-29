import React, { useRef, useState } from "react";

const slides = [
	{
		title: "Relax",
		img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
	},
	{
		title: "Spring",
		img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
	},
	{
		title: "Chill",
		img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
	},
];

export default function Slider() {
	const [active, setActive] = useState(0);
	const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
	const touchStartX = useRef<number | null>(null);

	// Центрируем карточку по индексу — вызываем только по необходимости!
	const scrollToCard = (idx: number) => {
		if (cardRefs.current[idx]) {
			cardRefs.current[idx]!.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest",
			});
		}
	};

	// Touch events
	const onTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const onTouchMove = (e: React.TouchEvent) => {
		e.preventDefault();
	};
	const onTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return;
		const delta = e.changedTouches[0].clientX - touchStartX.current;
		let next = active;
		if (delta < -50 && active < slides.length - 1) {
			next = active + 1;
		} else if (delta > 50 && active > 0) {
			next = active - 1;
		}
		if (next !== active) {
			setActive(next); // scale сменится мгновенно и плавно
			setTimeout(() => scrollToCard(next), 300); // scroll после scale — совпадает с duration
		} else {
			// Просто центрируем текущую, если ничего не изменилось
			scrollToCard(active);
		}
		touchStartX.current = null;
	};


	return (
		<div className="relative w-[85vw] overflow-x-hidden ml-[12vw]">
			<div
				className="w-full flex gap-8 px-4 py-4 rounded-lg select-none overflow-x-hidden no-scrollbar"
				style={{
					scrollbarWidth: "none", // Firefox
					msOverflowStyle: "none", // IE/Edge
					WebkitOverflowScrolling: "touch",
				}}
				onTouchStart={onTouchStart}
				onTouchMove={onTouchMove}
				onTouchEnd={onTouchEnd}
			>
				{slides.map((slide, idx) => (
					<div
						key={idx}
						ref={(el) => (cardRefs.current[idx] = el)}
						className={`
              flex-shrink-0 relative rounded-3xl bg-[#222]
              ${
								idx === active
									? "scale-110 opacity-100 z-20 shadow-2xl transition-all duration-700 ease-in-out"
									: "scale-90 opacity-70 z-10 transition-all duration-700 ease-in-out"
							}
            `}
						style={{
							width: idx === active ? 200 : 140,
							height: idx === active ? 260 : 220,
							overflow: "hidden",
							userSelect: "none",
							transition: "all 0.2s linear",
						}}
					>
						<img
							src={slide.img}
							alt={slide.title}
							className="w-full h-full object-cover pointer-events-none select-none"
							draggable={false}
						/>
						<div className="absolute left-6 bottom-8 text-white font-semibold text-2xl drop-shadow">
							{slide.title}
						</div>
						<button className="absolute right-5 bottom-5 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-md">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
								<circle cx="11" cy="11" r="11" fill="none" />
								<path d="M8 7L15 11L8 15V7Z" fill="#222" />
							</svg>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}