"use client"

import React from "react"
import { cn } from "../../lib/utils.jsx" // Changed to relative path

const DropdownMenuContext = React.createContext({
  open: false,
  setOpen: () => {},
})

export function DropdownMenu({ children }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handleClickOutside = () => setOpen(false)
    if (open) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [open])

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </DropdownMenuContext.Provider>
  )
}

export const DropdownMenuTrigger = React.forwardRef(({ className, children, onClick, ...props }, ref) => {
  const { open, setOpen } = React.useContext(DropdownMenuContext)

  const handleClick = (e) => {
    e.stopPropagation()
    setOpen(!open)
    onClick?.(e)
  }

  return (
    <button ref={ref} className={cn("outline-none", className)} onClick={handleClick} {...props}>
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

export function DropdownMenuContent({ children, align = "end" }) {
  const { open } = React.useContext(DropdownMenuContext)

  if (!open) return null

  return (
    <div
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "top-full mt-2",
        {
          "left-0": align === "start",
          "left-1/2 -translate-x-1/2": align === "center",
          "right-0": align === "end",
        },
      )}
    >
      {children}
    </div>
  )
}

export const DropdownMenuItem = React.forwardRef(({ className, children, onClick, ...props }, ref) => {
  const { setOpen } = React.useContext(DropdownMenuContext)

  const handleClick = (e) => {
    onClick?.(e)
    setOpen(false)
  }

  return (
    <button
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 w-full text-left",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuItem.displayName = "DropdownMenuItem"
