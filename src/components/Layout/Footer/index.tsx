import glassSvg from "../../../assets/footerSvg/glass";
import homeSvg from "../../../assets/footerSvg/home";
import heartSvg from "../../../assets/footerSvg/heart";
import playlistSvg from "../../../assets/footerSvg/playlist";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="w-full fixed bottom-0">
      <div className="flex justify-between w-full px-10 items-center bg-[#17212B] py-10 rounded-t-4xl text-white z-50">
        <Link to="/" className="w-5 h-auto">
          {homeSvg()}
          </Link>
        <Link to="/" className="w-5 h-auto">
          {glassSvg()}
          </Link>
        <Link to="/" className="w-5 h-auto">
          {heartSvg()}
          </Link>
        <Link to="/chat" className="w-5 h-auto z-50">
          {playlistSvg()}
          </Link>
      </div>
    </div>
  );
}
