import * as z from "zod"
export const loginSchema = z.object({
   
    email: z.email("invalid email"),
    password: z.string().min(6, "must be at least charts").max(20, "max length 20"),
   
})
export type loginSchemaType =z.infer<typeof loginSchema>