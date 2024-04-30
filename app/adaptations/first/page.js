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
            imageSrc="https://upload.wikimedia.org/wikipedia/en/5/5e/Sooryavanshi_film_poster.jpg?20211021083113"
            title="Surya vanshi"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/c/cc/K.G.F_Chapter_1_poster.jpg"
            title="KGF"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"
            title="RRR"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg"
            title="Kantara"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/e/ea/Brahmastra_Part_One_Shiva.jpg"
            title="Bramhastra"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg"
            title="GodzillaXkong"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
            title="Batman"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
            title="Avengers"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_%28franchise_logo%29.png"
            title="jurrasic park"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        <Link href="/adaptations/first/third">
          <FilmCard 
            imageSrc="https://upload.wikimedia.org/wikipedia/en/7/73/Fifty_Shades_of_Grey_poster.jpg"
            title="50 shades ofgray"
            rating="7.2"
            releaseDate="2019"
          />
        </Link>
        
      </div>
    </div>
  );
}
