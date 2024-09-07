import React, { useState } from 'react';
import { Camera, Search, DollarSign, LogIn, UserPlus } from 'lucide-react';

const LoginForm = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8"> {/* Increased padding */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-1">WorkEase</h1>
        <p className="text-xl text-gray-600">Find work or hire workers easily</p>
      </header>

      <main className="w-full max-w-lg">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6"> {/* Increased padding for a more spacious feel */}
          <div className="flex justify-center mb-6">
            <Camera size={40} className="text-blue-500" />
            <Search size={40} className="text-green-500 mx-4" />
            <DollarSign size={40} className="text-yellow-500" />
          </div>

          <form className="space-y-3"> {/* Slightly increased vertical spacing */}
            <input 
              type="text" 
              placeholder="Phone Number" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            {!isLoginPage && (
              <input 
                type="password" 
                placeholder="Confirm Password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            )}
            <button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-md flex items-center justify-center"
            >
              {isLoginPage ? (
                <>
                  <LogIn className="mr-2" />
                  Login / Sign Up
                </>
              ) : (
                <>
                  <UserPlus className="mr-2" />
                  Sign Up
                </>
              )}
            </button>
          </form>

          {/* Added border above "Need an account? Sign Up" */}
          <hr className="my-4 border-gray-300" />

          <button 
            type="button" 
            onClick={togglePage} 
            className="w-full mt-2 text-black hover:text-gray-700 text-center font-semibold"
          >
            {isLoginPage ? "Need an account? Sign Up" : "Already have an account? Login"}
          </button>
        </div>

        <div className="flex justify-between">
          <button 
            type="button" 
            className="flex-1 mr-2 bg-black hover:bg-gray-800 text-white py-2 rounded-md flex items-center justify-center"
          >
            <Search className="mr-2" />
            Find Work
          </button>
          <button 
            type="button" 
            className="flex-1 ml-2 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md flex items-center justify-center"
          >
            <DollarSign className="mr-2" />
            Post Job
          </button>
        </div>
      </main>

      <footer className="mt-6 text-center text-gray-600">
        <p>Need help? Call us at 1234-567-890</p>
      </footer>
    </div>
  );
};

export default LoginForm;
