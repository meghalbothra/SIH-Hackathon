import React, { useState } from 'react';
import { Mic, Map, Briefcase, DollarSign } from 'lucide-react';

const PostGig = () => {
  const [isSkilled, setIsSkilled] = useState(true);
  const [isRecording, setIsRecording] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Post a Gig</h1>
        <p className="text-xl">Find the perfect worker for your job</p>
      </header>

      <main className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
  <div className="flex justify-center mb-6">
    <button
      className={`mr-2 px-4 py-2 rounded-md ${isSkilled ? 'bg-yellow-500 text-white' : 'bg-black text-white'}`}
      onClick={() => setIsSkilled(true)}
    >
      <Briefcase className="inline-block mr-2" />
      Skilled Job
    </button>
    <button
      className={`ml-2 px-4 py-2 rounded-md ${!isSkilled ? 'bg-yellow-500 text-white' : 'bg-black text-white'}`}
      onClick={() => setIsSkilled(false)}
    >
      <DollarSign className="inline-block mr-2" />
      Unskilled Job
    </button>
  </div>



        <form className="space-y-4">
          {!isSkilled && (
            <div className="bg-gray-100 p-4 rounded-md">
              <button
                type="button"
                onClick={toggleRecording}
                className={`w-full px-4 py-2 rounded-md mb-4 ${isRecording ? 'bg-red-500 text-white' : 'bg-black text-white'}`}
              >
                <Mic className="inline-block mr-2" />
                {isRecording ? "Stop Recording" : "Start Voice Recording"}
              </button>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                rows="4"
                placeholder="Simple job description (optional)"
              ></textarea>
            </div>
          )}

          {isSkilled && (
            <>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Job Title"
              />
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black">
                <option value="">Select Job Type</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Reward/Pay"
              />
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Required Skills (comma-separated)"
              />
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                rows="4"
                placeholder="Job Specifications"
              ></textarea>
            </>
          )}

          <div className="flex items-center">
            <Map className="mr-2 text-black" />
            <span>Pin Job Location</span>
          </div>
          <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center">
            Map Placeholder
          </div>

          <button type="submit" className="w-full px-4 py-2 rounded-md bg-black hover:bg-gray-800 text-white">
            Post Gig
          </button>
        </form>
      </main>
    </div>
  );
};

export default PostGig;
