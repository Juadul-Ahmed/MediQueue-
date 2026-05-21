"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";

export function DeleteModal({t}) {
  const handleDelete = async () =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${t._id}`,{
      method: 'DELETE',
      headers:{
        'content-type':'application/json'
      }
    })
    const data = res.json()
    redirect('/my-tutors')
   
    
  }
  return (
    <AlertDialog>
      <Button
        isIconOnly
        size="sm"
        variant="light"
        className="text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors rounded-lg"
        title="Delete"
      >
        <BiTrash size={18} />
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete  permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{t.tutorName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
