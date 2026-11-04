import axios from "axios";

export async function forgotPassword(email: string) {
  const { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    {
      email,
    }
  );

  return data;
}