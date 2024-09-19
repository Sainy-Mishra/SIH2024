"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { riceDataWave } from "@/data/data"
import { potatoDataWave, tomatoDataWave, maizeDataWave, wheatDataWave } from "@/data/data"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"



const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Production",
    color: "hsl(131, 100%, 50%)",
  },
  mobile: {
    label: "Demand",
    color: "hsl(220, 100%, 50%)",
  },
} satisfies ChartConfig

export default function Chart_1({crop}:any) {
  let chartData;
  if(crop == "Wheat"){
    chartData = wheatDataWave;
  } else if(crop == "Potato"){
    chartData = potatoDataWave;
  } else if(crop == "Tomato"){
    chartData = tomatoDataWave;
  } else if(crop == "Maize"){
    chartData = maizeDataWave;
  } else if(crop=="Rice"){
    chartData = riceDataWave;
  }

  return (
    <Card className="my-0">
      <CardHeader className="flex items-center gap-2 space-y-5 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:grid-cols-2">
          <CardTitle>Production & Demand of Crop</CardTitle>
          <CardDescription>
            Showing the Production and Demand Annual
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => new Date(value).getFullYear().toString()}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                labelFormatter={(value) => {
                  return new Date(value).getFullYear().toString()
                }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
