import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaDollarSign,
  FaArrowRight,
} from "react-icons/fa";

const TutorCard = ({ tutor }) => {
  const {
    tutorName,
    photoUrl,
    subject,
    hourlyFee,
    sessionStartDate,
    institution,
    _id
  } = tutor;

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
        <Image
          alt={tutorName}
          src={photoUrl}
          fill
          sizes="(max-w-7xl) 33vw, 100vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />

        <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white font-semibold py-1.5 px-3 rounded-xl text-xs flex items-center gap-0.5 shadow-sm">
          <FaDollarSign className="text-emerald-400 scale-90" />
          <span>{hourlyFee} / hr</span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
            {subject}
          </span>

          <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-snug pt-1">
            {tutorName}
          </h3>
        </div>

        <div className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-3">
          <p className="flex items-center gap-2.5">
            <FaGraduationCap className="text-slate-400 shrink-0 text-base" />
            <span className="text-slate-500 font-medium">{institution}</span>
          </p>
          <p className="flex items-center gap-2.5">
            <FaCalendarAlt className="text-slate-400 shrink-0 text-sm" />
            <span className="text-xs text-slate-500">
              Starts:{" "}
              <strong className="text-slate-700 font-semibold">
                {sessionStartDate}
              </strong>
            </span>
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={`/tutors/${_id}`}
          className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl shadow-sm transition-colors duration-200 text-sm"
        >
          <span>Book Session</span>
          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
