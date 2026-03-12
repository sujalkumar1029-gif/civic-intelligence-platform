"use client"

import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const insights = [
  {
    icon: TrendingUp,
    title: "Traffic Surge Detected",
    description:
      "Traffic complaints increased by 45% in MG Road area over the past 48 hours. Peak complaints occur between 8-10 AM.",
    type: "alert" as const,
  },
  {
    icon: AlertCircle,
    title: "Water Supply Crisis",
    description:
      "Whitefield sector shows recurring water supply issues. 78% of complaints mention irregular timing.",
    type: "warning" as const,
  },
  {
    icon: Lightbulb,
    title: "Policy Recommendation",
    description:
      "Based on sentiment analysis, implementing traffic signal optimization could reduce complaints by 30%.",
    type: "suggestion" as const,
  },
]

const typeStyles = {
  alert: "border-l-chart-5 bg-chart-5/5",
  warning: "border-l-chart-4 bg-chart-4/5",
  suggestion: "border-l-chart-3 bg-chart-3/5",
}

const iconStyles = {
  alert: "text-chart-5",
  warning: "text-chart-4",
  suggestion: "text-chart-3",
}

export function AIInsights() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-semibold text-card-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          AI-Generated Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`rounded-lg border-l-4 p-3 ${typeStyles[insight.type]}`}
          >
            <div className="flex items-start gap-3">
              <insight.icon
                className={`mt-0.5 h-4 w-4 shrink-0 ${iconStyles[insight.type]}`}
              />
              <div className="space-y-1">
                <p className="text-sm font-medium text-card-foreground">
                  {insight.title}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {insight.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
