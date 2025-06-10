import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";

const menuItemsData = [
	{
		color: "#ffb457",
		path: "/",
		icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      ></path>
    </svg>
		),
	},
	{
		color: "#ff96bd",
		path: "/",
		icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
      ></path>
    </svg>
		),
	},
	{
		color: "#9999fb",
		path: "/",
		icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      ></path>
    </svg>
		),
	},
	{
		color: "#ffe797",
		path: "/noinsides",
		icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
      ></path>
    </svg>
		),
	},
	{
		color: "#cffff1",
		path: "/chat",
		icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      ></path>
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
			<div
  className="flex items-center justify-between bg-[#25272A] bg-opacity-95 backdrop-blur-md rounded-4xl px-6 py-6 shadow-lg max-w-md mx-auto transition-all duration-300"
  style={{
    border: `2px solid ${menuItemsData[activeIdx].color}`,
    boxShadow: `0 0 24px 0 ${menuItemsData[activeIdx].color}66`, // 66 = прозрачность
    transition: "border 0.2s, box-shadow 0.2s",
  }}
>
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
							boxShadow: activeIdx === idx
								? `inset 0 0 12px 2px ${item.color}`
								: "none",
							border: activeIdx === idx
								? `2px solid ${item.color}`
								: "2px solid transparent",
							transition: "color 0.2s, border 0.2s, box-shadow 0.2s",
						}}
					>
						{item.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
