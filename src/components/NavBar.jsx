"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tutors", label: "Tutors" },
    { href: "/add-tutor", label: "Add Tutor" },
    { href: "/my-tutors", label: "My Tutors" },
    { href: "/my-booked-sessions", label: "Booked Sessions" },
  ];

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
        
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
          >
            MediQueue
          </Link>

       
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkStyle(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>

       
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative">
             
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 transition"
                >
                  <Avatar className="h-10 w-10 border-2 border-blue-100">
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user.name}
                      src={user?.image}
                    />

                    <Avatar.Fallback className="bg-gradient-to-tr from-blue-500 to-indigo-600 font-bold text-white text-xs">
                      {user.name[0]}
                    </Avatar.Fallback>
                  </Avatar>

                  <ChevronDown size={18} className="text-slate-500" />
                </button>

        
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-semibold text-slate-800">
                        {user.name}
                      </p>

                      <p className="text-xs text-slate-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    <div className="flex flex-col p-2">
                    

                      <button
                        onClick={async () => {
                          await authClient.signOut();
                        }}
                        className="mt-2 px-3 py-2 text-sm text-left text-red-600 rounded-xl hover:bg-red-50 transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="inline-flex h-10 items-center justify-center px-4 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="inline-flex h-10 items-center justify-center px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

       
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

       
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkStyle(link.href)}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {user ? (
                <button
                  onClick={async () => {
                    await authClient.signOut();
                  }}
                  className="mt-4 h-10 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col gap-3 pt-4">
                  <Link
                    href="/login"
                    className="h-10 flex items-center justify-center text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/register"
                    className="h-10 flex items-center justify-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;