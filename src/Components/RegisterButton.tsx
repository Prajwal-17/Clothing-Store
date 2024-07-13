"use client"

import React from "react"
import { useFormStatus } from "react-dom"

export default function RegisterButton() {
  const { pending } = useFormStatus();
  return (
    <button>
      {
        pending ? "Registering..." : "Register"
      }
    </button>
  )
}