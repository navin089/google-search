import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar } from "@material-ui/core";
import HeaderOptions from "./HeaderOptions";



function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) =>{
        e.preventDefault();
        const term = searchInputRef.current.value;
    
        if(!term) return;
    
        return router.push(`/search?term=${term}`);
    
      };

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image 
                src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
                height={30}
                width={100}
                onClick={() => router.push('/')}
                className="cursor-pointer"
            />
            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg
            max-w-3xl items-center">
                <input 
                  ref={searchInputRef} 
                  className="flex-grow w-full focus:outline-none" 
                  type="text" 
                />
                <ClearIcon 
                  className="cursor-pointer invisible sm:visible sm:mr-3 text-gray-500 transition duration-100
                  transform hover:scale-125"
                  onClick={() => searchInputRef.current.value=""}
                  disabled={!searchInputRef}
                />
           
                <MicIcon 
                  className="mr-3 invisible sm:visible text-blue-500 cursor-pointer"
                />
                <SearchIcon 
                  className="ml-1 invisible sm:visible text-blue-500 cursor-pointer"
                />
               
                <button hidden type="submit" onClick={search}>Search</button>
            </form>
             <Avatar
                className="cursor-pointer ml-auto hover:opacity-70 transition duration-150 transform hover:scale-110 animate-spin"
                src="https://static.toiimg.com/thumb/msid-77780056,imgsize-177347,width-800,height-600,resizemode-75/77780056.jpg"
             />
            </div>
            {/* Header Options */}
            <HeaderOptions />
        </header>
    )
}

export default Header;
