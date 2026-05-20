"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  console.log(user);

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

          <>
            {user ? (
              <div className="flex items-center gap-6">
               
                <div className="flex items-center gap-3">

                
                  <Avatar className="h-9 w-9 border-2 border-blue-100 ring-offset-2 transition-transform hover:scale-105">
                    <Avatar.Image
                    referrerPolicy="no-referrer"
                      alt={user.name}
                      src={
                        user?.image }
                    />
                    <Avatar.Fallback className="bg-gradient-to-tr from-blue-500 to-indigo-600 font-bold text-white text-xs">
                      {user.name[0]}
                    </Avatar.Fallback>
                  </Avatar>
                  <span className="hidden sm:inline-block text-sm font-semibold text-slate-700">
                    {user.name}
                  </span>
                </div>

                <button
                  onClick={async () => {
                    await authClient.signOut();
                  }}
                 className="inline-flex h-10 items-center justify-center px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm shadow-blue-500/10 transition active:scale-98"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
            
                <Link
                  href="/login"
                  className="inline-flex h-10 items-center justify-center px-4 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition active:scale-98"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="inline-flex h-10 items-center justify-center px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm shadow-blue-500/10 transition active:scale-98"
                >
                  Register
                </Link>
              </div>
            )}
          </>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
