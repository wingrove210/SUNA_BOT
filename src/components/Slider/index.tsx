import React, { useRef, useState } from "react";
const slides = [
	{
		title: "1 ТРЕК",
		video: '/1.mp4',
	},
	{
		title: "PRO",
		video: "/Полная версия трекопса.mp4",
	},
	{
		title: "ULTRA",
		video: "/Полная версия трекопса.mp4",
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
		// Можно добавить логику для визуального эффекта
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
			setActive(next);
			setTimeout(() => scrollToCard(next), 300);
		} else {
			scrollToCard(active);
		}
		touchStartX.current = null;
	};

	// Клик по любой точке слайдера: если не последний — вправо, если последний — влево
	const handleSliderClick = () => {
		if (active < slides.length - 1) {
			setActive(active + 1);
			setTimeout(() => scrollToCard(active + 1), 300);
		} else {
			setActive(0);
			setTimeout(() => scrollToCard(0), 300);
		}
	};

	return (
		<div
			className="relative w-[85vw] overflow-x-hidden ml-[12vw] h-64 min-h-64"
			onClick={handleSliderClick}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
			style={{ cursor: "pointer" }}
		>
			<div
				className="w-full h-full flex gap-8 px-4 py-4 rounded-lg select-none overflow-x-hidden no-scrollbar"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{slides.map((slide, idx) => (
					<div
						key={idx}
						ref={el => { cardRefs.current[idx] = el; }}
						className={`
              flex-shrink-0 relative rounded-3xl bg-[#222]
              ${idx === active
							? "scale-110 opacity-100 z-20 shadow-2xl transition-all duration-700 ease-in-out"
							: "scale-90 opacity-70 z-10 transition-all duration-700 ease-in-out"
						}
            `}
						style={{
							width: 180,
							height: "100%",
							overflow: "hidden",
							userSelect: "none",
							transition: "all 0.2s linear",
						}}
					>
						<video
							src={slide.video}
							className="w-full h-full object-cover pointer-events-none select-none"
							autoPlay
							loop
							muted
							playsInline
							draggable={false}
						/>
						<div className="absolute left-6 bottom-8 text-white font-semibold text-2xl drop-shadow">
							{slide.title}
						</div>
						<button className="absolute right-5 bottom-5 w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-md pointer-events-none">
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