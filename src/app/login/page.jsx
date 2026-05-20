"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const credentials = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: credentials.email,
      password: credentials.password,
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error("Wrong Credentials");
    }
  };
const handleGoogle = async ()=>{
     await authClient.signIn.social({
        provider: "google",
        callbackURL: "/"
      });
    }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50/50 px-4 py-12">
      <Card className="w-full max-w-md border border-slate-200/60 bg-white p-6 shadow-xl shadow-slate-100/70">
        <div className="space-y-1 mb-6">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Login to your account
          </h2>
          <p className="text-sm text-slate-500">
            Enter your credentials below to login into your profile.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Email Address
            </Label>
            <Input placeholder="john@example.com" className="w-full" />
            <FieldError className="text-xs font-medium text-rose-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Password
            </Label>
            <Input placeholder="••••••••" type="password" className="w-full" />
            <Description className="text-[11px] font-normal text-slate-400 mt-1.5 block leading-normal">
              Must be at least 8 characters with 1 uppercase and 1 number.
            </Description>
            <FieldError className="text-xs font-medium text-rose-500 mt-1" />
          </TextField>

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 font-bold text-white text-sm py-2 px-4 h-11 rounded-xl transition shadow-md shadow-blue-500/10 active:scale-98"
            >
              Sign in
            </Button>
          </div>
        </Form>
        <Separator />
        <div className="whitespace-nowrap text-center">Or Sign in with</div>
        <Separator />
         <div>
                  <Button
                    onClick={handleGoogle}
                    variant="outline"
                    className=" hover:bg-base-500 hover:text-black w-full flex-1 font-bold text-black text-sm py-2 px-4 h-11 rounded-xl transition shadow-md shadow-blue-500/10 active:scale-98"
                  >
                    {" "}
                    <FcGoogle />
                    Sign in with Google
                  </Button>
                </div>
      </Card>
    </div>
  );
};

export default LoginPage;
