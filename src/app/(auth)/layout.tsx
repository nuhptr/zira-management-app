"use client"

import Image from "next/image"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="bg-neutral-100 min-h-screen min-w-screen">
      <div className="mx-auto w-full p-4">
        <nav className="flex items-center justify-center mt-4">
          <Image src="/logo.svg" alt="Logo" width={152} height={56} priority />
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-10 tracking-wide">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
