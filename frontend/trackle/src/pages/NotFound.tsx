import React from 'react';
import { Link } from '@tanstack/react-router';

const NotFound:React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-8 text-center">
      <h1 className="text-5xl font-bold text-yellow-600 mb-4">404 - Not Found</h1>
      <img
        src="https://i.pinimg.com/originals/1e/34/14/1e341474eaee74b7fca75f477e26a8c4.png"
        alt="Teary Pikachu"
        className="w-64 h-auto mb-6 drop-shadow-lg"
      />
      <p className="text-lg text-gray-700 mb-6">
       The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-[var(--color-background)] text-white rounded-lg shadow hover:bg-yellow-500 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
