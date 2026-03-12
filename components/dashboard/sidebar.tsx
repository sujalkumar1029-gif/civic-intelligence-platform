"use client"

import { useState } from "react"
import {
  LayoutDashboard,
  MessageSquareWarning,
  TrendingUp,
  MapPin,
  Lightbulb,
  Database,
  Settings,
  ChevronLeft,
  ChevronRight,
  Brain,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: MessageSquareWarning, label: "Citizen Complaints" },
  { icon: TrendingUp, label: "Sentiment Analysis" },
  { icon: MapPin, label: "Issue Hotspots" },
  { icon: Lightbulb, label: "Policy Recommendations" },
  { icon: Database, label: "Data Sources" },
  { icon: Settings, label: "Settings" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
          <Brain className="h-5 w-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-sidebar-foreground">
              Civic Intelligence
            </span>
            <span className="text-xs text-muted-foreground">Platform</span>
          </div>
        )}
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              item.active
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex w-full items-center justify-center rounded-lg bg-sidebar-accent p-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent/80"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>
    </aside>
  )
}
