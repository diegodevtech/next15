"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import React, { useState } from "react"

const navLinks = [
  { name: "Login", href: "/login"},
  { name: "Register", href: "/register"},
  { name: "Forgot Password", href: "/forgot-password"}
]

function AuthLayout({ children }:{ children: React.ReactNode }) {

  const pathname = usePathname();
  const [value, setValue] = useState("")
  return (
    <div>
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)}/>
      </div>
      {
        navLinks.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              className={isActive ? "font-bold mr-4" : "bg-blue-500 mr-4"}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          )
        })
      }
      {children}
    </div>
  )
}

export default AuthLayout