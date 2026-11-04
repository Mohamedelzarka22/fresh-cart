
"use client"

import axios from "axios";
import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { registerSchema, registerSchemaType } from "@/schema/registerSchema"
import { useRouter } from "next/navigation";
import { loginSchema, loginSchemaType } from "@/schema/loginSchema";
import { signIn } from "next-auth/react";
import Link from "next/link";


const Login = () => {
  const route = useRouter()



  const form = useForm<loginSchemaType>({
    defaultValues: {


      email: "",
      password: "",

    },
    resolver: zodResolver(loginSchema)
  })

  console.log(form)

async function signin(values: loginSchemaType) {
    // try {
    //   const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values, {

    //   })

    //   toast.success(data.message,{position:"top-center"})
    //   route.push("/")
    // } catch (error) {
    //   toast.error(error.response?.data?.message,{position:"top-center"})
    // }

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/"
    })

    if (res?.ok === true) {
      toast.success("login success", { position: "top-center" })

      window.location.href = res?.url || "/"
    } else {
      toast.error(res?.error, { position: "top-center" })

    }
    console.log(values)

  }







 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <i className="fa-solid fa-user text-3xl text-green-600"></i>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back!
        </h1>

        <p className="text-gray-500 text-sm">
          Sign in to continue shopping with FreshCart
        </p>
      </div>

      <form onSubmit={form.handleSubmit(signin)} className="space-y-5">

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-gray-700 font-medium">
                Email Address
              </FieldLabel>

              <Input
                type="email"
                placeholder="example@email.com"
                className="h-12 rounded-xl focus-visible:ring-green-600"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name} className="text-gray-700 font-medium">
                Password
              </FieldLabel>

              <Input
                type="password"
                placeholder="Enter your password"
                className="h-12 rounded-xl focus-visible:ring-green-600"
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            href="/forgetPassword"
            className="text-sm font-semibold text-green-600 hover:text-green-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-base transition-all"
        >
          {form.formState.isSubmitting ? "Logging in..." : "Login"}
        </Button>

      </form>

      {/* Footer */}
      <div className="mt-7 text-center text-sm text-gray-500">
        Welcome to{" "}
        <span className="font-bold text-green-600">FreshCart</span>
      </div>

    </div>
  </div>
);
}

export default Login