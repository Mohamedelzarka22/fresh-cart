
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

const Register = () => {
  const route = useRouter()



  const form = useForm<registerSchemaType>({
    defaultValues: {

      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: ""
    },
    resolver: zodResolver(registerSchema)
  })

  console.log(form)

 async function signup(values: registerSchemaType) {
    try {
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values, {

      })

      toast.success(data.message,{position:"top-center"})
      route.push("/login")
    } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    toast.error(error.response?.data?.message || "Registration failed", {
      position: "top-center",
    });
  } else {
    toast.error("Something went wrong", {
      position: "top-center",
    });
  }
}
    console.log(values)

  }






return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">

    <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

      {/* Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <i className="fa-solid fa-user-plus text-3xl text-green-600"></i>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-sm">
          Join FreshCart and enjoy your shopping experience
        </p>
      </div>

      <form onSubmit={form.handleSubmit(signup)} className="space-y-4">

        {/* Name */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter your full name"
                className="h-12 rounded-xl focus-visible:ring-green-600"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="email"
                placeholder="example@email.com"
                className="h-12 rounded-xl focus-visible:ring-green-600"
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
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Create a password"
                className="h-12 rounded-xl focus-visible:ring-green-600"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="rePassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Confirm your password"
                className="h-12 rounded-xl focus-visible:ring-green-600"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="tel"
                placeholder="Enter your phone number"
                className="h-12 rounded-xl focus-visible:ring-green-600"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full h-12 mt-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-base transition-all"
        >
          {form.formState.isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>

      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 mt-7">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-green-600 font-semibold hover:underline"
        >
          Login
        </a>
      </p>

    </div>
  </div>
);
}

export default Register