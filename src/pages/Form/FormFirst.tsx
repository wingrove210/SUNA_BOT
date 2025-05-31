import { useState } from 'react';
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
	const [selected, setSelected] = useState<{ key: string; label: string } | null>(
		null
	);

	const handleSelect = (topic: { key: string; label: string }) => {
		setSelected(topic);
	};

	const handleCreate = () => {
		if (selected) {
			navigate(
				`/form/second?topic=${selected.key}&label=${encodeURIComponent(
					selected.label
				)}`
			);
		}
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
						className={`w-full h-12 flex items-center justify-center rounded-3xl bg-[#14141E] text-white text-sm border-[1px] transition
                            ${selected?.key === topic.key
								? 'border-green-400'
								: 'border-gray-500 hover:border-green-400 hover:bg-[#333]'}
                        `}
						onClick={() => handleSelect(topic)}
						type="button"
					>
						{topic.label}
					</button>
				))}
				{lastButton && (
					<button
						key={lastButton.key}
						className={`col-span-2 w-full h-12 flex items-center justify-center rounded-3xl bg-[#14141E] text-white text-sm border-[1px] transition
                            ${selected?.key === lastButton.key
								? 'border-green-400'
								: 'border-gray-500 hover:border-green-400 hover:bg-[#333]'}
                        `}
						onClick={() => handleSelect(lastButton)}
						type="button"
					>
						{lastButton.label}
					</button>
				)}
			</div>
			<button
				className={`mt-4 w-full h-12 rounded-3xl text-white text-lg font-semibold transition
                    ${selected
						? 'bg-green-500 hover:bg-green-600'
						: 'bg-gray-400 cursor-not-allowed'}
                `}
				onClick={handleCreate}
				disabled={!selected}
				type="button"
			>
				Создать
			</button>
		</div>
	);
}
