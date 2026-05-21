'use client'; 
import React, { useState, useEffect } from 'react';
import FilterBar from '@/components/FilterBar';
import TutorCard from '@/components/TutorCard';

import Spinner from '@/components/Spinner';

const TutorPage = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredTutors = async () => {

      setLoading(true);
      
      const queryParams = new URLSearchParams({
        search,
        startDate,
        endDate
      }).toString();

      try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/all?${queryParams}`);
        const res = await fetch(`https://medi-queue-server-six.vercel.app/tutor/all?${queryParams}`);
        const data = await res.json();
        setTutors(data);
      } catch (error) {
        console.error("Error retrieving matching tutor datasets:", error);
      } finally {
     
        setLoading(false);
      }
    };

    fetchFilteredTutors();
  }, [search, startDate, endDate]);

  const handleReset = () => {
    setSearch('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
 
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">Top Rated Tutors</h1>
          <p className="text-sm text-slate-500 mt-2">Browse our handpicked subject-matter experts ready to guide your learning journey.</p>
        </div>


        <div className="mb-10">
          <FilterBar 
            search={search} 
            setSearch={setSearch}
            startDate={startDate} 
            setStartDate={setStartDate}
            endDate={endDate} 
            setEndDate={setEndDate}
            handleReset={handleReset}
          />
        </div>

        {loading ? (
   
          <Spinner message="Filtering available tutor database registries..." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {tutors.length > 0 ? (
              tutors.map((tutor) => (
                <TutorCard key={tutor._id} tutor={tutor} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-white rounded-3xl border border-slate-200/60 text-slate-400 font-medium shadow-sm">
                No matching tutors found. Try adjusting your filter parameters.
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default TutorPage;