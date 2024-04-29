import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#220836] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-white mb-4">Welcome Karan!</h1>
      <h2 className="text-white text-4xl font-bold mb-8">How can I assist today?</h2>
      <ul className="flex gap-12">
        <Link href="/generate" className="w-56 h-56 bg-[#170B21] flex justify-center items-center text-white text-center text-2xl hover:bg-purple-950 font-bold">
          <li>Generate new Content</li>
        </Link>
        <Link href="/adaptations" className="w-56 h-56 bg-[#170B21] flex justify-center items-center text-white text-center hover:bg-purple-950 text-2xl font-bold">
          Make show adaptations
        </Link>
        <Link href="/insights" className="w-56 h-56 bg-[#170B21] flex justify-center items-center text-white text-center hover:bg-purple-950 text-2xl font-bold">
          Extract show insights
        </Link>
      </ul>
    </div>
  );
}