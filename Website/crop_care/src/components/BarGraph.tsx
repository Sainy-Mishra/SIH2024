"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A bar chart with a label"
const chartData = [
  { month: "2014", desktop: 3.6 },
  { month: "2015", desktop: 3.7 },
  { month: "2017", desktop: 3.6 },
  { month: "2016", desktop: 3.9 },
  { month: "2018", desktop: 4.0 },
  { month: "2019", desktop: 4.1 },
  { month: "2020", desktop: 4.1 },
  { month: "2021", desktop: 4.2 },
  { month: "2022", desktop: 4.3 },
  { month: "2023", desktop: 4.3 },
]

const tomatoData = [
    { month: "2016", desktop: 3.9 },
    { month: "2018", desktop: 4.0 },
    { month: "2019", desktop: 4.1 },
    { month: "2020", desktop: 4.1 },
    { month: "2021", desktop: 4.2 },
    { month: "2022", desktop: 4.3 },
    { month: "2023", desktop: 4.3 },
]
const chartConfig = {
  desktop: {
    label: "Yield (T/Ha)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig
export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Label</CardTitle>
        <CardDescription>2014 - 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       
      </CardFooter>
    </Card>
  )
}
