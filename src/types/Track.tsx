export default interface TrackType {
  id: number;
  name: string;
  artist: string;
  image?: string;
  active?: boolean;
  onClick?: () => void;
}