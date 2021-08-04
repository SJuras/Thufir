import Image from 'next/image';
import logo from '../images/ThufirLogo1.png';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';
import { MicrophoneIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/solid';
import { UserCircleIcon } from '@heroicons/react/solid';
import { ViewGridIcon } from '@heroicons/react/solid';
import { CogIcon } from '@heroicons/react/solid';
import HeaderOptions from './HeaderOptions';

function Header(){

  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
  }

  return(
    <header className="sticky top-0 bg-white">
      <div className="flex flex-col sm:flex-row w-full py-6 px-1 sm:p-6 items-center">
        <Image
          src={logo}
          height={40}
          width={140}
          alt={'Thufir logo'}
          className="cursor-pointer"
          onClick={() => router.push('/')}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />
          <XIcon
            className="cursor-pointer h-7 sm:mr-3 text-gray-500 transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value= "")}
          />
          <MicrophoneIcon
            className="cursor-pointer h-6 mr-3 text-blue-500 border-l-2 pl-4 border-gray-300 hidden sm:inline-flex"
          />
          <SearchIcon
            className="cursor-pointer h-6 text-blue-500 hidden sm:inline-flex"
          />
          <button hidden type="submit" onClick={search}>Search</button>
        </form>
          <div className="ml-auto flex hidden sm:inline-flex">
            <CogIcon
              className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            />
            <ViewGridIcon
              className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            />
            <UserCircleIcon
              className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            />
          </div>
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
