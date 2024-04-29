"use client"
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Link from 'next/link'; // Import Link from next/link
import FilmCard from '@/app/components/Filmcard';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [showLanguages, setShowLanguages] = useState(false);


  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguages(false);
  };

  return (
    <div className="bg-[#220836] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-white font-bold">Make Show Adaptations</h1>
      <div className="flex justify-center items-center mt-8 relative">
        <div className="bg-purple-900 text-white px-4 py-2 rounded-l-lg border w-56 h-12 border-black relative flex items-center" onClick={() => setShowLanguages(!showLanguages)}>
          <span>{selectedLanguage}</span>
          <HiChevronDown className="ml-2 text-white" />
        </div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#170B21] text-white px-4 py-2 rounded-none focus:outline-none w-96 h-12"
            style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
          />
        <button className="bg-[#6200EE] text-white px-4 py-2 h-12 rounded-r-lg">Search</button>
      </div>
      {showLanguages && (
        <div className="absolute z-10 mt-1 bg-purple-950 rounded-lg overflow-hidden shadow-lg">
          <button onClick={() => handleLanguageSelect("Bengali")} className="block px-4 py-2 text-white w-full text-left hover:bg-purple-800">Bengali</button>
          <button onClick={() => handleLanguageSelect("English")} className="block px-4 py-2 text-white w-full text-left hover:bg-purple-800">English</button>
          <button onClick={() => handleLanguageSelect("Hindi")} className="block px-4 py-2 text-white w-full text-left hover:bg-purple-800">Hindi</button>
          <button onClick={() => handleLanguageSelect("Telugu")} className="block px-4 py-2 text-white w-full text-left hover:bg-purple-800">Telugu</button>
          <button onClick={() => handleLanguageSelect("Kannada")} className="block px-4 py-2 text-white w-full text-left hover:bg-purple-800">Kannada</button>
        </div>
      )}
      <div className="flex flex-row gap-11 pt-11">
       <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
      <div className="mt-8 bg-purple-950 flex flex-col justify-center items-center w-56 pb-5 rounded-lg pt-5">
        <div className="bg-purple-900 text-white px-4 py-2 rounded-lg border border-black mb-4 flex items-center" onClick={() => setShowLanguages(!showLanguages)}>
          <span>{selectedLanguage}</span>
          <HiChevronDown className="ml-2 text-white" />
        </div>
        <Link href="/adaptations/first/second/contentgenrator">
        <button className="bg-purple-900 text-white px-4 hover:bg-purple-500 py-2 rounded-lg border border-black">Submit</button>
        </Link>
      </div>
      </div>
    </div>
  );
}
