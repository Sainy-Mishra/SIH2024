"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import { tomatoDataPie, potatoDataPie, maizeDataPie, riceDataPie, wheatDataPie } from "@/data/data"

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

export const description = "A pie chart with a label"

// const chartData = [
//   { browser: "Nitrogen", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "Phosphorus", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "Potassium", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ]

const chartData = [
  { browser: "Nitrogen", visitors: 150, fill: "var(--color-chrome)" },
  { browser: "Phosphorus", visitors: 60, fill: "var(--color-safari)" },
  { browser: "Potassium", visitors: 60, fill: "var(--color-firefox)" },
  { browser: "Sulfur", visitors: 40, fill: "var(--color-edge)" },
  { browser: "Zinc", visitors: 10, fill: "var(--color-other)" },
  { browser: "Iron", visitors: 10, fill: "var(--color-other)" },
  { browser: "Manganese", visitors: 2, fill: "var(--color-other)" },
  { browser: "Copper", visitors: 1.5, fill: "var(--color-other)" },
  { browser: "Boron", visitors: 1, fill: "var(--color-other)" },
  { browser: "Molybdenum", visitors: 0.2, fill: "var(--color-other)" },
];


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function Component({crop}:any) {
  let chartData;
  if(crop == "Wheat"){
    chartData = wheatDataPie;
  } else if(crop == "Potato"){
    chartData = potatoDataPie;
  } else if(crop == "Tomato"){
    chartData = tomatoDataPie;
  } else if(crop == "Maize"){
    chartData = maizeDataPie;
  } else if(crop=="Rice"){
    chartData = riceDataPie;
  }
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Nutrient Requirement</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  )
}

// import * as React from "react"
// import { Label, Pie, PieChart, Sector } from "recharts"
// import { PieSectorDataItem } from "recharts/types/polar/Pie"

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartStyle,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// export const description = "An interactive pie chart"

// const desktopData = [
//   { month: "Nitrogen", desktop: 80, fill: "var(--color-january)" },
//   { month: "Phosphorus", desktop: 43, fill: "var(--color-february)" },
//   { month: "Potassium", desktop: 25, fill: "var(--color-march)" },
//   { month: "Bio-fertilizers", desktop: 20, fill: "var(--color-april)" },
//   // { month: "may", desktop: 209, fill: "var(--color-may)" },
// ]

// const TomatoData = [
//     { month: "january", desktop: 186, fill: "var(--color-january)" },
//     { month: "february", desktop: 305, fill: "var(--color-february)" },
//     { month: "march", desktop: 237, fill: "var(--color-march)" },
//     { month: "april", desktop: 173, fill: "var(--color-april)" },
//     { month: "may", desktop: 209, fill: "var(--color-may)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   desktop: {
//     label: "Desktop",
//   },
//   mobile: {
//     label: "Mobile",
//   },
//   january: {
//     label: "January",
//     color: "hsl(var(--chart-1))",
//   },
//   february: {
//     label: "February",
//     color: "hsl(var(--chart-2))",
//   },
//   march: {
//     label: "March",
//     color: "hsl(var(--chart-3))",
//   },
//   april: {
//     label: "April",
//     color: "hsl(var(--chart-4))",
//   },
//   may: {
//     label: "May",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig

// export default function Component() {
//   const id = "pie-interactive"
//   const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month)

//   const activeIndex = React.useMemo(
//     () => desktopData.findIndex((item) => item.month === activeMonth),
//     [activeMonth]
//   )
//   const months = React.useMemo(() => desktopData.map((item) => item.month), [])

//   return (
//     <Card data-chart={id} className="flex flex-col">
//       <ChartStyle id={id} config={chartConfig} />
//       <CardHeader className="flex-row items-start space-y-0 pb-0">
//         <div className="grid gap-1">
//           <CardTitle className="pr-2 pb-8">Nutrients Required</CardTitle>
//           <CardDescription></CardDescription>
//         </div>
//         <Select value={activeMonth} onValueChange={setActiveMonth}>
//           <SelectTrigger
//             className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
//             aria-label="Select a value"
//           >
//             <SelectValue placeholder="Select month" />
//           </SelectTrigger>
//           <SelectContent align="end" className="rounded-xl">
//             {months.map((key) => {
//               const config = chartConfig[key as keyof typeof chartConfig]

//               if (!config) {
//                 return null
//               }

//               return (
//                 <SelectItem
//                   key={key}
//                   value={key}
//                   className="rounded-lg [&_span]:flex"
//                 >
//                   <div className="flex items-center gap-2 text-xs">
//                     <span
//                       className="flex h-3 w-3 shrink-0 rounded-sm"
//                       style={{
//                         backgroundColor: `var(--color-${key})`,
//                       }}
//                     />
//                     {config?.label}
//                   </div>
//                 </SelectItem>
//               )
//             })}
//           </SelectContent>
//         </Select>
//       </CardHeader>
//       <CardContent className="flex flex-1 justify-center pb-0">
//         <ChartContainer
//           id={id}
//           config={chartConfig}
//           className="mx-auto aspect-square w-full max-w-[300px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               data={desktopData}
//               dataKey="desktop"
//               nameKey="month"
//               innerRadius={60}
//               strokeWidth={5}
//               activeIndex={activeIndex}
//               activeShape={({
//                 outerRadius = 0,
//                 ...props
//               }: PieSectorDataItem) => (
//                 <g>
//                   <Sector {...props} outerRadius={outerRadius + 10} />
//                   <Sector
//                     {...props}
//                     outerRadius={outerRadius + 25}
//                     innerRadius={outerRadius + 12}
//                   />
//                 </g>
//               )}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-3xl font-bold"
//                         >
//                           {desktopData[activeIndex].desktop.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground"
//                         >
//                           Visitors
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   )
// }
