"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'
import { toast } from 'sonner';

const page = () => {
  const resetCodeInput = useRef<HTMLInputElement>(null);
 const router = useRouter()

  async function handleSubmit() {
    const resetCode = resetCodeInput.current?.value;

    if (!resetCode) {
      toast.error("Please enter the reset code"  , {position:"top-center"});
      return;
    }

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        { resetCode }
      );

      toast.success(data.message  , {position:"top-center"});
      console.log(data);
      router.push("/resetPassword");

    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Invalid reset code"
        );
      }
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-shield-halved text-3xl text-green-600"></i>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Verify Reset Code
        </h1>

        <p className="text-gray-500 text-center text-sm mb-8">
          Enter the verification code sent to your email address.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reset Code
            </label>

            <Input
              type="text"
              placeholder="Enter your reset code"
              ref={resetCodeInput}
              className="h-12 text-center tracking-widest"
            />
          </div>

          <Button onClick={handleSubmit} className="w-full h-12 bg-green-600 hover:bg-green-700">
            Verify Code
          </Button>
        </div>

      </div>
    </div>
  );
}

export default page