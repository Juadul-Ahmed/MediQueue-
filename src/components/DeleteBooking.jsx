"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";

export function DeleteBooking({bookingId}) {
  const handleCancel = async () =>{
    const {data:tokenData} =await authClient.token()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,{
      method: "DELETE",
      headers:{
        authorization: `Bearer ${tokenData?.token}`,
        'content-type': 'application/json'
      }
    })
    const data = await res.json()
    window.location.reload();
  }
  return (
    <AlertDialog>
      <Button
        type="button"
        className="w-full text-center font-bold text-xs h-10 rounded-xl bg-transparent text-rose-600 border border-rose-200/60 hover:bg-rose-50/50 hover:border-rose-300 active:scale-[0.99] transition duration-200 cursor-pointer"
      >
        Cancel Session
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
                This will permanently delete all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              
              <Button onClick={handleCancel} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
