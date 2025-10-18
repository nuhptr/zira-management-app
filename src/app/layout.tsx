import type { Metadata } from "next"
import { Inter_Tight } from "next/font/google"
import "./globals.css"

import { cn } from "@/lib/utils"

const interTight = Inter_Tight({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Zira | Manage your projects effortlessly",
  description:
    "Zira helps you organize and track your projects with ease. Collaborate, plan, and execute all in one place.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(interTight.className, "antialiased min-h-screen")}>{children}</body>
    </html>
  )
}
