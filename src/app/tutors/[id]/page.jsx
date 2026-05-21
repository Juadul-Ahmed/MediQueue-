import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaGlobe, FaUserShield, FaArrowLeft } from 'react-icons/fa';
import ConfirmSessionCard from '@/components/ConfirmSessionCard';


export const dynamic = 'force-dynamic';
export const revalidate = 0;

const TutorDetailPage = async ({ params }) => {
  const { id } = await params;

  if (!id || id === '[id]' || id === 'undefined') {
    return <div className="p-10 text-center text-slate-500">Loading data...</div>;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${id}`, {
    cache: 'no-store' 
  });
  
  const tutor = res.ok ? await res.json() : null;

  if (!tutor || !tutor.tutorName) {
    return (
      <div className="p-10 text-center">
        <p>Could not load profile data for ID: {id}</p>
        <Link href="/tutors" className="text-blue-600 underline">Return to Directory</Link>
      </div>
    );
  }
  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link 
            href="/tutors" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
          >
            <FaArrowLeft className="text-xs" /> Back to Tutors Index
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 bg-white border border-slate-200/70 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">
            
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-slate-100 border-4 border-slate-50 shrink-0 shadow-sm">
                {photoUrl && (
                  <Image
                    alt={tutorName || "Tutor Picture"}
                    src={photoUrl}
                    fill
                    sizes="(max-w-md) 100vw, 150px"
                    className="object-cover object-top"
                    priority={true}
                  />
                )}
              </div>

              <div className="space-y-3 pt-2">
                <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                  {subject}
                </span>
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  {tutorName}
                  <FaUserShield className="text-blue-500 text-lg md:text-xl shrink-0" title="Verified System Educator" />
                </h1>
                <p className="text-slate-600 font-medium flex items-center justify-center sm:justify-start gap-2 text-sm md:text-base">
                  <FaGraduationCap className="text-slate-400 text-lg" /> {institution}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600"><FaClock /></div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Available Timing</p>
                  <p className="text-xs md:text-sm font-semibold text-slate-700 mt-0.5">{availableTiming}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600"><FaMapMarkerAlt /></div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Campus Location</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">{location}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600"><FaGlobe /></div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Teaching Delivery Mode</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">{teachingMode}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600"><FaCalendarAlt /></div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Session Start Date</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">{sessionStartDate}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-100 pt-6">
              <h3 className="font-bold text-lg text-slate-900 tracking-tight">Professional Experience Credentials</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light whitespace-pre-line bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                {experience}
              </p>
            </div>

          </div>

          <ConfirmSessionCard tutor={tutor} />

        </div>

      </div>
    </div>
  );
};

export default TutorDetailPage;