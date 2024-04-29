import { HiChevronDown } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="bg-[#220836] min-h-screen flex flex-col justify-center items-center">
      <div className="bg-[#170B21] w-4/5 h-[528px] flex flex-col justify-center items-center relative rounded-xl">
        <div className="absolute top-4 left-4">
          <h1 className="text-white text-2xl font-bold">← Generate New Content</h1>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-56 h-11 bg-inherit border-2 border-purple-800 rounded-xl flex justify-center items-center text-gray-200">
            Create your own content
          </div>
        </div>
        <div className="absolute top-20 w-full border-t border-gray-800"></div>
        <div className="flex flex-col justify-center items-center mt-20">
          <div className="flex gap-9">
            <div className="w-64 h-14 bg-purple-900 rounded-xl flex justify-center items-center relative">
              Select Language
              <HiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
            <div className="w-64 h-14 bg-purple-900 rounded-xl flex justify-center items-center relative">
              Select Genre
              <HiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
            <div className="w-64 h-14 bg-purple-900 rounded-xl flex justify-center items-center relative">
              Select Age Group
              <HiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
          </div>
          <div className="mt-14 pt-5">
            <div className="text-gray-400 font-semibold pb-2">Add Your Story Line</div>
            <input
              type="text"
              placeholder="Write your story here"
              className="bg-gray-700 bg-opacity-20 w-[776px] h-[144px] text-white"
            />
          </div>
          <div className="mt-14">
            <button className="bg-purple-900 w-40 rounded-xl py-2 px-6 text-gray-300 font-semibold">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
