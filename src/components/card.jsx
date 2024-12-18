import { useContext } from "react";
import { SongContext } from "../songcontext";
import playIcon from '../assets/play-button.png';

const Card = ({title, cover, artists, listen}) => {

    const {setAudio, isPlaying, setIsPlaying} = useContext(SongContext);
    const Artists = artists.map((artist) => artist.name );
    const handleClick = () => {
        setIsPlaying(true);
        setAudio(listen);
    }
    return ( 
        <div className="w-[15.25%] text-sm cursor-pointer bg-white bg-opacity-10 p-4 h-[45vh] gap-1 flex flex-col rounded-lg hover:scale-105 hover:bg-opacity-15 transition-all group">
            <div className="relative"> 
            <img className="rounded-lg" src={cover}/>
            <img onClick={handleClick} src={playIcon} alt="Play Icon" className="absolute bottom-0 right-0 w-[60px] h-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-playEntry"/>
            </div>
            <div className="font-bold hover:underline w-fit">{title}</div>
            <div className="text-xs text-gray-400 font-semibold">{Artists.join(", ")}</div>
            
            
            

        </div>
    );
}
 
export default Card;