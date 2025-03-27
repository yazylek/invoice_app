"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { data: "matched", invoices: 34, fill: "var(--chart-1)" },
  { data: "unmatched", invoices: 38, fill: "var(--chart-2)" },
  { data: "requiresVerification", invoices: 9, fill: "var(--chart-3)" },
];

const chartConfig = {
  invoices: {
    label: "Invoices",
  },
  matched: {
    label: "Matched",
    color: "var(--chart-1)",
  },
  unmatched: {
    label: "Unmatched",
    color: "var(--chart-2)",
  },
  requiresVerification: {
    label: "Verification",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function PieChartDashboard() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Invoices</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="invoices" hideLabel />}
            />
            <Pie data={chartData} dataKey="invoices">
              <LabelList
                dataKey="data"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="data" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        {/* <div className="flex items-center gap-2 font-medium leading-none"></div>
        <div className="leading-none text-muted-foreground"></div> */}
      </CardFooter>
    </Card>
  );
}
