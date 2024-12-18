import { useEffect, useState, useContext} from "react";
import { SongContext } from "../songcontext";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {

    const {name, setName} = useContext(SongContext)

    const [input,setInput] = useState("");

    const handleSearch = () => {
        setName(input);
        console.log(name);
    };

    return ( 
        <div className="flex w-full justify-between h-[10vh] items-center">
            <div className="w-[30%] ml-8 flex items-center font-extrabold text-2xl text-green-300">
                myClone
            </div>
            <div className="relative flex w-fit justify-center items-center gap-4 mr-[30%] group">
                <input onChange={e => setInput(e.target.value)} className=" rounded-full outline-none py-2 px-2 pl-14 h-[45px] flex-grow text-white hover:bg-opacity-30 focus:border-white focus:border-[1px] transition-colors bg-white bg-opacity-25 w-[400px]"
                placeholder="What do you want to play?">
                
                </input>
                <button onClick={handleSearch} className="absolute left-0 border-1 rounded-md group-hover:text-white px-3 py-2 transition-all text-3xl text-gray-400 font-bold">
                    <IoSearchOutline />
                </button>
            </div>
            
        </div>
     );
}
 
export default Navbar;