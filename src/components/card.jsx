import { useContext } from "react";
import { SongContext } from "../songcontext";

const Card = ({title, cover, artists, listen}) => {

    const {setAudio, isPlaying, setIsPlaying} = useContext(SongContext);
    const Artists = artists.map((artist) => artist.name );
    const handleClick = () => {
        setIsPlaying(true);
        setAudio(listen);
    }
    return ( 
        <div onClick={handleClick} className="w-[15%] text-sm cursor-pointer bg-white bg-opacity-10 p-4 h-[45vh] gap-1 flex flex-col rounded-lg hover:scale-105 hover:bg-opacity-15 transition-all">
            <img className="rounded-lg" src={cover}/>
            <div className="font-bold">{title}</div>
            <div className="text-xs">{Artists.join(", ")}</div>
            
            

        </div>
    );
}
 
export default Card;