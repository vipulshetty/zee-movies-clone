import { HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';
import FilmCard from '@/app/components/Filmcard';

export default function Home() {
  return (
    <div className="bg-[#220836] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-white font-bold">Make Show Adaptations</h1>
      <div className="flex justify-center items-center mt-8 relative">
        <div className="bg-purple-900 text-white px-4 py-2 rounded-l-lg border w-56 h-12 border-black relative">
          Language Section
          <HiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#170B21] text-white px-4 py-2 rounded-none focus:outline-none w-96 h-12"
          style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
        />
        <button className="bg-[#6200EE] text-white px-4 py-2 h-12 rounded-r-lg">Search</button>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-8">
        <Link href="/adaptations/first/second">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        {/* Repeat the same pattern for other FilmCard components */}
      </div>
    </div>
  );
}
