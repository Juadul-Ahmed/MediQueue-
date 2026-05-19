"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `text-sm font-medium transition-colors duration-200 ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-slate-600 hover:text-blue-600"
    }`;
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
            >
              MediQueue
            </Link>
          </div>

          <div className="flex space-x-6 items-center">
            <Link href="/" className={linkStyle("/")}>
              Home
            </Link>
            <Link href="/tutors" className={linkStyle("/tutors")}>
              Tutors
            </Link>
            <Link href="/add-tutor" className={linkStyle("/add-tutor")}>
              Add Tutor
            </Link>
            <Link href="/my-tutors" className={linkStyle("/my-tutors")}>
              My Tutors
            </Link>
            <Link
              href="/my-booked-sessions"
              className={linkStyle("/my-booked-sessions")}
            >
              My Booked Sessions
            </Link>
          </div>

          <div className="flex gap-5 items-center">
            <Link 
              href="/login"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black  hover:bg-blue-700 hover:text-white shadow-sm transition"
            >
             Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
