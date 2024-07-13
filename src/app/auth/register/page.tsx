"use client"

import { newUser } from "../../../../actions/RegisterUser"
import { useState } from "react"
import { useRouter } from "next/navigation"
import RegisterButton from "@/Components/RegisterButton"

export default function Register() {

  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState<string>();
  const [successMsg, setSuccessMsg] = useState<string>();

  const handleForm = async (formData: FormData) => {
    setErrorMsg("");
    setSuccessMsg("")
    try {
      const result = await newUser(formData);
      console.log(result)

      if (result === "This E-mail already exists") {
        setErrorMsg(result);
      } else {
        setSuccessMsg("User created successfully!");
        router.push('/auth/sign-in');
      }

    } catch (err: any) {
      console.log(err)
    }
  }

  return (<>
    <main className="flex min-h-screen items-center justify-center">
      <form className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md" action={handleForm}>
        <div className="m-3 text-center font-semibold text-2xl p-2">
          <h1>Registration Form</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="Name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" placeholder="Thala" name="Name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="Email" id="Email" placeholder="hello@example.com" required />
        </div>
        <div className="mb-4">
          <label htmlFor="Password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="Password" id="Password" required />
        </div>
        <div className="text-red-700 mb-4">
          {errorMsg}
        </div>
        <div className="text-green-500 mb-4">
          {successMsg}
        </div>
        <div className="w-full text-center text-xl bg-black text-white p-3 rounded-2xl">
          <RegisterButton />
        </div>
      </form>
    </main>
  </>)
}


