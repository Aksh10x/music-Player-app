import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongProvider = ({children}) => {


    const [name,setName] = useState("");

    const [audio,setAudio] = useState("");

    const [isPlaying,setIsPlaying] = useState(false);
    
    

    return (
        <SongContext.Provider value={{name, setName,audio,setAudio,isPlaying,setIsPlaying,}}>
            {children}
        </SongContext.Provider>
    );
};


