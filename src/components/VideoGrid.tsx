
import {VideoCard} from "@/components/VideoCard"

const VIDEOS= [{
    title: "this poor girl",
      ctmb: "/cp.jpg",
      author: "Gangsta Perspectives",
      views: "10k",
      time: "1 hour"
},
    {title: "Learn Coding in The Fastest Way Possible",
      ctmb: "/cp.jpg",
      author: "Coder Coder",
      views: "20k",
      time: "20 hours"
}, {title: "Make Money in The Fastest Way Possible",
    ctmb: "/cp.jpg",
    author: "Alex Hormozi",
    views: "200k",
    time: "2 days"
}, {
    title: "this poor girl",
      ctmb: "/cp.jpg",
      author: "Gangsta Perspectives",
      views: "10k",
      time: "1 hour"
},
    {title: "Learn Coding in The Fastest Way Possible",
      ctmb: "/cp.jpg",
      author: "Coder Coder",
      views: "20k",
      time: "20 hours"
}, {title: "Make Money in The Fastest Way Possible",
    ctmb: "/cp.jpg",
    author: "Alex Hormozi",
    views: "200k",
    time: "2 days"
}, {
    title: "this poor girl",
      ctmb: "/cp.jpg",
      author: "Gangsta Perspectives",
      views: "10k",
      time: "1 hour"
},
    {title: "Learn Coding in The Fastest Way Possible",
      ctmb: "/cp.jpg",
      author: "Coder Coder",
      views: "20k",
      time: "20 hours"
}, {title: "Make Money in The Fastest Way Possible",
    ctmb: "/cp.jpg",
    author: "Alex Hormozi",
    views: "200k",
    time: "2 days"
}]
export const VideoGrid=()=> {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        { VIDEOS.map(video=> <div>
            <VideoCard 
            title= {video.title}
            ctmb= {video.ctmb}
            author= {video.author}
            views= {video.views}
            time= {video.time}
            ></VideoCard>

        </div>)}
    </div>
}