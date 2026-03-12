"use client"

import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Live
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="/mylogo.png"
            alt="logo"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
          />
          <Input
            placeholder="Search complaints..."
            className="w-64 border-border bg-secondary/50 pl-9 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-chart-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
