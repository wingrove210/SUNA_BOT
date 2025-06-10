import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";

const menuItemsData = [
	{
		color: "#ffb457",
		path: "/",
		icon: (
			<svg
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path d="M3.8,6.6h16.4" />
				<path d="M20.2,12.1H3.8" />
				<path d="M3.8,17.5h16.4" />
			</svg>
		),
	},
	{
		color: "#ff96bd",
		path: "/",
		icon: (
			<svg
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
				<path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
			</svg>
		),
	},
	{
		color: "#9999fb",
		path: "/",
		icon: (
			<svg
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
				<path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
				<path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
			</svg>
		),
	},
	{
		color: "#ffe797",
		path: "/noinsides",
		icon: (
			<svg
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z" />
				<path d="M4.2,9.3h15.6" />
				<path d="M9.1,9.5v10.3" />
			</svg>
		),
	},
	{
		color: "#cffff1",
		path: "/chat",
		icon: (
			<svg
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
			>
				<path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z" />
				<path d="M5.5,20l9.9-9.9l4.7,4.7" />
				<path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />
			</svg>
		),
	},
];

export default function Footer() {
	const [activeIdx, setActiveIdx] = useState(0);
	const location = useLocation();

	useEffect(() => {
		const idx = menuItemsData.findIndex((item) => item.path === location.pathname);
		if (idx !== -1) setActiveIdx(idx);
	}, [location.pathname]);

	return (
		<div className="w-full fixed bottom-4 z-50">
			<div className="flex items-center justify-between bg-gray-950 bg-opacity-95 backdrop-blur-md rounded-4xl px-6 py-8 shadow-lg max-w-md mx-auto transition-all duration-300">
				{menuItemsData.map((item, idx) => (
					<Link
						to={item.path}
						key={idx}
						onClick={() => setActiveIdx(idx)}
						className={`mx-2 rounded-full p-1 transition-all duration-200
              ${activeIdx === idx ? "" : "hover:bg-gray-800 hover:shadow-md"}
            `}
						style={{
							color: activeIdx === idx ? item.color : "#fff",
							border:
								activeIdx === idx
									? `2px solid ${item.color}`
									: "2px solid transparent",
							transition: "color 0.2s, border 0.2s",
						}}
					>
						{item.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
