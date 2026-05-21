'use client';
import React from 'react';

export default function FilterBar({ 
  search, setSearch, 
  startDate, setStartDate, 
  endDate, setEndDate, 
  handleReset 
}) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-10">
      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Search Tutor</label>
        <input 
          type="text"
          placeholder="Search tutor by name or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Start Date</label>
        <input 
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">End Date</label>
        <input 
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-700"
        />
      </div>

      <div>
        <button
          onClick={handleReset}
          className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-sm rounded-xl transition duration-200 border border-slate-200"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}