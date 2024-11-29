export function VideoCard(props: any){
   return <div>
        <img className="rounded-xl"src="/sddefault.jpg" alt="" />
        <div className="font-black text-2xl pt-4">
           {props.title}
        </div>
        <div className="grid grid-cols-12 pt-2">
        <div className="cols-span-1">
            <img className= {"rounded-full w-12 h-12"}
            src={props.ctmb} alt="" />
        </div>
        <div className="col-span-11 pl-2 text-base">
            
            <div className="col-span-11 text-lg text-gray-600">
            {props.author}
        </div>
        <div className="col-span-11 text-gray-600 text-base">
            {props.views} Views | {props.time} ago
        </div>
            
        </div>
        
        </div>
        
    </div>
}
