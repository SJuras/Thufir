import Head from 'next/head';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import { MicrophoneIcon, ViewGridIcon, UserCircleIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import logo from '../images/ThufirLogo1.png';
import profilePic from '../images/profilePic.png';
import { useRef } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col item-center justify-center h-screen">
      <Head>
        <title>Thufir | Your Friendly Serch Engine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/* Avatar */}
          <UserCircleIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/*
            <Avatar
              url={profilePic}
             />
            */}
        </div>
      </header>
      {/* Body  */}
        <form className="flex flex-col items-center mt-44 flex-grow p-4">
          <Image
            src={logo}
            height={120}
            width={400}
            alt={'Thufir logo'}
          />
          <h2 className="text-lg tracking-wider text-gray-500 sm:text-2xl">Your friendly search engine</h2>
          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" placeholder="Enter a term or URL" />
            <MicrophoneIcon className="h-5" />
          </div>

          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
            <button onClick={search} className="btn">Thufir Search</button>
            <button onClick={search} className="btn">I'm feeling lucky</button>
          </div>
        </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
