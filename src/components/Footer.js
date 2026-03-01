import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-bold text-white tracking-tight">
          Swift<span className="text-blue-500">TouchHn</span>
        </div>
        <div>
          &copy; {new Date().getFullYear()} SwiftTouch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
