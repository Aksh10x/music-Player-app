import { useContext, useEffect, useState } from "react";
import { SongContext } from "../songcontext";
import Card from "../components/card";

const HomePage = () => {

    const {name, audio} = useContext(SongContext);

    const [songs,setSongs] = useState(null);

    const FetchTracks = async () => {
        const res = await fetch(`https://v1.nocodeapi.com/aksh10x/spotify/XfcPehrZWYlKRxpo/search?q=${name}&type=track`);
        const data = await res.json();
        setSongs(data?.tracks?.items);
    };


    useEffect(() => {
        FetchTracks();
    },[name])

    if(!songs){
        return (
            <div className="font-extralight text-3xl w-full bg-black py-6 text-white min-h-[90vh] flex flex-col justify-center items-center p-4">
                Search Up!
            </div>
        );
    }


    return ( 
        <div className="w-full bg-black py-6 text-white min-h-[90vh] flex flex-col justify-center items-center p-4">
            
            <div className="flex flex-wrap gap-5 justify-start items-center">
            {songs?.map((song) => (
                <Card title={song.name} cover={song.album.images[0].url} artists={song.artists} listen={song.preview_url}/>
            ))}
            </div>
            
        </div>
     );
}
 
export default HomePage;