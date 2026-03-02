import React from 'react';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          {/* Left side - Company info */}
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold text-white tracking-tight">
              Swift<span className="text-blue-500">TouchHn</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 whitespace-nowrap">
              <MapPin size={14} className="text-blue-500 flex-shrink-0" />
              <span className="text-xs">San Pedro Sula, Honduras</span>
            </div>
          </div>
          
          {/* Right side - Copyright */}
          <p className="text-gray-400 text-xs mt-2 sm:mt-0">&copy; {new Date().getFullYear()} SwiftTouch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
