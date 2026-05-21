'use client';
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full text-center bg-white border border-slate-200/70 p-8 rounded-3xl shadow-sm">
        
      
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50 text-red-600 mb-6 animate-bounce">
          <span className="text-2xl font-black">404</span>
        </div>

     
        <h1 className="text-2xl font-extrabold text-slate-950 tracking-tight">Resource Not Found</h1>
        <p className="text-sm text-slate-500 mt-2.5 leading-relaxed font-light">
          The routing path or data node you are attempting to look for doesn't exist or has been shifted permanently.
        </p>

   
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm shadow-blue-500/10 transition active:scale-98"
          >
            Return Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/60 transition active:scale-98"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
}