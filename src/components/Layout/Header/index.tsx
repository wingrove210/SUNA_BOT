export default function Header() {
  return (
    <div className="flex w-full justify-between px-10 py-4">
      <div className="text-white">Discover</div>
      <div className="w-10 h-10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="20"
          viewBox="0 0 24 14"
          fill="none"
        >
          <rect x="0" y="0" width="80" height="2" fill="#ffffff" rx="1" />
          <rect x="6" y="6" width="10" height="2" fill="#ffffff" rx="1" />
          <rect x="20" y="6" width="10" height="2" fill="#ffffff" rx="1" />
        </svg>
      </div>
    </div>
  );
}
