"use client";

import {
  Button,
  FieldError,
  Input,
  Select,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

export function EditModal({ t }) {
  const {
    tutorName,
    photoUrl,
    subject,
    hourlyFee,
    sessionStartDate,
    institution,
    availableTiming,
    totalSlots,
    location,
    teachingMode,
    experience,
    _id
  } = t;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const tutorData = Object.fromEntries(formData.entries());
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${_id}`,{
      method: 'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(tutorData)
    })
    const data = await res.json()
    toast.success("Tutor profile Edited successfully!");
    console.log(data);
    
  };
  return (
    <Modal>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        className="text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors rounded-lg"
        title="Edit"
      >
        <BiEdit size={18} />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={tutorName}
                        name="tutorName"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Tutor Name
                        </Label>
                        <Input placeholder="John Doe" className="w-full" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={photoUrl}
                        name="photoUrl"
                        type="url"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Photo URL
                        </Label>
                        <Input
                          placeholder="post your image link"
                          type="url"
                          className="w-full"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div>
                      <Select
                        defaultValue={subject}
                        name="subject"
                        isRequired
                        className="w-full"
                        placeholder="Select Subject"
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Subject / Category
                        </Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item
                              id="Linear Algebra"
                              textValue="Linear Algebra"
                            >
                              Linear Algebra
                            </ListBox.Item>
                            <ListBox.Item
                              id="Discrete Mathematics"
                              textValue="Discrete Mathematics"
                            >
                              Discrete Mathematics
                            </ListBox.Item>
                            <ListBox.Item
                              id="Digital Logic"
                              textValue="Digital Logic"
                            >
                              Digital Logic
                            </ListBox.Item>
                            <ListBox.Item
                              id="Object Oriented Programming"
                              textValue="Object Oriented Programming"
                            >
                              Object Oriented Programming
                            </ListBox.Item>
                            <ListBox.Item
                              id="Intro to C language"
                              textValue="Intro to C language"
                            >
                              Intro to C language
                            </ListBox.Item>
                            <ListBox.Item
                              id="Professional English"
                              textValue="Professional English"
                            >
                              Professional English
                            </ListBox.Item>
                            <ListBox.Item
                              id="Data Structure and ALgorithm"
                              textValue="Data Structure and ALgorithm"
                            >
                              Data Structure and ALgorithm
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <div>
                      <TextField
                        defaultValue={availableTiming}
                        name="availableTiming"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Available Days and Time
                        </Label>
                        <Input
                          placeholder="Sun - Thu 5:00 PM - 8:00 PM"
                          className="w-full"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div>
                      <TextField
                        defaultValue={hourlyFee}
                        name="hourlyFee"
                        type="number"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Hourly Fee
                        </Label>
                        <Input
                          placeholder="500"
                          type="number"
                          className="w-full"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div>
                      <TextField
                        defaultValue={totalSlots}
                        name="totalSlots"
                        type="number"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Total Slot
                        </Label>
                        <Input
                          placeholder="10"
                          type="number"
                          className="w-full"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div>
                      <TextField
                        defaultValue={sessionStartDate}
                        name="sessionStartDate"
                        type="date"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Session Start Date
                        </Label>
                        <Input type="date" className="w-full" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div>
                      <TextField
                        defaultValue={institution}
                        name="institution"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Institution
                        </Label>
                        <Input
                          placeholder="Sichuan University"
                          className="w-full"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div>
                      <TextField
                        defaultValue={location}
                        name="location"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Location (Area/City)
                        </Label>
                        <Input placeholder="Chengdu" className="w-full" />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>

                    <div>
                      <Select
                        defaultValue={teachingMode}
                        name="teachingMode"
                        isRequired
                        className="w-full"
                        placeholder="Select Mode"
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Teaching Mode
                        </Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Online" textValue="Online">
                              Online
                            </ListBox.Item>
                            <ListBox.Item id="Offline" textValue="Offline">
                              Offline
                            </ListBox.Item>
                            <ListBox.Item id="Both" textValue="Both">
                              Both
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={experience}
                        name="experience"
                        isRequired
                      >
                        <Label className="text-sm font-semibold text-slate-700 block mb-1">
                          Experience
                        </Label>
                        <TextArea
                          placeholder="3 years teaching experience..."
                          className="w-full min-h-[100px]"
                        />
                        <FieldError className="text-xs text-red-500 mt-1" />
                      </TextField>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">Save Changes</Button>
                    </Modal.Footer>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
