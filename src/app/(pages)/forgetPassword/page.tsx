"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { toast } from "sonner";

const Page = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const router = useRouter()

  async function handleSubmit() {
    const email = emailInput.current?.value;

    if (!email) {
      toast.error("Please enter your email", { position: "top-center" });
      return;
    }

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        { email }
      );

      toast.success(data.message, { position: "top-center" });
      router.push("/verifyResetCode")
      console.log(email);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Something went wrong", { position: "top-center" }
        );
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-envelope text-3xl text-green-600"></i>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Forgot Password?
        </h1>

        <p className="text-gray-500 text-center text-sm mb-8">
          Don't worry! Enter your email address and we'll send you a code to reset your password.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <Input
              type="email"
              placeholder="Enter your email"
              ref={emailInput}
              className="h-12"
            />
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            Send Reset Code
          </Button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Remember your password?{" "}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default Page;