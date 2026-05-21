import { DeleteModal } from "@/components/DeleteModal";
import { EditModal } from "@/components/EditModal";
import { Button, Table } from "@heroui/react";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const TutorsList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/all`);
  const tutor = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
    
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Tutor Management</h2>
        <p className="mt-1.5 text-sm text-slate-500">Manage all registered instructors, update active schedules, or configure session availability nodes.</p>
      </div>

     
      <div className="overflow-hidden  p-2 ">
        <Table  shadow="none" aria-label="Tutor control panel table">
          <Table.ScrollContainer>
            <Table.Content className="min-w-[850px]">
              <Table.Header>
                <Table.Column className="bg-slate-50/70 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600" isRowHeader>Tutor Name</Table.Column>
                <Table.Column className="bg-slate-50/70 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600">Subject</Table.Column>
                <Table.Column className="bg-slate-50/70 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600">Available</Table.Column>
                <Table.Column className="bg-slate-50/70 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600">Hourly Fee</Table.Column>
                <Table.Column className="bg-slate-50/70 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600">Total Slot</Table.Column>
                <Table.Column className="bg-slate-50/70 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600">Registration Date</Table.Column>
                <Table.Column className="bg-slate-50/70 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-600 text-center">Action</Table.Column>
              </Table.Header>
              <Table.Body>
                {tutor.map((t) => (
                  <Table.Row key={t._id} className="border-b border-slate-100 transition-colors hover:bg-slate-50/40 last:border-0">
                   
                    <Table.Cell className="py-4 font-semibold text-slate-900">{t.tutorName}</Table.Cell>
                    
                  
                    <Table.Cell className="py-4">
                      <span className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {t.subject}
                      </span>
                    </Table.Cell>
                    
              
                    <Table.Cell className="py-4 text-xs font-mono text-slate-500">{t.availableTiming || "Not Configured"}</Table.Cell>
                    
            
                    <Table.Cell className="py-4 font-bold text-slate-800">${t.hourlyFee}</Table.Cell>
                    
              
                    <Table.Cell className="py-4">
                      <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 border border-emerald-100">
                        {t.totalSlots} left
                      </span>
                    </Table.Cell>
                    
            
                    <Table.Cell className="py-4 text-xs text-slate-500">{t.sessionStartDate}</Table.Cell>
     
                    <Table.Cell className="py-4">
                      <div className="flex items-center justify-center gap-2">
            
                        
                        <DeleteModal t={t} />
      
                        
                        <EditModal t={t} />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default TutorsList;