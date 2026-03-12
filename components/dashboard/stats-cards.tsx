"use client"

import { MessageSquare, ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Complaints Today",
    value: "2,847",
    change: "+12.5%",
    changeType: "increase" as const,
    icon: MessageSquare,
    gradient: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    title: "Positive Sentiment",
    value: "34.2%",
    change: "+2.1%",
    changeType: "increase" as const,
    icon: ThumbsUp,
    gradient: "from-chart-3/20 to-chart-3/5",
    iconColor: "text-chart-3",
  },
  {
    title: "Negative Sentiment",
    value: "48.6%",
    change: "-3.4%",
    changeType: "decrease" as const,
    icon: ThumbsDown,
    gradient: "from-chart-5/20 to-chart-5/5",
    iconColor: "text-chart-5",
  },
  {
    title: "Active Civic Issues",
    value: "156",
    change: "+8",
    changeType: "increase" as const,
    icon: AlertTriangle,
    gradient: "from-chart-4/20 to-chart-4/5",
    iconColor: "text-chart-4",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="overflow-hidden border-border bg-card"
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-card-foreground">
                  {stat.value}
                </p>
                <p
                  className={`text-xs font-medium ${
                    stat.changeType === "increase"
                      ? "text-chart-3"
                      : "text-chart-5"
                  }`}
                >
                  {stat.change} from yesterday
                </p>
              </div>
              <div
                className={`rounded-lg bg-gradient-to-br ${stat.gradient} p-2.5`}
              >
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
