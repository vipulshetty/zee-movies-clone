import { HiArrowNarrowLeft, HiSearch, HiChevronDown } from 'react-icons/hi';
import FilmCard from '../components/Filmcard'; // Assuming the FilmCard component is in the same directory

export default function Home() {
  return (
    <div className="bg-[#220836] min-h-screen flex flex-col justify-center items-center">
      <div className="bg-[#170B21] w-4/5 h-[528px] flex flex-col justify-center items-center relative rounded-xl">
        <div className="absolute top-4 left-4 flex items-center">
          <HiArrowNarrowLeft className="text-white mr-2" />
          <h1 className="text-white text-2xl font-bold">Extract Show Insights</h1>
        </div>
        <div className="absolute top-4 right-4 flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#170B21] text-white px-4 py-2 rounded-l-lg border border-white focus:outline-none"
              style={{ paddingRight: "2.5rem" }}
            />
            <HiSearch className="text-white absolute right-2 top-1/2 transform -translate-y-1/2" />
          </div>
          <button className="bg-[#6200EE] text-white px-4 py-2 rounded-r-lg ml-2">Submit</button>
        </div>
        <div className="absolute top-20 w-full border-t border-gray-800"></div>
        <div className="absolute top-20 right-4 flex items-center mt-5 space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-white">Language</span>
            <HiChevronDown className="text-white" />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-white">Shows</span>
            <HiChevronDown className="text-white" />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-white">Genre</span>
            <HiChevronDown className="text-white" />
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
          <FilmCard 
            imageSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
            title="Show name"
            rating="7.2"
            releaseDate="2019"
          />
        </div>
      </div>
    </div>
  );
}
