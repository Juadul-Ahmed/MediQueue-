import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";
import { Button, Card, Chip } from "@heroui/react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { DeleteBooking } from "@/components/DeleteBooking";

const MyBookedSessions = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return (
      <div className="text-center py-10 text-rose-500 font-semibold">
        Failed to load booked sessions.
      </div>
    );
  }

  const data = await res.json();
  console.log(data);

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-3xl max-w-2xl mx-auto my-8 p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-1">
          No Booked Sessions
        </h3>
        <p className="text-slate-500 text-sm">
          You haven't reserved any learning sessions yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          My Booked Sessions
        </h1>
        <p className="text-slate-500 text-sm mt-0.5">
          Manage and track your active reservations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((booking) => (
          <Card
            key={booking._id}
            className="border border-slate-100 shadow-sm rounded-3xl bg-white overflow-hidden"
          >
            <div className="p-6 space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
                  Session Receipt
                </span>
                <Chip
                  size="sm"
                  variant="flat"
                  color="success"
                  className="font-bold uppercase text-[10px] px-2.5 bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full"
                >
                  {booking.status || "Confirmed"}
                </Chip>
              </div>

              <hr className="border-slate-100" />

              <div className="space-y-3.5 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <FaChalkboardTeacher className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Tutor Name
                    </span>
                    <span className="text-slate-900 font-bold text-sm mt-0.5">
                      {booking.tutorName || "N/A"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
                    <FaUserGraduate className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Student Name
                    </span>
                    <span className="text-slate-800 font-semibold mt-0.5">
                      {booking.userName || user?.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div className="flex flex-col max-w-[80%]">
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Email Address
                    </span>
                    <span className="text-slate-700 font-medium mt-0.5 break-all">
                      {user?.email || booking.userEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
                    <FaCalendarAlt className="text-sm" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                      Schedule Date
                    </span>
                    <span className="text-slate-700 font-medium mt-0.5">
                      {booking.sessionStartDate
                        ? new Date(booking.sessionStartDate).toLocaleDateString(
                            undefined,
                            { dateStyle: "medium" },
                          )
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              <DeleteBooking bookingId={booking._id} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyBookedSessions;
