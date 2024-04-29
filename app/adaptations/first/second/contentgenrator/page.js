"use client"
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaBold, FaItalic, FaParagraph, FaImage, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';

export default function Home() {
  const [showLanguages, setShowLanguages] = useState(false);

  const handleLanguageSelect = (language) => {
    console.log("Selected language:", language);
    // Add your logic here for language selection
  };

  const handleLanguageClick = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <div className="bg-[#220836] min-h-screen flex flex-col  items-center">
    <div className='w-3/4 mt-14  bg-opacity-20 bg-black rounded-lg p-2'>
      <div className="w-full flex justify-between bg-purple-950 p-4">
        <div className="flex items-center">
          <h1 className="text-white font-bold mr-2">Generated Prompt</h1>
          <HiChevronDown className="text-white" />
        </div>
        <Link href="/adaptations/first/second/contentgenrator/storyboard">
        <button className="bg-[#6200EE] text-white px-4 hover:bg-purple-500 py-2 rounded-lg">Submit</button>
        </Link>
      </div>
      <div className="bg-opacity-20 w-full flex p-3 justify-start  ">
        <div className="bg-opacity-20  flex justify-between  ">
          <div className="flex space-x-4">
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaArrowLeft />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaArrowRight />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaBold />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaItalic />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaParagraph />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaAlignLeft />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaAlignCenter />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaAlignRight />
            </button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center">
              <FaImage />
            </button>
          </div>
        </div>
      </div>
      <div className='bg-black h-0.5 w-full'></div>
      <div className="bg-[#220836] bg-opacity-50 w-full pt-3">
        <p className="text-white">“Tell me an original story of 2 unique women friends and their sisterhood. One of them is 40 years traditionalist with family coming first, marriage sacrosanct and believes in duty before desire. The other one 25 years modern in thoughts, doesn’t believe in a marriage which is at the cost of dignity, she wants to build her own identity, pursue her career & be financially independent in online hand embroidered saree selling. Their paths cross and they benefit from each other despite being very different.
        “Tell me an original story of 2 unique women friends and their sisterhood. One of them is 40 years traditionalist with family coming first, marriage sacrosanct and believes in duty before desire. The other one 25 years modern in thoughts, doesn’t believe in a marriage which is at the cost of dignity, she wants to build her own identity, pursue her career & be financially independent in online hand embroidered saree selling. Their paths cross and they benefit from each other despite being very different.”
        “Tell me an original story of 2 unique women friends and their sisterhood. One of them is 40 years traditionalist with family coming first, marriage sacrosanct and believes in duty before desire. The other one 25 years modern in thoughts, doesn’t believe in a marriage which is at the cost of dignity, she wants to build her own identity, pursue her career & be financially independent in online hand embroidered saree selling. Their paths cross and they benefit from each other despite being very different.””</p>
      </div>
      </div>
    </div>
  );
}
