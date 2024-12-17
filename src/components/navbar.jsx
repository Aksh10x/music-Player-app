import { useEffect, useState, useContext} from "react";
import { SongContext } from "../songcontext";

const Navbar = () => {

    const {name, setName} = useContext(SongContext)

    const [input,setInput] = useState("");

    const handleSearch = () => {
        setName(input);
        console.log(name);
    };

    return ( 
        <div className="flex w-full justify-between h-[10vh] items-center bg-green-500">
            <div className="w-[30%] ml-8 flex items-center font-extrabold text-2xl text-green-300">
                myClone
            </div>
            <div className="flex justify-center items-center gap-4 mr-[10%] w-full">
                <input onChange={e => setInput(e.target.value)} className="outline-none py-2 px-2 h-[40px] rounded-lg flex-grow border-[1px] border-green-700 "
                placeholder="Search your favourite song!">
                
                </input>
                <button onClick={handleSearch} className="font-semibold border-1 rounded-md px-3 shadow-green-900 shadow-md py-2 bg-green-800 text-white hover:translate-y-[-2px] hover:scale-105 transition-all hover:bg-green-900">Search</button>
            </div>
            
        </div>
     );
}
 
export default Navbar;