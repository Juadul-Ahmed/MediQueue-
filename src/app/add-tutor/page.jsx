'use client';

import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react';
import toast from 'react-hot-toast';

export default function AddTutorPage() {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());

    console.log('Submitting Tutor Payload:', tutorData);
    toast.success('Tutor profile initialized successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-10">
        
      
        <div className="mb-8 border-b border-slate-100 pb-4">
          <h1 className="text-2xl font-bold text-slate-800">Add Tutor Profile</h1>
          <p className="text-sm text-slate-500 mt-1">Fill out the credentials below to register a brand new active study queue.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
         
            <div className="md:col-span-2">
              <TextField name="tutorName" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Tutor Name</Label>
                <Input placeholder="John Doe" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            
            <div className="md:col-span-2">
              <TextField name="photoUrl" type="url" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Photo URL</Label>
                <Input placeholder="post your image link" type="url" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            
            <div>
              <Select name="subject" isRequired className="w-full" placeholder="Select Subject">
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Subject / Category</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Mathematics" textValue="Mathematics">Linear Algebra</ListBox.Item>
                    <ListBox.Item id="Physics" textValue="Physics">Discrete Mathematics</ListBox.Item>
                    <ListBox.Item id="Software Engineering" textValue="Software Engineering">Digital Logic</ListBox.Item>
                    <ListBox.Item id="Chemistry" textValue="Chemistry">Object Oriented Programming</ListBox.Item>
                    <ListBox.Item id="Biology" textValue="Biology">Intro to C language</ListBox.Item>
                    <ListBox.Item id="Biology" textValue="Biology">Professional English</ListBox.Item>
                    <ListBox.Item id="Biology" textValue="Biology">Data Structure and ALgorithm</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            
            <div>
              <TextField name="availableTiming" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Available Days and Time</Label>
                <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            
            <div>
              <TextField name="hourlyFee" type="number" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Hourly Fee</Label>
                <Input placeholder="500" type="number" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

          
            <div>
              <TextField name="totalSlots" type="number" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Total Slot</Label>
                <Input placeholder="10" type="number" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

           
            <div>
              <TextField name="sessionStartDate" type="date" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Session Start Date</Label>
                <Input type="date" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            
            <div>
              <TextField name="institution" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Institution</Label>
                <Input placeholder="Sichuan University" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

            
            <div>
              <TextField name="location" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Location (Area/City)</Label>
                <Input placeholder="Chengdu" className="w-full" />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

           
            <div>
              <Select name="teachingMode" isRequired className="w-full" placeholder="Select Mode">
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Teaching Mode</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Online" textValue="Online">Online</ListBox.Item>
                    <ListBox.Item id="Offline" textValue="Offline">Offline</ListBox.Item>
                    <ListBox.Item id="Both" textValue="Both">Both</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

           
            <div className="md:col-span-2">
              <TextField name="experience" isRequired>
                <Label className="text-sm font-semibold text-slate-700 block mb-1">Experience</Label>
                <TextArea 
                  placeholder="3 years teaching experience..." 
                  className="w-full min-h-[100px]" 
                />
                <FieldError className="text-xs text-red-500 mt-1" />
              </TextField>
            </div>

          </div>

    
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
            >
              Add Tutor
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}