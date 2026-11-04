"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'
import { toast } from 'sonner';

const page = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const router = useRouter()

  async function handleSubmit() {
  const email = emailInput.current?.value;
  const newPassword = passwordInput.current?.value;

  if (!email || !newPassword) {
    toast.error("Please enter your email and new password");
    return;
  }

  if (newPassword.length < 6) {
    toast.error("Password must be at least 6 characters");
    return;
  }

  try {
    const { data } = await axios.put(
      "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      {
        email,
        newPassword,
      }
    );

    toast.success(data.message || "Password reset successfully" , {position:"top-center"});

    router.push("/login");

  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message || "Something went wrong", {position:"top-center"}
      );
    }
  }
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Reset Password
        </h1>

        <p className="text-gray-500 text-center text-sm mb-8">
          Enter your email and your new password.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
              ref={emailInput}
              className="h-12"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              New Password
            </label>

            <Input
              type="password"
              placeholder="Enter your new password"
              ref={passwordInput}
              className="h-12"
            />
          </div>

          <Button  onClick={handleSubmit} className="w-full h-12 bg-green-600 hover:bg-green-700">
            Reset Password
          </Button>
        </div>

      </div>
    </div>
  );
}

export default page