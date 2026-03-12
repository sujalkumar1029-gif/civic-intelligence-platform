"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const hotspots = [
  { id: 1, name: "MG Road", x: 45, y: 30, intensity: "high", complaints: 156 },
  { id: 2, name: "Koramangala", x: 60, y: 55, intensity: "high", complaints: 134 },
  { id: 3, name: "Indiranagar", x: 70, y: 35, intensity: "medium", complaints: 89 },
  { id: 4, name: "Whitefield", x: 85, y: 45, intensity: "medium", complaints: 78 },
  { id: 5, name: "Jayanagar", x: 40, y: 65, intensity: "low", complaints: 45 },
  { id: 6, name: "HSR Layout", x: 55, y: 75, intensity: "medium", complaints: 67 },
  { id: 7, name: "Electronic City", x: 50, y: 90, intensity: "low", complaints: 34 },
  { id: 8, name: "Marathahalli", x: 75, y: 50, intensity: "high", complaints: 112 },
]

const intensityColors = {
  high: "bg-chart-5/80",
  medium: "bg-chart-4/70",
  low: "bg-chart-3/60",
}

const intensityRingColors = {
  high: "border-chart-5/40",
  medium: "border-chart-4/30",
  low: "border-chart-3/30",
}

export function CityHeatmap() {
  return (
    <Card className="border-border bg-card lg:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">
          Complaint Hotspots Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-72 w-full overflow-hidden rounded-lg border border-border bg-secondary/30">
          {/* Grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--border) 1px, transparent 1px),
                linear-gradient(to bottom, var(--border) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* City outline - simplified polygon */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M 20 20 L 80 15 L 90 50 L 85 85 L 50 95 L 15 80 L 10 40 Z"
              fill="none"
              stroke="var(--border)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          </svg>

          {/* Hotspot markers */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="group absolute"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Outer ring animation */}
              <div
                className={`absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border-2 ${
                  intensityRingColors[spot.intensity]
                }`}
                style={{ left: "50%", top: "50%", animationDuration: "2s" }}
              />
              {/* Inner dot */}
              <div
                className={`relative h-4 w-4 cursor-pointer rounded-full ${
                  intensityColors[spot.intensity]
                } shadow-lg transition-transform hover:scale-150`}
              />
              {/* Tooltip */}
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-popover px-3 py-1.5 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                <p className="font-semibold">{spot.name}</p>
                <p className="text-muted-foreground">
                  {spot.complaints} complaints
                </p>
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-3 right-3 flex items-center gap-4 rounded-lg bg-card/80 px-3 py-2 backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-chart-5/80" />
              <span className="text-xs text-muted-foreground">High</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-chart-4/70" />
              <span className="text-xs text-muted-foreground">Medium</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-chart-3/60" />
              <span className="text-xs text-muted-foreground">Low</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
