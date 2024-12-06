import {VideoCard} from "@/components/VideoCard"
import {VideoGrid} from "@/components/VideoGrid"
import { AppBar } from "@/components/appbar";
export default function Home() {
  return (
    <div>
      <AppBar/>
     <VideoGrid/>
    </div>
  );
}
