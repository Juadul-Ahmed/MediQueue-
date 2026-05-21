import React from 'react';
import Link from 'next/link';
import { FaStar, FaBookOpen } from 'react-icons/fa';

export function TopCoursesSection({ tutors }) {

  const topCourses = tutors.slice(0, 3);

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
            Academic Excellence
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Popular Learning Fields</h2>
          <p className="text-sm text-slate-500 mt-2">Explore highly requested subjects taught by accredited academic mentors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topCourses.map((course) => (
            <div key={course._id} className="group border border-slate-200/70 rounded-3xl p-5 hover:shadow-md transition bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-sm group-hover:scale-110 transition duration-200">
                    <FaBookOpen className="text-lg" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2 py-1 rounded-lg">
                    <FaStar /> 4.9
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">{course.subject}</h3>
                <p className="text-xs text-slate-400 mt-1">Instructor Node: {course.tutorName}</p>
                <p className="text-slate-500 text-xs mt-3 line-clamp-2 font-light">{course.experience}</p>
              </div>

              <div className="border-t border-slate-200/60 pt-4 mt-5 flex justify-between items-center">
                <span className="text-sm font-black text-slate-900">${course.hourlyFee}<span className="text-xs text-slate-400 font-normal">/hr</span></span>
                <Link href={`/tutors/${course._id}`} className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition flex items-center gap-1">
                  View Syllabus →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}