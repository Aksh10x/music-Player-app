import { useContext } from "react";
import { SongContext } from "../songcontext";

const Playback = () => {
 
    const {name, audio, isPlaying, setIsPlaying} = useContext(SongContext);
    
    if(isPlaying) {
    return ( 
        <div className="sticky flex animate-playbackEntry shadow-xl shadow-black justify-center items-center bottom-0 w-full h-[10vh] rounded-t-xl border-t-2 border-t-green-800 border-opacity-20 bg-green-950 bg-opacity-50 backdrop-blur-lg">

            <audio src={audio} controls></audio>
        </div>
    );
    }
    else{
        return <></>;
    }
}
 
export default Playback;