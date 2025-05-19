import TrackBlock from "../TrackBlock";
export default function MusicList() {
  return (
    <div className="w-full">
       <TrackBlock id={1} name="hello" artist="world"/>
        <TrackBlock id={2} name="hello" artist="world"/>
    </div>
  );
}
