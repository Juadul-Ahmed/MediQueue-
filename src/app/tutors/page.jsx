import TutorCard from '@/components/TutorCard';
import React from 'react';

const TutorPage = async () => {
  const res = await fetch('http://localhost:5000/tutor')
  const tutors = await res.json()
  
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">Top Rated Tutors</h1>
          <p className="text-sm text-slate-500 mt-2">Browse our handpicked subject-matter experts ready to guide your learning journey.</p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default TutorPage;