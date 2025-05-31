import { useNavigate } from 'react-router-dom';

const topics = [
	{ key: 'love', label: '💖 Для любимого человека' },
	{ key: 'family', label: '👨‍👩‍👧‍👦 Для близких' },
	{ key: 'friends', label: '🎓 Для друзей и коллег' },
	{ key: 'hero', label: '🎖️ О герое или солдате' },
	{ key: 'child', label: '🍼 Про ребёнка' },
	{ key: 'holiday', label: '🎈 Праздник и поздравление' },
	{ key: 'self', label: '🙋‍♂️ Про себя / мотивация' },
	{ key: 'heartbreak', label: '💔 Трек для разбитого сердца' },
];

export default function FormFirst() {
	const navigate = useNavigate();

	const handleSelect = (topic: { key: string; label: string }) => {
		navigate(
			`/form/second?topic=${topic.key}&label=${encodeURIComponent(topic.label)}`
		);
	};

	return (
		<div className="max-w-xl mx-auto pt-8 pb-0">
			<h1 className="text-2xl font-bold mb-6">Выберите тему трека</h1>
			<div className="flex flex-col gap-3">
				{topics.map((topic) => (
					<button
						key={topic.key}
						className="w-full rounded-xl py-3 bg-[#232323] text-white text-lg hover:bg-[#333] border border-transparent hover:border-green-400 transition"
						onClick={() => handleSelect(topic)}
					>
						{topic.label}
					</button>
				))}
			</div>
		</div>
	);
}
