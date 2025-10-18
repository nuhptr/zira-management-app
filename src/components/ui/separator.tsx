"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  isDotted?: boolean
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  isDotted = false,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        isDotted ? "border border-dotted border-border" : "bg-border",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
