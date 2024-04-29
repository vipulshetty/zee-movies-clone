"use client"
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
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
                        <h1 className="text-white font-bold mr-2">Story Board</h1>
                        <HiChevronDown className="text-white" />
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-[#6200EE] text-white px-4 py-2 rounded-lg">Extract Again</button>
                        <button class="button"><span class="button-content">Download </span></button>
                    </div>
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
                    <p className="text-white">In the quaint town of Serendipity, nestled between lush green hills and surrounded by serene lakes, lived two extraordinary women, Naina and Riya. <span className='text-yellow-400'>Naina, a graceful 40-year-old, embodied the values of tradition, family, and duty. She was deeply rooted in her culture and had an unshakable belief in the sanctity of marriage. As a loving wife and doting mother of two, she devoted herself to her family, always putting their needs before her own desires.</span> 

                        On the other hand,<span className='text-yellow-400'> Riya, a spirited 25-year-old, was a modern thinker with aspirations that reached beyond the conventional norms. She envisioned a life of independence, carving her identity in the world of art and creativity. Riya had a profound love for hand-embroidered sarees and dreamt of turning her passion into a thriving online business.</span>

                        Serendipity had a way of bringing people together; one fateful afternoon; Naina and Riya crossed paths during a cultural fair. Riya’s exquisite hand-embroidered sarees caught Naina’s attention; she was drawn to the young woman’s vibrant energy and determination. They struck up a conversation; despite their differences; beautiful connection was formed.

                        As Naina learned about Riya’s dreams; she couldn’t help but be inspired by her friend’s unyielding spirit. The idea of building business being financially independent was foreign to Naina but she admired Riya’s tenacity fire that burned within her. Riyu saw in Naina deep sense stability love devotion to family seldom encountered fast-paced world."


                    </p>
                </div>
                <input
                    type="text"
                    placeholder="Update the Story..."
                    className="bg-[#170B21] text-white px-4 py-2 mt-3 rounded-none focus:outline-none w-full h-12"
                    style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
                />
            </div>
        </div>
    );
}
