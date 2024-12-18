import { useEffect, useState, useContext} from "react";
import { SongContext } from "../songcontext";
import { IoSearchOutline } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa";

const Navbar = () => {

    const {name, setName} = useContext(SongContext)

    const [input,setInput] = useState("");

    const handleSearch = () => {
        setName(input);
        console.log(name);
    };

    return ( 
        <div className="flex w-full justify-between h-[10vh] items-center">
            <div className="w-fit py-1 px-2 rounded-lg  mt-3 ml-8 flex items-center text-5xl text-center text-green-500">
              <div className="rounded-full"> <FaSpotify /> </div>
              <div className="text-2xl text-white font-semibold ml-2">Spoofify</div>
            </div>
            <div className="relative mt-2 flex w-fit justify-center items-center gap-4 mr-[30%] group">
                <input onChange={e => setInput(e.target.value)} className=" rounded-full outline-none hover:border-[0.3px] hover:border-gray-400 py-2 px-2 pl-14 h-[45px] flex-grow text-white hover:bg-opacity-20 focus:border-white focus:border-[1.7px] transition-colors bg-white bg-opacity-15 w-[400px]"
                placeholder="What do you want to play?">
                
                </input>
                <button onClick={handleSearch} className="absolute left-0 border-1 rounded-md group-hover:text-white group-focus-within:text-white px-3 py-2 transition-all text-3xl text-gray-400 font-bold">
                    <IoSearchOutline />
                </button>
            </div>
            
        </div>
     );
}
 
export default Navbar;