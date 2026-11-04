
"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken(): Promise<string | undefined> {
  const x = (await cookies()).get("next-auth.session-token")?.value;

  if (!x) return undefined;

  const token = await decode({
    token: x,
    secret: process.env.AUTH_SECRET!,
  });

  console.log(token);

  if (typeof token?.token === "string") {
    return token.token;
  }

  return undefined;
}
