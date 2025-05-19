import glassSvg from "../../../assets/footerSvg/glass";
import homeSvg from "../../../assets/footerSvg/home";
import heartSvg from "../../../assets/footerSvg/heart";
import playlistSvg from "../../../assets/footerSvg/playlist";
export default function Footer() {
  return (
    <div className="w-full fixed bottom-0 text-white">
      <div className="flex w-full gap-5 justify-between px-8 py-5 items-center">
         <div className="w-5 h-auto">{homeSvg()}</div>
         <div className="w-5 h-auto">{glassSvg()}</div>
         <div className="w-5 h-auto">{heartSvg()}</div>
         <div className="w-5 h-auto">{playlistSvg()}</div>
      </div>
    </div>
  );
}
