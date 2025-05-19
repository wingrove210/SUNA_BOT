export default function LeftMenuBar() {
  return (
    <div className="left-menu-bar">
      <div className="playlist">
        <div className="playlist-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
            <g
              fill="#FFF"
              fill-rule="evenodd"
              stroke="#10335C"
              stroke-width="3"
            >
              <rect width="21" height="21" x="7" y="7" rx="5" />
              <rect width="21" height="21" x="1" y="1" rx="5" />
            </g>
          </svg>
        </div>
        <div className="ur-playlist">Your playlist</div>
      </div>
      <div className="like-recent">
        <div className="ur-playlist recent">Recent</div>
        <div className="recent-detail"></div>
        <div className="ur-playlist like">Like</div>
      </div>
    </div>
  );
}
