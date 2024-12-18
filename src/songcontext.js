import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongProvider = ({children}) => {


    const [name,setName] = useState("");

    const [audio,setAudio] = useState("");

    const [isPlaying,setIsPlaying] = useState(false);

    const [songTitle, setSongTitle] = useState("");

    const [songCover, setSongCover] = useState("");

    const [songArtist, setSongArtist] = useState("");
    
    

    return (
        <SongContext.Provider value={{name, setName, audio, setAudio, isPlaying, setIsPlaying, songTitle, setSongTitle, songCover, setSongCover, songArtist, setSongArtist}}>
            {children}
        </SongContext.Provider>
    );
};


