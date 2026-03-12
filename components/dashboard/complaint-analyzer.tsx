"use client"

import { useState } from "react"
import { Brain, Loader2, MessageSquare, Tag, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface AnalysisResult {
  sentiment: {
    label: string
    score: number
    color: string
  }
  category: string
  priority: {
    level: string
    color: string
  }
}

const mockAnalyze = async (text: string): Promise<AnalysisResult> => {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const lowerText = text.toLowerCase()

  let sentiment = { label: "Neutral", score: 50, color: "text-primary" }
  if (
    lowerText.includes("terrible") ||
    lowerText.includes("worst") ||
    lowerText.includes("angry") ||
    lowerText.includes("frustrated")
  ) {
    sentiment = { label: "Negative", score: 85, color: "text-chart-5" }
  } else if (
    lowerText.includes("good") ||
    lowerText.includes("thank") ||
    lowerText.includes("appreciate")
  ) {
    sentiment = { label: "Positive", score: 75, color: "text-chart-3" }
  }

  let category = "General Complaint"
  if (lowerText.includes("traffic") || lowerText.includes("road")) {
    category = "Traffic & Transportation"
  } else if (lowerText.includes("water") || lowerText.includes("supply")) {
    category = "Water Supply"
  } else if (lowerText.includes("garbage") || lowerText.includes("waste")) {
    category = "Sanitation"
  } else if (lowerText.includes("electric") || lowerText.includes("power")) {
    category = "Electricity"
  } else if (lowerText.includes("noise") || lowerText.includes("loud")) {
    category = "Noise Pollution"
  }

  let priority = { level: "Medium", color: "bg-chart-4" }
  if (
    lowerText.includes("urgent") ||
    lowerText.includes("emergency") ||
    lowerText.includes("dangerous")
  ) {
    priority = { level: "High", color: "bg-chart-5" }
  } else if (lowerText.includes("minor") || lowerText.includes("small")) {
    priority = { level: "Low", color: "bg-chart-3" }
  }

  return { sentiment, category, priority }
}

export function ComplaintAnalyzer() {
  const [complaint, setComplaint] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleAnalyze = async () => {
    if (!complaint.trim()) return

    setIsAnalyzing(true)
    setResult(null)

    try {
      const analysisResult = await mockAnalyze(complaint)
      setResult(analysisResult)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <Card className="border-border bg-card lg:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-semibold text-card-foreground">
          <Brain className="h-4 w-4 text-primary" />
          Complaint Analyzer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <Textarea
              placeholder="Paste a citizen complaint here for AI analysis..."
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              className="min-h-[140px] resize-none border-border bg-secondary/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !complaint.trim()}
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="mr-2 h-4 w-4" />
                  Analyze with AI
                </>
              )}
            </Button>
          </div>

          <div className="space-y-3">
            {result ? (
              <>
                <div className="rounded-lg border border-border bg-secondary/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      SENTIMENT
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-lg font-semibold ${result.sentiment.color}`}
                    >
                      {result.sentiment.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {result.sentiment.score}% confidence
                    </span>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-secondary/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      ISSUE CATEGORY
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-card-foreground">
                    {result.category}
                  </span>
                </div>

                <div className="rounded-lg border border-border bg-secondary/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">
                      PRIORITY LEVEL
                    </span>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary-foreground ${result.priority.color}`}
                  >
                    {result.priority.level}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-border p-8">
                <div className="text-center">
                  <Brain className="mx-auto mb-2 h-8 w-8 text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground">
                    Enter a complaint and click analyze to see AI insights
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
