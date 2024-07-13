"use server"

import { revalidatePath } from "next/cache";
import prisma from "../utils/db"
import bcrypt from 'bcryptjs'

export async function newUser(formData: FormData) {
  try {
    const name = formData.get("Name") as string;
    const email = formData.get("Email") as string;
    const password = formData.get("Password") as string;

    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      })

      if (existingUser) {
        return ("This E-mail already exists")
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          hashedPassword: hashedPassword
        }
      })

    } catch (err: any) {
      return null
    }
  } catch (err: any) {
    console.log(err)
  }
}
