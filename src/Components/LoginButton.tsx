"use client"

import React from "react"
import { useFormStatus } from "react-dom"

export default function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button>
      {
        pending ? "Logging in..." : "Login"
      }
    </button>
  )
}