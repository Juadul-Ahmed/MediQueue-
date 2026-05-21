'use client';
import React from 'react';

import { ClipLoader } from 'react-spinners'; 

export default function Spinner({ message = "Syncing data nodes..." }) {
  return (
    <div className="w-full min-h-[40vh] flex flex-col items-center justify-center p-6">
      
     
      <ClipLoader 
        color="#2563eb"     
        size={40}          
        speedMultiplier={0.85} 
      />
      
      {message && (
        <p className="mt-4 text-xs font-semibold text-slate-400 tracking-wide animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}