"use client";

import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // The rebranded X logo icon

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              MediQueue
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Simplifying student-instructor synchronization. Browse verified
              experts, secure real-time openings, and receive immediate
              verification tokens.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Learning Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tutors"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Mathematics & Logic
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Physics & Natural Sciences
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/tutors"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Languages & Linguistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Email: juadulahmed9@gmail.com</li>
              <li>Phone: +8617713836074</li>
              <li>Support Availability: Mon - Fri, 9AM - 6PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Follow Our Channels
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition duration-200"
                aria-label="Follow us on X"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="#"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition duration-200"
                aria-label="Follow us on GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="#"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="#"
                rel="noreferrer"
                className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition duration-200"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} MediQueue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
