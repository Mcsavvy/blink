"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Home, Wallet, CreditCard, Gift, Settings, LogOut, Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileBottomBar } from "@/components/mobile-bottom-bar"
import { mockUser } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/wallet", label: "Wallet", icon: Wallet },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/gifts", label: "Gifts", icon: Gift },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow border-r border-border bg-card">
          <div className="flex items-center gap-2 px-6 py-6 border-b border-border">
            <Image src="/blink.png" alt="Blink" width={40} height={40} />
            <span className="text-2xl font-bold">Blink</span>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:pl-64">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-10 flex h-22 items-center gap-4 border-b border-border bg-card px-4 md:px-6">
          <Image src="/blink.png" alt="Blink" width={40} height={40} className="md:hidden" />
          <div className="flex-1" />

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src={mockUser.avatar || "/placeholder.svg"} alt={mockUser.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {mockUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{mockUser.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{mockUser.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-6 pb-20 md:pb-6">{children}</main>
      </div>

      {/* Mobile Bottom Bar */}
      <MobileBottomBar />
    </div>
  )
}
