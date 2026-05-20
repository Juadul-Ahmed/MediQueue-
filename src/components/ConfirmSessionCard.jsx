'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle, FaLayerGroup } from 'react-icons/fa';

const ConfirmSessionCard = ({tutor}) => {
  const{totalSlots,hourlyFee,_id,subject,sessionStartDate,tutorName} = tutor
    const { data: session } = authClient.useSession();
    const user = session?.user;


    const handleBooking = async () =>{
      const bookingData = {
     
       userId:user?.id,
       userImage:user?.image,
       userName: user?.name,
       tutorId: _id,
        subject,
        hourlyFee,
        tutorName,
        sessionStartDate,     
      }
     const res = await fetch('http://localhost:5000/booking',{
      method: "POST",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(bookingData)
     })
     const data = await res.json()
      toast.success("Session Added")
      window.location.reload();
    }

  
  return (
     <div className="lg:col-span-4 bg-white border border-slate-200/70 rounded-3xl p-6 shadow-sm sticky top-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Reservation Module</h3>
              <div className="flex items-baseline gap-1 text-slate-900">
                <span className="text-3xl font-black">${hourlyFee}</span>
                <span className="text-sm text-slate-500 font-medium">/ per active study hour</span>
              </div>
            </div>

       
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-slate-500 flex items-center gap-1.5"><FaLayerGroup /> Remaining Capacity Slots:</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${totalSlots > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                  {totalSlots} left
                </span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${totalSlots > 10 ? 'bg-blue-600' : 'bg-amber-500'}`}
                  style={{ width: `${Math.min((totalSlots / 150) * 100, 100)}%` }}
                />
              </div>
            </div>

       
            <div className="space-y-2.5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2 text-slate-600"><FaCheckCircle className="text-emerald-500 shrink-0" /> Immediate voucher generation token issued</div>
              <div className="flex items-center gap-2 text-slate-600"><FaCheckCircle className="text-emerald-500 shrink-0" /> Dynamic double-booking safety guard tracking</div>
              <div className="flex items-center gap-2 text-slate-600"><FaCheckCircle className="text-emerald-500 shrink-0" /> 100% verified academic background check</div>
            </div>

         
            <Button 
              onClick={handleBooking}
              type="button"
              disabled={totalSlots <= 0}
              className={`w-full font-bold  rounded-xl text-center shadow-md transition transform active:scale-98 block text-sm ${
                totalSlots > 0 
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/10' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              }`}
            >
              {totalSlots > 0 ? 'Confirm Booking Session' : 'Queue Full / Closed'}
            </Button>
          </div>
  );
};

export default ConfirmSessionCard;