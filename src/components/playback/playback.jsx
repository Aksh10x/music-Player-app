import { useContext, useEffect, useState } from "react";
import { SongContext } from "../../songcontext";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";
import styles from "./stylepb.css"
import { useRef } from "react";


const Playback = () => {

    const audioPlayer = useRef(); 

    const progressBar = useRef();

    const animationRef = useRef();
 
    const {name, audio, isPlaying, setIsPlaying, songTitle, songCover, songArtist} = useContext(SongContext);

    const [duration, setDuration] = useState(0);

    const [currentTime, setCurrentTime] = useState(0);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if(isPlaying){
            audioPlayer.current?.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current?.pause();
            cancelAnimationFrame(animationRef.current);
        }
    },[isPlaying,audio])

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value/duration*100}%`);
        setCurrentTime(progressBar.current.value);
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const onLoadedMetadata = () => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    } 

    const calcTime = (secs) => {
        const mins = Math.floor(secs/60);
        const seconds =Math.floor(secs%60);
        const returnedSecs= seconds < 10 ? `0${seconds}` : seconds;
        return `${mins}:${returnedSecs}`;
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        progressBar.current.style.setProperty('--seek-before-width',`${progressBar.current.value/duration*100}%`);
        setCurrentTime(progressBar.current.value);
    }

    if(audio){
    return ( 
        <div className="sticky flex animate-playbackEntry shadow-xl shadow-black justify-center items-center bottom-0 w-full h-[10vh] rounded-t-xl border-t-2 border-t-green-800 border-opacity-20 bg-green-950 bg-opacity-50 backdrop-blur-lg">

            <div className="absolute left-4 flex text-white gap-2">
                <img src={songCover}  width={50} className="rounded-md"></img>
                <div className="">
                    <div className="font-semibold hover:underline w-fit text-sm">{songTitle}</div>
                    <div className="text-[10px] text-gray-400 ">{songArtist.join(", ")}</div>
                </div>


            </div>


            <div className="w-[500px] h-fit flex items-center justify-center">

                <audio ref={audioPlayer} onLoadedMetadata={onLoadedMetadata} src={audio} preload="metadata"></audio>

                <button onClick={handleClick} className="text-5xl hover:scale-105 mr-2 text-green-500 bg-white rounded-full">
                    {isPlaying ? <FaCirclePause/> : <FaCirclePlay/>}
                </button>
                    
                <div className="text-xs text-white mr-1">{calcTime(currentTime)}</div>

                <div className="relative flex">
                <input type="range" className="progressBar" defaultValue={0} ref={progressBar} onChange={changeRange}></input>
                </div>
                
                <div className="text-xs text-white ml-1">{audio ? calcTime(duration) : "0:00"}</div>

            </div>
        </div>
    );
    }
    else{
        return <></>;
    }
    
}
 
export default Playback;