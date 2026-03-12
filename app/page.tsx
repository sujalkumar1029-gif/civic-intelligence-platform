import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { SentimentChart } from "@/components/dashboard/sentiment-chart"
import { ComplaintsChart } from "@/components/dashboard/complaints-chart"
import { IssuesChart } from "@/components/dashboard/issues-chart"
import { CityHeatmap } from "@/components/dashboard/city-heatmap"
import { AIInsights } from "@/components/dashboard/ai-insights"
import { ComplaintAnalyzer } from "@/components/dashboard/complaint-analyzer"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Stats Cards */}
            <StatsCards />

            {/* Charts Row */}
            <div className="grid gap-6 lg:grid-cols-3">
              <ComplaintsChart />
              <SentimentChart />
            </div>

            {/* Map and Issues Row */}
            <div className="grid gap-6 lg:grid-cols-3">
              <CityHeatmap />
              <IssuesChart />
            </div>

            {/* AI Section */}
            <div className="grid gap-6 lg:grid-cols-3">
              <ComplaintAnalyzer />
              <AIInsights />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
