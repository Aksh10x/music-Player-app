import { useContext } from "react";
import { SongContext } from "../songcontext";

const Playback = () => {
 
    const {name, audio, isPlaying, setIsPlaying} = useContext(SongContext);

    return ( 
        <div className="sticky flex justify-center items-center bottom-0 w-full h-[10vh] rounded-t-md bg-green-950 bg-opacity-50 backdrop-blur-lg">

            <audio src={audio} controls></audio>
        </div>
    );
}
 
export default Playback;