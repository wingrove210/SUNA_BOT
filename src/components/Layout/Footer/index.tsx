import glassSvg from "../../../assets/footerSvg/glass";
import homeSvg from "../../../assets/footerSvg/home";
import heartSvg from "../../../assets/footerSvg/heart";
import playlistSvg from "../../../assets/footerSvg/playlist";
export default function Footer() {
  return (
    <div className="w-full fixed bottom-0">
      <div className="flex justify-between w-full px-10 items-center bg-[#17212B] py-8 rounded-t-4xl text-white">
         <div className="w-5 h-auto">{homeSvg()}</div>
         <div className="w-5 h-auto">{glassSvg()}</div>
         <div className="w-5 h-auto">{heartSvg()}</div>
         <div className="w-5 h-auto">{playlistSvg()}</div>
      </div>
    </div>
  );
}
