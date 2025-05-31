import { useNavigate } from 'react-router-dom';

const topics = [
	{ key: 'self', label: '🧍 Для себя' },
	{ key: 'love', label: '💖 Для любимого человека' },
	{ key: 'family', label: '👨‍👩‍👧‍👦 Для близких' },
	{ key: 'friends', label: '🕺 Для друзей' },
	{ key: 'colleagues', label: '👔 Для коллег' },
	{ key: 'hero', label: '🪖 О герое или солдате' },
	{ key: 'child', label: '👶 Про ребёнка' },
	{ key: 'holiday', label: '🎉 Для праздника и поздравления' },
	{ key: 'girl', label: '💃 Для девушки' },
	{ key: 'boy', label: '🕺 Для парня' },
	{ key: 'business', label: '🏢 Для бизнеса' },
	{ key: 'boss', label: '🎩 Для начальника' },
	{ key: 'help', label: '🐶❓ Трекопёс, помоги понять для кого' },
];

export default function FormFirst() {
	const navigate = useNavigate();

	const handleSelect = (topic: { key: string; label: string }) => {
		navigate(
			`/form/second?topic=${topic.key}&label=${encodeURIComponent(topic.label)}`
		);
	};

	const firstButtons = topics.slice(0, 12);
	const lastButton = topics[12];

	return (
		<div className="max-w-xl mx-auto">
			<h1 className="text-xl font-normal mb-4 pl-5 mt-6">Выберите тему трека</h1>
			<div className="grid grid-cols-2 gap-3">
				{firstButtons.map((topic) => (
					<button
						key={topic.key}
						className="w-full h-12 flex items-center justify-center rounded-3xl bg-[#14141E] text-white text-sm hover:bg-[#333] border-gray-500 border-[1px] hover:border-green-400 transition"
						onClick={() => handleSelect(topic)}
					>
						{topic.label}
					</button>
				))}
				{lastButton && (
					<button
						key={lastButton.key}
						className="col-span-2 w-full h-12 flex items-center justify-center rounded-3xl bg-[#14141E] text-white text-sm hover:bg-[#333] border-gray-500 border-[1px] hover:border-green-400 transition"
						onClick={() => handleSelect(lastButton)}
					>
						{lastButton.label}
					</button>
				)}
			</div>
		</div>
	);
}
