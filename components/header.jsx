"use client"

import { MapPin, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu.jsx"
import { Button } from "./ui/button.jsx"

export function Header({ user, onLogin, onLogout }) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between 2xl:max-w-[92%] 2xl:mx-0 2xl:px-8">
        <div className="flex items-center gap-2">
          <MapPin className="w-7 h-7 text-cyan-500 flex-shrink-0" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 whitespace-nowrap">Localists</h1>
            <p className="text-xs text-gray-500 leading-none whitespace-nowrap">Find Local Professionals Fast</p>
          </div>
        </div>

       <div className="flex items-center gap-6">
          {user ? (
            <>
              <div className="hidden md:flex items-center gap-6">
                <button className="text-gray-700 hover:text-gray-900 font-medium">
                  My requests
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium">{user.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>My Requests</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile User Menu */}
              <div className="md:hidden flex font-poppins items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm">
                    <span >Our Services</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem>Web Design</DropdownMenuItem>
                    <DropdownMenuItem>Mobile Apps</DropdownMenuItem>
                    <DropdownMenuItem>Digital Marketing</DropdownMenuItem>
                    <DropdownMenuItem>Consulting</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button variant="ghost" onClick={onLogin} className="font-medium text-sm">
                  Login
                </Button>
              </div>
            </>
          ) : (
            <div className="md:hidden font-poppins flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm">
                  <span>Our Services</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Web Design</DropdownMenuItem>
                  <DropdownMenuItem>Mobile Apps</DropdownMenuItem>
                  <DropdownMenuItem>Digital Marketing</DropdownMenuItem>
                  <DropdownMenuItem>Consulting</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" onClick={onLogin} className="font-medium text-sm">
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
