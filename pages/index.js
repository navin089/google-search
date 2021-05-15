import { IconButton, Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) =>{
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    return router.push(`/search?term=${term}`);


  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google_logo.png" />
      </Head>

      {/* Header */}
      <header className="flex justify-between w-full p-3 text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">
            Store
          </p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">
            Gmail
          </p>
          <p className="link">
            Image
          </p>
          <IconButton>
            <AppsIcon />
          </IconButton>

          <Avatar
            className="cursor-pointer hover:opacity-70 transition duration-150 transform hover:scale-110 animate-spin"
            src="https://static.toiimg.com/thumb/msid-77780056,imgsize-177347,width-800,height-600,resizemode-75/77780056.jpg"
          />
        </div>
      </header>

      {/* Body */}
        <form className="flex flex-col items-center my-7 flex-grow ">
          <Image 
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            height={90}
            width={270}
          />
          <div className="flex items-center w-full mt-5 hover:shadow-lg focus-within:shadow-lg
          max-w-md rounded-full border border-grey-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
            <SearchIcon 
              style={{height: 20, marginLeft: 1,marginRight:10, color: 'grey'}}
              className="ml-3 h-5" />

              <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none mr-10"/>

              <MicIcon 
                style={{height: 20, color: '#4285F4'}}
              />
          </div>

          <div className="flex flex-col space-y-2 w-1/2 justify-center mt-8 
          sm:space-y-0 sm:flex-row sm:space-x-4">
            <button type="submit" onClick={search} className="btn">Google Search</button>
            <button onClick={search} className="btn">I'm Feeling Lucky</button>
          </div>

          <div className="flex space-x-2 w-full mt-7 text-sm text-center max-w-mg p-2">
            <p>Google offered in: </p>
            <p className="lang">हिन्दी</p>
            <p className="lang">বাংলা</p>
            <p className="lang">తెలుగు</p>
            <p className="lang">मराठी</p>
            <p className="lang">தமிழ்</p>
            <p className="lang">ગુજરાતી</p>
            <p className="lang">ಕನ್ನಡ</p>
            <p className="lang">മലയാളം</p>
          </div>
        </form>

      {/* Footer */}
      <Footer />
      
    </div>
  )
}
